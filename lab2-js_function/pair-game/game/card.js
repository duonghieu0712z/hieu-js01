import { Node } from "../engine/node.js";
import { Sprite } from "../engine/sprite.js";

export class Card extends Node {
  constructor(value, image, cover) {
    super();

    this._image = new Sprite(image);
    this.addChild(this._image);

    this._cover = new Sprite(cover);
    this.addChild(this._cover);

    this.isActive = false;
    this.value = value;
  }

  get isActive() {
    return this._isActive;
  }

  set isActive(value) {
    this._isActive = value;
    this._image.active = this._isActive;
    this._cover.active = !this._isActive;
  }

  flip(duration) {
    gsap.to(this, {
      scaleX: 0,
      duration,
      onComplete: () => {
        this.isActive = !this.isActive;
        gsap.to(this, { scaleX: 1, duration });
      },
    });
  }
}
