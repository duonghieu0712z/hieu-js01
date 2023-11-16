const root = document.getElementById("root");

const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = 
root.appendChild(container);

let firstCard;

function createCard(color) {
  const card = document.createElement("div");
  card.style.width = "100px";
  card.style.height = "140px";
  card.style.backgroundColor = "gray";

  card.classList.add("card");
  card.dataset.color = color;
  card.dataset.revealed = false;

  card.onclick = () => {
    console.log(card);
    if (card.dataset.revealed == true || card === firstCard) {
      return;
    }

    card.style.backgroundColor = card.dataset.color;

    if (!firstCard) {
      firstCard = card;
      return;
    }

    if (card.dataset.color === firstCard.dataset.color) {
      card.dataset.revealed = true;
      firstCard.dataset.revealed = true;

      firstCard = null;
      return;
    }

    setTimeout(() => {
      card.style.backgroundColor = "gray";
      firstCard.style.backgroundColor = "gray";
      firstCard = null;
    }, 1000);
  };

  return card;
}

container.appendChild(createCard("red"));
container.appendChild(createCard("green"));
container.appendChild(createCard("red"));
container.appendChild(createCard("green"));
