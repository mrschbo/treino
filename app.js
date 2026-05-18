function createCard(exercise) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-top">
      <input type="checkbox" />
      <div class="card-title">${exercise.nome}</div>
      <button class="delete-button">✕</button>
    </div>

    <div class="meta">
      <label>Tipo</label>
      <input class="tipo-input" type="text" value="${exercise.tipo}" />
      
      <label>Séries</label>
      <input class="series-input" type="text" value="${exercise.series}" />
      
      <label>Foco</label>
      <input class="foco-input" type="text" value="${exercise.foco}" />
    </div>

    <div class="section">
      <div class="section-title">Técnica</div>
      <textarea class="tecnica-input">${exercise.tecnica}</textarea>
    </div>

    <div class="section">
      <div class="section-title">Por que ajuda na calistenia</div>
      <textarea class="explicacao-input">${exercise.explicacao}</textarea>
    </div>

    <div class="section">
      <div class="section-title">Vídeo</div>
      <input type="text" class="video-input" placeholder="colar link" />
    </div>

    <div class="section">
      <div class="section-title">Nota pessoal</div>
      <textarea class="nota-input" placeholder="como foi hoje?"></textarea>
    </div>
  `;

  // =====================
  // ELEMENTOS
  // =====================
  const checkbox = card.querySelector('input[type="checkbox"]');
  const deleteButton = card.querySelector(".delete-button");
  const tipoInput = card.querySelector(".tipo-input");
  const seriesInput = card.querySelector(".series-input");
  const focoInput = card.querySelector(".foco-input");
  const tecnicaInput = card.querySelector(".tecnica-input");
  const explicacaoInput = card.querySelector(".explicacao-input");
  const videoInput = card.querySelector(".video-input");
  const notaInput = card.querySelector(".nota-input");

  // =====================
  // CARREGAR DADOS
  // =====================
  checkbox.checked = localStorage.getItem(`${exercise.id}_checked`) === "true";
  tipoInput.value = localStorage.getItem(`${exercise.id}_tipo`) || exercise.tipo;
  seriesInput.value = localStorage.getItem(`${exercise.id}_series`) || exercise.series;
  focoInput.value = localStorage.getItem(`${exercise.id}_foco`) || exercise.foco;
  tecnicaInput.value = localStorage.getItem(`${exercise.id}_tecnica`) || exercise.tecnica;
  explicacaoInput.value = localStorage.getItem(`${exercise.id}_explicacao`) || exercise.explicacao;
  videoInput.value = localStorage.getItem(`${exercise.id}_video`) || "";
  notaInput.value = localStorage.getItem(`${exercise.id}_nota`) || "";

  // =====================
  // SALVAR DADOS
  // =====================
  checkbox.addEventListener("change", () => {
    localStorage.setItem(`${exercise.id}_checked`, checkbox.checked);
  });

  tipoInput.addEventListener("input", () => {
    localStorage.setItem(`${exercise.id}_tipo`, tipoInput.value);
  });

  seriesInput.addEventListener("input", () => {
    localStorage.setItem(`${exercise.id}_series`, seriesInput.value);
  });

  focoInput.addEventListener("input", () => {
    localStorage.setItem(`${exercise.id}_foco`, focoInput.value);
  });

  tecnicaInput.addEventListener("input", () => {
    localStorage.setItem(`${exercise.id}_tecnica`, tecnicaInput.value);
  });

  explicacaoInput.addEventListener("input", () => {
    localStorage.setItem(`${exercise.id}_explicacao`, explicacaoInput.value);
  });

  videoInput.addEventListener("input", () => {
    localStorage.setItem(`${exercise.id}_video`, videoInput.value);
  });

  notaInput.addEventListener("input", () => {
    localStorage.setItem(`${exercise.id}_nota`, notaInput.value);
  });

  deleteButton.addEventListener("click", () => {
    if (confirm("Remover exercício?")) {
      card.remove();
      localStorage.removeItem(`${exercise.id}_nota`);
      localStorage.removeItem(`${exercise.id}_checked`);
      localStorage.removeItem(`${exercise.id}_video`);
      localStorage.removeItem(`${exercise.id}_tipo`);
      localStorage.removeItem(`${exercise.id}_series`);
      localStorage.removeItem(`${exercise.id}_foco`);
      localStorage.removeItem(`${exercise.id}_tecnica`);
      localStorage.removeItem(`${exercise.id}_explicacao`);
    }
  });

  return card;
}
