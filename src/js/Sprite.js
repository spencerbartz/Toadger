/*jshint esversion: 6 */

/*
* Class Sprite
* */

export default class Sprite {
  constructor(img) {
    this.img = img;
    this.x   = 0;
    this.y   = 0;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }

  toSTring() {
    console.log("Hey I'm a sprite");
  }
}
