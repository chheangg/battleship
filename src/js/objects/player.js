import Coordinate from "./Coordinate";
import Gameboard from "./Gameboard";

export default class Player {
  constructor(gameObject, isBot, initialTurn) {
    this.isBot = isBot;
    this.isTurn = initialTurn;
    this.name = "";
    this.board = new Gameboard(gameObject, this);
  }

  // Bot create random attack cord on the board, keep retrying if it is not valid;
  botEval(player) {
    const rand = new Coordinate(
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    );
    const attackExist = player.board.attacks.find(
      (attempt) => attempt.x === rand.x && attempt.y === rand.y,
    );

    if (attackExist) {
      return this.botEval(player);
    }

    return rand;
  }

  // Player simply receive attack if it is not a bot (implying coordinate exists)
  // otherwise, a coord is randomly generated for the bot to attack

  attack(player, coordinate) {
    return player.board.receiveAttack(coordinate);
  }

  // Only use to decide if playerOne is a bot or a real player
  static randomPlayerDecider() {
    const botDecider = Math.random() >= 0.5;
    return new Player(botDecider, true);
  }
}
