class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.board = new Board(this.canvas);
  }
  onLoadOrResize() {
    this.canvas.width = Math.floor(window.innerWidth * 0.95);
    this.canvas.height = Math.floor(window.innerHeight * 0.95);
    this.board.draw();
  }
  draw() {
    window.addEventListener("load", () => {
      this.onLoadOrResize();
    });
    window.addEventListener("resize", () => {
      this.onLoadOrResize();
    });
  }
}

function main() {
  const game = new Game();
  game.draw();
}

main();
