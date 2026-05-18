// =====================
// DADOS DOS EXERCÍCIOS
// =====================

const exercisesData = {
  "segunda": [
    { id: 1, nome: "Flexão", tipo: "Calistenia", series: "3x10", foco: "Peito", tecnica: "Mãos na largura dos ombros", explicacao: "Fortalece peito, ombro e tríceps" },
    { id: 2, nome: "Rosca Barra", tipo: "Máquina", series: "3x12", foco: "Bíceps", tecnica: "Cotovelo fixo", explicacao: "Isolamento do bíceps" }
  ],
  "quarta": [
    { id: 3, nome: "Barra Fixa", tipo: "Calistenia", series: "3x8", foco: "Costas", tecnica: "Pegada pronada", explicacao: "Trabalha latíssimo e força geral" },
    { id: 4, nome: "Puxada", tipo: "Máquina", series: "4x10", foco: "Costas", tecnica: "Puxar até o peito", explicacao: "Complementa trabalho de costas" }
  ],
  "sexta": [
    { id: 5, nome: "Agachamento", tipo: "Máquina", series: "4x12", foco: "Perna", tecnica: "Profundidade máxima", explicacao: "Trabalha toda a perna" },
    { id: 6, nome: "Leg Press", tipo: "Máquina", series: "3x15", foco: "Perna", tecnica: "90 graus", explicacao: "Complementa agachamento" }
  ]
};

