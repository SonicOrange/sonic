const sonicStyles = [
  "SONIC", "Sonic", "S0nic", "Son1c", "SoNiC"
];

const extras = [
  "Dash", "Flash", "Rush", "Speed", "Pro", "Neo", "Vortex"
];

function generate() {
  const sonic = sonicStyles[Math.floor(Math.random() * sonicStyles.length)];
  const extra = extras[Math.floor(Math.random() * extras.length)];
  const num = Math.floor(Math.random() * 999);

  const pseudo = sonic + extra + num;
  document.getElementById("result").innerText = pseudo;
}

function copyPseudo() {
  const text = document.getElementById("result").innerText;
  if (text === "---") return;

  navigator.clipboard.writeText(text);
  alert("Pseudo copie");
}

function editPseudo() {
  const current = document.getElementById("result").innerText;
  if (current === "---") return;

  const newPseudo = prompt("Modifier le pseudo", current);
  if (newPseudo) {
    document.getElementById("result").innerText = newPseudo;
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}
