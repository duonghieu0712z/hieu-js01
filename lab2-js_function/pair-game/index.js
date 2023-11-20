import { Node } from "./engine/node.js";
import { Card } from "./game/card.js";
import { shuffle } from "./game/utils.js";

const WIDTH = 100;
const HEIGHT = 146;
const COLUMN = 5;
const DURATION = 0.5;

let firstCard, secondCard;

const container = new Node();
document.body.appendChild(container.element);

const cardNames = [
  "raye",
  "roze",
  "kagari",
  "shizuku",
  "hayate",
  "kaina",
  "azalea",
  "camellia",
  "zeke",
  "hamp",
];

shuffle([...cardNames, ...cardNames]).forEach((value, index) => {
  const card = new Card(value, `./assets/${value}.jpg`, "./assets/cover.jpg");
  card.x = (index % COLUMN) * WIDTH;
  card.y = Math.trunc(index / COLUMN) * HEIGHT;
  card.width = WIDTH;
  card.height = HEIGHT;
  card.onClick(() => {
    if (card.isActive || firstCard === card) {
      return;
    }

    card.flip(DURATION);

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
    }
  });

  container.addChild(card);
});
