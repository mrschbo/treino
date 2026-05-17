const app = document.getElementById("app");

const weeks = [
  {
    title: "Semana 1 — Pós-menstruação",
    workouts: [
      {
        name: "Treino A — Inferiores + Core",
        exercises: [
          {
            nome: "Agachamento Livre",
            tipo: "Calistenia",
            foco: "Pistol Squat",
            tecnica: "Manter peso no centro do pé",
            explicacao:
              "Desenvolve amplitude, estabilidade e força relativa.",
            video: "",
            nota: ""
          },

          {
            nome: "Leg Press 45º",
            tipo: "Máquina",
            foco: "Força Base",
            tecnica: "Evitar bloqueio articular",
            explicacao:
              "Permite progressão segura de carga sem exigir estabilização excessiva.",
            video: "",
            nota: ""
          },

          {
            nome: "Hollow Body Hold",
            tipo: "Calistenia",
            foco: "Core",
            tecnica: "Achatar lombar no chão",
            explicacao:
              "Base da tensão corporal para movimentos de calistenia.",
            video: "",
            nota: ""
          }
        ]
      },

      {
        name: "Treino B — Superiores + Escápula",
        exercises: [
          {
            nome: "Puxada Frontal",
            tipo: "Máquina",
            foco: "Barra Fixa",
            tecnica: "Puxar cotovelos em direção ao chão",
            explicacao:
              "Ajuda no desenvolvimento de dorsais e escápulas.",
            video: "",
            nota: ""
          },

          {
            nome: "Scapular Push-up",
            tipo: "Calistenia",
            foco: "Escápula",
            tecnica: "Mover apenas as escápulas",
            explicacao:
              "Fortalece serrátil e estabilizadores escapulares.",
            video: "",
            nota: ""
          }
        ]
      }
    ]
  }
];

function createCard(exercise) {

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
  
    <div class="card-top">
      <input type="checkbox" />

      <div class="card-title">
        ${exercise.nome}
      </div>
    </div>

    <div class="meta">
      Tipo: ${exercise.tipo}<br>
      Foco: ${exercise.foco}
    </div>

    <div class="section">
      <div class="section-title">
        Técnica
      </div>

      ${exercise.tecnica}
    </div>

    <div class="section">
      <div class="section-title">
        Por que ajuda na calistenia
      </div>

      ${exercise.explicacao}
    </div>

    <div class="section">
      <div class="section-title">
        Vídeo
      </div>

      <input 
        type="text"
        placeholder="colar link"
      />
    </div>

    <div class="section">
      <div class="section-title">
        Nota pessoal
      </div>

      <textarea placeholder="como foi hoje?"></textarea>
    </div>

  `;

  return card;
}

function renderApp() {

  weeks.forEach((week) => {

    const weekDiv = document.createElement("div");
    weekDiv.className = "week";

    weekDiv.innerHTML = `
      <div class="week-title">
        ${week.title}
      </div>
    `;

    week.workouts.forEach((workout) => {

      const workoutDiv = document.createElement("div");
      workoutDiv.className = "workout";

      const header = document.createElement("div");
      header.className = "workout-header";

      header.innerHTML = `
        <h2>${workout.name}</h2>
      `;

      const content = document.createElement("div");
      content.className = "workout-content";

      header.addEventListener("click", () => {

        const visible =
          content.style.display === "block";

        content.style.display =
          visible ? "none" : "block";
      });

      workout.exercises.forEach((exercise) => {

        content.appendChild(
          createCard(exercise)
        );
      });

      const addButton =
  document.createElement("button");

addButton.className = "add-button";

addButton.innerText =
  "+ Novo exercício";

addButton.addEventListener("click", () => {

  const newExercise = {
    nome: "Novo exercício",
    tipo: "Máquina",
    foco: "",
    tecnica: "",
    explicacao: "",
    video: "",
    nota: ""
  };

  const newCard =
    createCard(newExercise);

  content.insertBefore(
    newCard,
    addButton
  );
});

content.appendChild(addButton);

    app.appendChild(weekDiv);
  });
}

renderApp();
