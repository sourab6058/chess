class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.board = new Board(this.canvas);

    this.whitePieces = [
      (this.whiteRook1 = new Piece(this.board, 0, 0, Piece.WHITE_ROOK)),
      (this.whiteKnight1 = new Piece(this.board, 0, 1, Piece.WHITE_KNIGHT)),
      (this.whiteBishop1 = new Piece(this.board, 0, 2, Piece.WHITE_BISHOP)),
      (this.whiteQueen = new Piece(this.board, 0, 3, Piece.WHITE_QUEEN)),
      (this.whiteKing = new Piece(this.board, 0, 4, Piece.WHITE_KING)),
      (this.whiteBishop2 = new Piece(this.board, 0, 5, Piece.WHITE_BISHOP)),
      (this.whiteKnight2 = new Piece(this.board, 0, 6, Piece.WHITE_KNIGHT)),
      (this.whiteRook2 = new Piece(this.board, 0, 7, Piece.WHITE_ROOK)),
      (this.whitePawn1 = new Piece(this.board, 1, 0, Piece.WHITE_PAWN)),
      (this.whitePawn2 = new Piece(this.board, 1, 1, Piece.WHITE_PAWN)),
      (this.whitePawn3 = new Piece(this.board, 1, 2, Piece.WHITE_PAWN)),
      (this.whitePawn4 = new Piece(this.board, 1, 3, Piece.WHITE_PAWN)),
      (this.whitePawn5 = new Piece(this.board, 1, 4, Piece.WHITE_PAWN)),
      (this.whitePawn6 = new Piece(this.board, 1, 5, Piece.WHITE_PAWN)),
      (this.whitePawn7 = new Piece(this.board, 1, 6, Piece.WHITE_PAWN)),
      (this.whitePawn8 = new Piece(this.board, 1, 7, Piece.WHITE_PAWN)),
    ];

    this.blackPieces = [
      (this.blackRook1 = new Piece(this.board, 7, 0, Piece.BLACK_ROOK)),
      (this.blackKnight1 = new Piece(this.board, 7, 1, Piece.BLACK_KNIGHT)),
      (this.blackBishop1 = new Piece(this.board, 7, 2, Piece.BLACK_BISHOP)),
      (this.blackQueen = new Piece(this.board, 7, 3, Piece.BLACK_QUEEN)),
      (this.blackKing = new Piece(this.board, 7, 4, Piece.BLACK_KING)),
      (this.blackBishop2 = new Piece(this.board, 7, 5, Piece.BLACK_BISHOP)),
      (this.blackKnight2 = new Piece(this.board, 7, 6, Piece.BLACK_KNIGHT)),
      (this.blackRook2 = new Piece(this.board, 7, 7, Piece.BLACK_ROOK)),
      (this.blackPawn1 = new Piece(this.board, 6, 0, Piece.BLACK_PAWN)),
      (this.blackPawn2 = new Piece(this.board, 6, 1, Piece.BLACK_PAWN)),
      (this.blackPawn3 = new Piece(this.board, 6, 2, Piece.BLACK_PAWN)),
      (this.blackPawn4 = new Piece(this.board, 6, 3, Piece.BLACK_PAWN)),
      (this.blackPawn5 = new Piece(this.board, 6, 4, Piece.BLACK_PAWN)),
      (this.blackPawn6 = new Piece(this.board, 6, 5, Piece.BLACK_PAWN)),
      (this.blackPawn7 = new Piece(this.board, 6, 6, Piece.BLACK_PAWN)),
      (this.blackPawn8 = new Piece(this.board, 6, 7, Piece.BLACK_PAWN)),
    ];

    this.pieces = [...this.whitePieces, ...this.blackPieces];
  }
  onLoadOrResize() {
    this.canvas.width = Math.floor(window.innerWidth * 0.95);
    this.canvas.height = Math.floor(window.innerHeight * 0.95);
    this.board.draw();
    for (const piece of this.pieces) {
      piece.draw();
    }
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
