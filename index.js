// Créer 3 variables pour stocker 3 chiffre aléatoires

// Donner au loby une couleur de fond en rgb()

// Montrer sur le body la couleur rgb()
function getColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.background = color;
  document.body.innerHTML = `<h2>${color}</h2>`;
}

setInterval(getColor, 1200);
