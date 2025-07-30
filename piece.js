class Piece {
  static WHITE_PAWN = "whitePawn";
  static WHITE_KING = "whiteKing";
  static WHITE_KNIGHT = "whiteKnight";
  static WHITE_QUEEN = "whiteQueen";
  static WHITE_BISHOP = "whiteBishop";
  static WHITE_ROOK = "whiteRook";

  static BLACK_PAWN = "blackPawn";
  static BLACK_KING = "blackKing";
  static BLACK_KNIGHT = "blackKnight";
  static BLACK_QUEEN = "blackQueen";
  static BLACK_BISHOP = "blackBishop";
  static BLACK_ROOK = "blackRook";

  constructor(board, row, col, piece) {
    this.board = board;
    this.row = row;
    this.col = col;
    this.piece = piece;

    const color = this.piece.includes("black") ? "black" : "white";

    const imgName =
      color + "-" + this.piece.split(color)[1].toLowerCase() + ".png";
    const imgPath = "/assets/" + imgName;

    this.img = new Image();
    this.img.src = imgPath;
    this.img.width = this.board.squareSize;
    this.img.height = this.board.squareSize;
  }

  draw() {
    this.board.ctx.drawImage(
      this.img,
      this.board.startX + this.col * this.board.squareSize,
      this.board.startY + this.row * this.board.squareSize,
      this.board.squareSize,
      this.board.squareSize
    );
  }
}
