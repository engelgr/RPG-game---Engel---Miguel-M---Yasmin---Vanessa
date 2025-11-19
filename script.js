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