function createCard(exercise) {

  const card = document.createElement("div");

  card.className = "card";

  card.innerHTML = `

    <div class="card-top">

      <input type="checkbox" />

      <div class="card-title">
        ${exercise.nome || ""}
      </div>

      <button class="delete-button">
        ✕
      </button>

    </div>


    <div class="meta">

      <label>Tipo</label>

      <input
        class="tipo-input"
        type="text"
        value="${exercise.tipo || ""}"
      />


      <label>Séries</label>

      <input
        class="series-input"
        type="text"
        value="${exercise.series || ""}"
      />


      <label>Foco</label>

      <input
        class="foco-input"
        type="text"
        value="${exercise.foco || ""}"
      />

    </div>



    <div class="section">

      <div class="section-title">
        Técnica
      </div>

      <textarea
        class="tecnica-input"
      >${exercise.tecnica || ""}</textarea>

    </div>



    <div class="section">

      <div class="section-title">
        Por que ajuda na calistenia
      </div>

      <textarea
        class="explicacao-input"
      >${exercise.explicacao || ""}</textarea>

    </div>



    <div class="section">

      <div class="section-title">
        Vídeo
      </div>

      <input
        type="text"
        class="video-input"
        placeholder="colar link"
      />

    </div>



    <div class="section">

      <div class="section-title">
        Nota pessoal
      </div>

      <textarea
        class="nota-input"
        placeholder="como foi hoje?"
      ></textarea>

    </div>

  `;



  // =====================
  // ELEMENTOS
  // =====================

  const checkbox =
    card.querySelector(
      'input[type="checkbox"]'
    );

  const deleteButton =
    card.querySelector(
      ".delete-button"
    );

  const tipoInput =
    card.querySelector(
      ".tipo-input"
    );

  const seriesInput =
    card.querySelector(
      ".series-input"
    );

  const focoInput =
    card.querySelector(
      ".foco-input"
    );

  const tecnicaInput =
    card.querySelector(
      ".tecnica-input"
    );

  const explicacaoInput =
    card.querySelector(
      ".explicacao-input"
    );

  const videoInput =
    card.querySelector(
      ".video-input"
    );

  const notaInput =
    card.querySelector(
      ".nota-input"
    );



  // =====================
  // CARREGAR DADOS
  // =====================

  checkbox.checked =
    localStorage.getItem(
      `${exercise.id}_checked`
    ) === "true";


  tipoInput.value =
    localStorage.getItem(
      `${exercise.id}_tipo`
    ) || exercise.tipo || "";


  seriesInput.value =
    localStorage.getItem(
      `${exercise.id}_series`
    ) || exercise.series || "";


  focoInput.value =
    localStorage.getItem(
      `${exercise.id}_foco`
    ) || exercise.foco || "";


  tecnicaInput.value =
    localStorage.getItem(
      `${exercise.id}_tecnica`
    ) || exercise.tecnica || "";


  explicacaoInput.value =
    localStorage.getItem(
      `${exercise.id}_explicacao`
    ) || exercise.explicacao || "";


  videoInput.value =
    localStorage.getItem(
      `${exercise.id}_video`
    ) || "";


  notaInput.value =
    localStorage.getItem(
      `${exercise.id}_nota`
    ) || "";



  // =====================
  // SALVAR DADOS
  // =====================

  checkbox.addEventListener(
    "change",
    () => {

      localStorage.setItem(
        `${exercise.id}_checked`,
        checkbox.checked
      );
    }
  );



  tipoInput.addEventListener(
    "input",
    () => {

      localStorage.setItem(
        `${exercise.id}_tipo`,
        tipoInput.value
      );
    }
  );



  seriesInput.addEventListener(
    "input",
    () => {

      localStorage.setItem(
        `${exercise.id}_series`,
        seriesInput.value
      );
    }
  );



  focoInput.addEventListener(
    "input",
    () => {

      localStorage.setItem(
        `${exercise.id}_foco`,
        focoInput.value
      );
    }
  );



  tecnicaInput.addEventListener(
    "input",
    () => {

      localStorage.setItem(
        `${exercise.id}_tecnica`,
        tecnicaInput.value
      );
    }
  );



  explicacaoInput.addEventListener(
    "input",
    () => {

      localStorage.setItem(
        `${exercise.id}_explicacao`,
        explicacaoInput.value
      );
    }
  );



  videoInput.addEventListener(
    "input",
    () => {

      localStorage.setItem(
        `${exercise.id}_video`,
        videoInput.value
      );
    }
  );



  notaInput.addEventListener(
    "input",
    () => {

      localStorage.setItem(
        `${exercise.id}_nota`,
        notaInput.value
      );
    }
  );



  // =====================
  // EXCLUIR CARD
  // =====================

  deleteButton.addEventListener(
    "click",
    () => {

      const confirmDelete =
        confirm(
          "Remover exercício?"
        );

      if (confirmDelete) {

        card.remove();

        localStorage.removeItem(
          `${exercise.id}_checked`
        );

        localStorage.removeItem(
          `${exercise.id}_tipo`
        );

        localStorage.removeItem(
          `${exercise.id}_series`
        );

        localStorage.removeItem(
          `${exercise.id}_foco`
        );

        localStorage.removeItem(
          `${exercise.id}_tecnica`
        );

        localStorage.removeItem(
          `${exercise.id}_explicacao`
        );

        localStorage.removeItem(
          `${exercise.id}_video`
        );

        localStorage.removeItem(
          `${exercise.id}_nota`
        );

      }

    }
  );



  return card;
}

// =====================
// RENDERIZAR PÁGINA
// =====================

function renderExercises() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  for (const [dia, exercises] of Object.entries(exercisesData)) {
    const workoutDiv = document.createElement("div");
    workoutDiv.className = "workout";

    const header = document.createElement("div");
    header.className = "workout-header";
    header.style.cursor = "pointer";
    header.innerHTML = `<h2>${dia.charAt(0).toUpperCase() + dia.slice(1)}</h2>`;

    const content = document.createElement("div");
    content.className = "workout-content";
    content.style.display = "block";

    exercises.forEach(exercise => {
      content.appendChild(createCard(exercise));
    });

    header.addEventListener("click", () => {
      if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });

    workoutDiv.appendChild(header);
    workoutDiv.appendChild(content);
    app.appendChild(workoutDiv);
  }
}

// =====================
// INICIALIZAR
// =====================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderExercises);
} else {
  renderExercises();
}
