<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Dragon Ball Tribute</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Dragon Ball Tribute</h1>
    <img id="goku" src="https://upload.wikimedia.org/wikipedia/pt/5/59/Goku_anime.png" alt="Goku">
    <button id="powerBtn">Transformar em Super Saiyajin</button>
    <p id="desc">Clique no botão para ver a transformação!</p>
  </div>
  <script src="script.js"></script>
</body>
</html>

body {
  background: linear-gradient(120deg, #f9d423 0%, #ff4e50 100%);
  font-family: 'Segoe UI', Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: #222;
}
.container {
  text-align: center;
  padding-top: 60px;
}
h1 {
  font-size: 2.5rem;
  text-shadow: 2px 2px 6px #fff700;
  margin-bottom: 30px;
}
#goku {
  width: 220px;
  transition: filter 0.6s, transform 0.6s;
}
.super {
  filter: brightness(1.7) saturate(2) drop-shadow(0 0 20px #ffeb3b);
  transform: scale(1.07) rotate(-3deg);
}
button {
  background: #ffeb3b;
  border: none;
  color: #222;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 12px 30px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(255,235,59,0.2);
  margin-top: 24px;
  transition: background 0.3s;
}
button:hover {
  background: #fff700;
}
#desc {
  margin-top: 22px;
  font-size: 1rem;
  color: #333;

const goku = document.getElementById('goku');
const btn = document.getElementById('powerBtn');
const desc = document.getElementById('desc');

btn.addEventListener('click', () => {
  if (!goku.classList.contains('super')) {
    goku.classList.add('super');
    desc.textContent = 'Goku se transformou em Super Saiyajin!';
    btn.textContent = 'Voltar ao Normal';
  } else {
    goku.classList.remove('super');
    desc.textContent = 'Clique no botão para ver a transformação!';
    btn.textContent = 'Transformar em Super Saiyajin';
  }
});
}
