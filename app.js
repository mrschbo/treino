const app = document.getElementById("app");

const weeks = [
  {
    title: "Semana 1 — Pós-menstruação",

    workouts: [
      {
        name: "Treino A — Inferiores + Core",

        exercises: [
          {
            id: "agachamento_livre_sem1",

            nome: "Agachamento Livre",

            tipo: "Calistenia",

            series: "3–4 séries de 8–12 reps",

            foco: "Progressão para Pistol Squat",

            tecnica:
              "Manter peso no centro do pé, joelhos alinhados com os dedos. Busque maior amplitude a cada sessão.",

            explicacao:
              "Fase ideal para ganho de força. Tente aumentar a amplitude ou adicionar repetições em relação ao ciclo anterior.",

            video: "",

            nota: ""
          },

          {
            id: "leg_press_sem1",

            nome: "Leg Press 45º",

            tipo: "Máquina",

            series: "3–4 séries de 8–12 reps",

            foco: "Força Base",

            tecnica:
              "Evitar bloqueio articular e manter amplitude controlada.",

            explicacao:
              "Permite progressão segura de carga sem exigir estabilização excessiva.",

            video: "",

            nota: ""
          },

          {
            id: "hollow_hold_sem1",

            nome: "Hollow Body Hold",

            tipo: "Calistenia",

            series: "3 séries de 20–30 segundos",

            foco: "Core",

            tecnica:
              "Achatar a lombar no chão e manter tensão total do abdômen.",

            explicacao:
              "Base da tensão corporal necessária para movimentos avançados de calistenia.",

            video: "",

            nota: ""
          }
        ]
      },

      {
        name: "Treino B — Superiores + Escápula",

        exercises: [
          {
            id: "puxada_frontal_sem1",

            nome: "Puxada Frontal",

            tipo: "Máquina",

            series: "3–4 séries de 8–12 reps",

            foco: "Primeira Barra Fixa",

            tecnica:
              "Puxar cotovelos em direção ao chão sem elevar ombros.",

            explicacao:
              "Ajuda no desenvolvimento de dorsais e controle escapular.",

            video: "",

            nota: ""
          },

          {
            id: "scapular_pushup_sem1",

            nome: "Scapular Push-up",

            tipo: "Calistenia",

            series: "3 séries de 10–15 reps",

            foco: "Escápula",

            tecnica:
              "Mover apenas as escápulas mantendo braços estendidos.",

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

      <strong>Tipo:</strong> ${exercise.tipo}<br>

      <strong>Séries:</strong> ${exercise.series}<br>

      <strong>Foco:</strong> ${exercise.foco}

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


  // ======================
  // ELEMENTOS
  // ======================

  const textarea =
    card.querySelector("textarea");

  const checkbox =
    card.querySelector(
      'input[type="checkbox"]'
    );

  const videoInput =
    card.querySelector(
      'input[type="text"]'
    );


  // ======================
  // CARREGAR DADOS SALVOS
  // ======================

  textarea.value =
    localStorage.getItem(
      `${exercise.id}_nota`
    ) || "";


  checkbox.checked =
    localStorage.getItem(
      `${exercise.id}_checked`
    ) === "true";


  videoInput.value =
    localStorage.getItem(
      `${exercise.id}_video`
    ) || "";


  // ======================
  // SALVAR AUTOMATICAMENTE
  // ======================

  textarea.addEventListener(
    "input",
    () => {

      localStorage.setItem(
        `${exercise.id}_nota`,
        textarea.value
      );
    }
  );


  checkbox.addEventListener(
    "change",
    () => {

      localStorage.setItem(
        `${exercise.id}_checked`,
        checkbox.checked
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


  return card;
}

function renderApp() {

  weeks.forEach((week) => {

    const weekDiv =
      document.createElement("div");

    weekDiv.className = "week";

    weekDiv.innerHTML = `

      <div class="week-title">
        ${week.title}
      </div>

    `;

    week.workouts.forEach((workout) => {

      const workoutDiv =
        document.createElement("div");

      workoutDiv.className = "workout";


      const header =
        document.createElement("div");

      header.className =
        "workout-header";


      header.innerHTML = `
        <h2>${workout.name}</h2>
      `;


      const content =
        document.createElement("div");

      content.className =
        "workout-content";


      header.addEventListener(
        "click",
        () => {

          const visible =
            content.style.display ===
            "block";

          content.style.display =
            visible ? "none" : "block";
        }
      );


      workout.exercises.forEach(
        (exercise) => {

          content.appendChild(
            createCard(exercise)
          );
        }
      );


      const addButton =
        document.createElement("button");

      addButton.className =
        "add-button";

      addButton.innerText =
        "+ Novo exercício";


      addButton.addEventListener(
        "click",
        () => {

          const uniqueId =
            `novo_${Date.now()}`;


          const newExercise = {
            id: uniqueId,

            nome: "Novo exercício",

            tipo: "Máquina",

            series: "",

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
        }
      );


      content.appendChild(addButton);

      workoutDiv.appendChild(header);

      workoutDiv.appendChild(content);

      weekDiv.appendChild(workoutDiv);
    });


    app.appendChild(weekDiv);
  });
}

renderApp();
* commit changes
* esperar atualizar o GitHub Pages
