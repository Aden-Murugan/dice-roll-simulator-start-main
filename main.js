// Dice Roll Simulator Demo

// HTML Element for Output
let outputEl = document.getElementById("output");

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "roll-once") {
    rollOnce();
  } else if (selection === "roll-five") {
    roll5Times();
  } else if (selection === "roll-n") {
    rollNTimes();
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

function rollOnce() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL ONCE</h3>";

  // Random Dice Roll & Total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
  document.getElementById("output2").innerHTML = ` `;
}

function roll5Times() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 5 TIMES</h3>";
  for (let n = 0; n < 5; n++) {
    // Random Dice Roll & Total
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
  document.getElementById("output2").innerHTML = ` `;
}

function rollNTimes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 'N' TIMES</h3>";
  m = prompt("enter # of rolls");
  for (let n = 0; n < m; n++) {
    // Random Dice Roll & Total
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
  document.getElementById("output2").innerHTML = ` `;
}

function snakeEyes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";
  let n = 0;
  let t = 0;
  while (n < 1) {
    // Random Dice Roll & Total
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    // Add Results to output element
    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
    t++;
    if (total === 2) {
      n++;
    }
  }
  document.getElementById("output2").innerHTML = t + ` rolls to get snake eyes`;
}
