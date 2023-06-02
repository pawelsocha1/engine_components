import { Matrix4, Raycaster, Vector2, Vector3 } from "three";
import { Component, Event, Hideable, Updateable } from "../../base-types";
import { Components } from "../../core";
import { OrthoPerspectiveCamera } from "../OrthoPerspectiveCamera";

export type CubeMapFace =
  | "front"
  | "top"
  | "bottom"
  | "right"
  | "left"
  | "back";

export class CubeMap
  extends Component<HTMLDivElement>
  implements Updateable, Hideable
{
  name: string = "CubeMap";
  enabled: boolean = true;
  afterUpdate: Event<CubeMap> = new Event();
  beforeUpdate: Event<CubeMap> = new Event();
  private _cubeFaceClass =
    "flex justify-center font-bold hover:bg-ifcjs-200 hover:text-ifcjs-100 text-white select-none text-xl items-center cursor-pointer text-center bg-ifcjs-100 text-ifcjs-100 absolute w-[120px] h-[120px] border-2 border-solid border-ifcjs-120";
  private _components: Components;
  private _cube = document.createElement("div");
  private _cubeWrapper = document.createElement("div");
  private _matrix = new Matrix4();
  private _visible!: boolean;
  private _raycaster = new Raycaster();
  private _lastHitpoints: {
    front: Vector3 | null;
    top: Vector3 | null;
    bottom: Vector3 | null;
    right: Vector3 | null;
    left: Vector3 | null;
    back: Vector3 | null;
  };

  private _faceOrientations = {
    front: new Vector3(0, 0, 1),
    top: new Vector3(0, 1, 0),
    bottom: new Vector3(0, -1, 0),
    right: new Vector3(1, 0, 0),
    left: new Vector3(-1, 0, 0),
    back: new Vector3(0, 0, -1),
  };

  set visible(value: boolean) {
    this._visible = value;
    if (this._visible) {
      this._cubeWrapper.classList.remove("hidden");
    } else {
      this._cubeWrapper.classList.add("hidden");
    }
  }

  constructor(components: Components) {
    super();
    this._components = components;
    this._cubeWrapper.id = "tooeen-cube-map";
    this._cubeWrapper.className = "absolute right-4 bottom-4 z-10";
    this._cubeWrapper.style.perspective = "350px";
    this._cube.className = "w-[120px] h-[120px] relative";
    this._cube.style.transformStyle = "preserve-3d";
    this._cube.style.transform = "translateZ(-300px)";
    this._cube.style.textTransform = "uppercase";
    this._cubeWrapper.append(this._cube);

    // #region Cube faces
    const frontFace = document.createElement("div");
    frontFace.id = "cube-map-front";
    frontFace.className = this._cubeFaceClass;
    frontFace.textContent = "Front";
    frontFace.style.transform = "rotateX(180deg) translateZ(-60px)";
    frontFace.style.transition = "all 0.2s";
    frontFace.onclick = () => this.orientToFace("front");

    const topFace = document.createElement("div");
    topFace.className = this._cubeFaceClass;
    topFace.textContent = "Top";
    topFace.style.transform = "rotateX(90deg) translateZ(-60px)";
    topFace.style.transition = "all 0.2s";
    topFace.onclick = () => this.orientToFace("top");

    const bottomFace = document.createElement("div");
    bottomFace.className = this._cubeFaceClass;
    bottomFace.textContent = "Bottom";
    bottomFace.style.transform = "rotateX(270deg) translateZ(-60px)";
    bottomFace.style.transition = "all 0.2s";
    bottomFace.onclick = () => this.orientToFace("bottom");

    const rightFace = document.createElement("div");
    rightFace.className = this._cubeFaceClass;
    rightFace.textContent = "Right";
    rightFace.style.transform =
      "rotateY(-270deg) rotateX(180deg) translateZ(-60px)";
    rightFace.style.transition = "all 0.2s";
    rightFace.onclick = () => this.orientToFace("right");

    const leftFace = document.createElement("div");
    leftFace.className = this._cubeFaceClass;
    leftFace.textContent = "Left";
    leftFace.style.transform =
      "rotateY(-90deg) rotateX(180deg) translateZ(-60px)";
    leftFace.style.transition = "all 0.2s";
    leftFace.onclick = () => this.orientToFace("left");

    const backFace = document.createElement("div");
    backFace.className = this._cubeFaceClass;
    backFace.textContent = "Back";
    backFace.style.transform = "translateZ(-60px) rotateZ(180deg)";
    backFace.style.transition = "all 0.2s";
    backFace.onclick = () => this.orientToFace("back");
    // #endregion

    this._cube.append(
      frontFace,
      topFace,
      bottomFace,
      rightFace,
      leftFace,
      backFace
    );
    this._viewerContainer?.append(this._cubeWrapper);

    this._lastHitpoints = {
      front: null,
      top: null,
      bottom: null,
      right: null,
      left: null,
      back: null,
    };

    this.visible = true;
  }

  orientToFace(orientation: CubeMapFace) {
    const camera = this._camera.get();
    this._raycaster.setFromCamera(new Vector2(0, 0), camera);
    const intersection = this._raycaster.intersectObjects(
      this._components.meshes
    )[0];
    if (!intersection && this._camera instanceof OrthoPerspectiveCamera) {
      const controls = this._camera.controls;
      const target = camera.position
        .clone()
        .add(this._faceOrientations[orientation].clone().multiplyScalar(-1));
      controls.setLookAt(
        camera.position.x,
        camera.position.y,
        camera.position.z,
        target.x,
        target.y,
        target.z,
        true
      );
      this._camera.fitModelToFrame();
      return;
    }
    const target = intersection.point;
    this._lastHitpoints[orientation] = target;
    const endPoint = target
      .clone()
      .add(
        this._faceOrientations[orientation]
          .clone()
          .multiplyScalar(intersection.distance)
      );
    if (this._camera instanceof OrthoPerspectiveCamera) {
      const controls = this._camera.controls;
      controls.setLookAt(
        endPoint.x,
        endPoint.y,
        endPoint.z,
        target.x,
        target.y,
        target.z,
        true
      );
      this._camera.fitModelToFrame();
      // this._camera.setProjection("Orthographic")
    }
  }

  update() {
    this._matrix.extractRotation(this._camera.get().matrixWorldInverse);
    this._cube.style.transform = `translateZ(-300px) ${this.getCameraCSSMatrix(
      this._matrix
    )}`;
  }

  private get _viewerContainer() {
    return this._components.renderer.get().domElement.parentElement;
  }

  private get _camera() {
    return this._components.camera;
  }

  private getCameraCSSMatrix(matrix: any) {
    const { elements } = matrix;
    const epsilon = (value: number) => {
      return Math.abs(value) < 1e-10 ? 0 : value;
    };
    return `matrix3d(
            ${epsilon(elements[0])},
            ${epsilon(-elements[1])},
            ${epsilon(elements[2])},
            ${epsilon(elements[3])},
            ${epsilon(elements[4])},
            ${epsilon(-elements[5])},
            ${epsilon(elements[6])},
            ${epsilon(elements[7])},
            ${epsilon(elements[8])},
            ${epsilon(-elements[9])},
            ${epsilon(elements[10])},
            ${epsilon(elements[11])},
            ${epsilon(elements[12])},
            ${epsilon(-elements[13])},
            ${epsilon(elements[14])},
            ${epsilon(elements[15])})
        `;
  }

  get(): HTMLDivElement {
    return this._cubeWrapper;
  }
}
