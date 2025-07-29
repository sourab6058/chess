class Board {
  constructor(canvas) {
    this.rowCount = 8;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    let canvasWidth = this.canvas.width;
    let canvasHeight = this.canvas.height;
    this.size = Math.floor(Math.min(canvasWidth, canvasHeight) * 0.9);
    this.startX = Math.floor(canvasWidth / 2 - this.size / 2);
    this.startY = Math.floor(canvasHeight / 2 - this.size / 2);

    this.squareSize = Math.floor(this.size / this.rowCount);
    this.green = "#5d9948";
    this.white = "#ffffff";
  }

  draw() {
    let canvasWidth = this.canvas.width;
    let canvasHeight = this.canvas.height;
    this.size = Math.floor(Math.min(canvasWidth, canvasHeight) * 0.9);
    this.startX = Math.floor(canvasWidth / 2 - this.size / 2);
    this.startY = Math.floor(canvasHeight / 2 - this.size / 2);

    this.squareSize = Math.floor(this.size / this.rowCount);

    this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    this.ctx.strokeRect(
      this.startX - 1,
      this.startY - 1,
      this.size + 1,
      this.size + 1
    );

    for (let row = 0; row < this.rowCount; row++) {
      for (let col = 0; col < this.rowCount; col++) {
        if (row % 2 == col % 2) {
          this.ctx.fillStyle = this.green;
        } else {
          this.ctx.fillStyle = this.white;
        }
        this.ctx.fillRect(
          this.startX + col * this.squareSize,
          this.startY + row * this.squareSize,
          this.squareSize,
          this.squareSize
        );
      }
    }
  }
}
