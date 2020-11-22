export class TicTacToe {
  static CROSS = 'X'

  static NOUGHT = 'O'

  static BLANK = null

  constructor() {
    this.currentTurn = TicTacToe.CROSS
    this.movesMade = 0
    this.tiles = Array(9).fill(new Tile())
  }

  static get winningPatterns() {
    let wp = [
      "111000000", "000111000", "000000111",
      "100100100", "010010010", "001001001",
      "100010001", "001010100"
    ];

    let r = new Array(wp.length);

    for (let i = wp.length; i--;) {
      r[i] = parseInt(wp[i], 2);
    }

    return r;
  }
}

export class Tile {
  constructor() {
    this.value = null
    this.highlighted = false
  }

  equals(_tile) {
    return this.value === _tile;
  }

  hasData() {
    return this.value !== Tile.BLANK;
  }
}

export class AIPlayer {
  constructor(tiles) {
    this.tiles = tiles
    this.seed = TicTacToe.NOUGHT
    this.oppSeed = TicTacToe.CROSS
  }

  move() {
    return this.minimax(2, this.seed)[1];
  }

  minimax(depth, player) {
    let nextMoves = this.getValidMoves();

    let best = (player === this.seed) ? -1e100 : 1e100,
      current,
      bestIdx = -1;

    if (nextMoves.length === 0 || depth === 0) {
      best = this.evaluate();
    } else {
      for (let i = nextMoves.length; i--;) {
        let m = nextMoves[i];
        this.tiles[m].set(player);

        if (player === this.seed) {
          current = this.minimax(depth - 1, this.oppSeed)[0];
          if (current > best) {
            best = current;
            bestIdx = m;
          }
        } else {
          current = this.minimax(depth - 1, this.seed)[0];
          if (current < best) {
            best = current;
            bestIdx = m;
          }
        }

        this.tiles[m].set(Tile.BLANK);
      }
    }

    return [best, bestIdx];
  }

  getValidMoves() {
    let nm = [];
    if (this.hasWon(this.seed) || this.hasWon(this.oppSeed)) {
      return nm;
    }

    for (let i = this.tiles.length; i--;) {
      if (!this.tiles[i].hasData()) {
        nm.push(i);
      }
    }

    return nm;
  }

  evaluate() {
    let s = 0;

    s += this.evaluateLine(0, 1, 2);
    s += this.evaluateLine(3, 4, 5);
    s += this.evaluateLine(6, 7, 8);
    s += this.evaluateLine(0, 3, 6);
    s += this.evaluateLine(1, 4, 7);
    s += this.evaluateLine(2, 5, 8);
    s += this.evaluateLine(0, 4, 8);
    s += this.evaluateLine(2, 4, 6);
    return s;
  }

  evaluateLine(idx1, idx2, idx3) {
    let s = 0;

    if (this.tiles[idx1].equals(this.seed)) {
      s = 1;
    } else if (this.tiles[idx1].equals(this.oppSeed)) {
      s = -1;
    }

    if (this.tiles[idx2].equals(this.seed)) {
      if (s === 1) {
        s = 10;
      } else if (s === -1) {
        return 0;
      } else {
        s = 1;
      }
    } else if (this.tiles[idx2].equals(this.oppSeed)) {
      if (s === -1) {
        s = -10;
      } else if (s === 1) {
        return 0;
      } else {
        s = -1;
      }
    }

    if (this.tiles[idx3].equals(this.seed)) {
      if (s > 0) {
        s *= 10;
      } else if (s < 0) {
        return 0;
      } else {
        s = 1;
      }
    } else if (this.tiles[idx3].equals(this.oppSeed)) {
      if (s < 0) {
        s *= 10;
      } else if (s > 0) {
        return 0;
      } else {
        s = -1;
      }
    }


    return s;
  }

  hasWon(player) {
    let p = 0;

    for (let i = this.tiles.length; i--;) {
      if (this.tiles[i].equals(player)) {
        p |= (1 << i);
      }
    }

    for (let i = TicTacToe.winningPatterns.length; i--;) {
      let wp = TicTacToe.winningPatterns[i];

      if ((p & wp) === wp) {
        return true;
      }
    }

    return false;
  }
}
