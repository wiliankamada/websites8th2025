function nextStep(answer) {
  const question = document.getElementById("question");
  const buttons = document.getElementById("buttons");

  if (answer === "yes") {
    question.textContent = "Do you access content about anorexia on social media?";
    buttons.innerHTML = `
      <button onclick="nextStep2('yes')">Yes</button>
      <button onclick="nextStep2('no')">No</button>
    `;
  } else {
    question.textContent = "Is it another problem related to weight loss?";
    buttons.innerHTML = `
      <button onclick="showMessage('help')">Yes</button>
      <button onclick="showMessage('spread')">No</button>
    `;
  }
}

function nextStep2(answer) {
  const question = document.getElementById("question");
  const buttons = document.getElementById("buttons");

  if (answer === "yes") {
    question.textContent = "Are you feeling better?";
    buttons.innerHTML = `
      <button onclick="showMessage('careful')">Yes</button>
      <button onclick="showMessage('help')">No</button>
    `;
  } else {
    showMessage('help');
  }
}

function showMessage(type) {
  const question = document.getElementById("question");
  const buttons = document.getElementById("buttons");

  const messages = {
    help: "Ask help from a professional.",
    careful: "You can keep watching this type of videos, but be careful!",
    spread: "Try to spread positive content about anorexia on social media!!"
  };

  question.textContent = messages[type];
  buttons.innerHTML = `<button onclick="resetFlow()">🔄 Reset</button>`;
}

function resetFlow() {
  const question = document.getElementById("question");
  const buttons = document.getElementById("buttons");

  question.textContent = "Do you suffer from anorexia?";
  buttons.innerHTML = `
    <button onclick="nextStep('yes')">Yes</button>
    <button onclick="nextStep('no')">No</button>
  `;
}