const palavras = ["amor", "vida", "linda", "perfeita", "gatinha", "cheirosa"];
const container = document.getElementById("hearts-container");

function criarCoracao() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = palavras[Math.floor(Math.random() * palavras.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 16 + "px";
  container.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(criarCoracao, 1000);

// Carregar texto de opinião
fetch("content/opiniao.txt")
  .then(res => res.text())
  .then(texto => {
    document.getElementById("texto-opiniao").textContent = texto;
  });

