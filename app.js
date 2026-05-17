const app = document.getElementById("app");

const weeks = [

  // =========================
  // SEMANA 1
  // =========================

  {
    title: "Semana 1 — Pós-menstruação",

    workouts: [

      {
        name: "Treino A — Inferiores + Core",

        exercises: [

          {
            id: "agachamento_sem1",

            nome: "Agachamento Livre",

            tipo: "Calistenia",

            series: "3–4 séries de 8–12 reps",

            foco: "Progressão para Pistol Squat",

            tecnica:
              "Manter peso no centro do pé e joelhos alinhados.",

            explicacao:
              "Fase ideal para progressão de força e amplitude.",

            video: "",

            nota: ""
          },

          {
            id: "legpress_sem1",

            nome: "Leg Press 45º",

            tipo: "Máquina",

            series: "3–4 séries de 8–12 reps",

            foco: "Força Base",

            tecnica:
              "Evitar bloqueio articular.",

            explicacao:
              "Permite aumento seguro de carga.",

            video: "",

            nota: ""
          },

          {
            id: "bulgaro_sem1",

            nome: "Agachamento Búlgaro",

            tipo: "Calistenia",

            series: "3 séries de 10 reps",

            foco: "Pistol Squat",

            tecnica:
              "Controle do equilíbrio e alinhamento pélvico.",

            explicacao:
              "Desenvolve força unilateral e estabilidade.",

            video: "",

            nota: ""
          },

          {
            id: "hollow_sem1",

            nome: "Hollow Body Hold",

            tipo: "Calistenia",

            series: "3 séries de 20–30 segundos",

            foco: "Core",

            tecnica:
              "Achatar lombar no chão.",

            explicacao:
              "Base da tensão corporal para calistenia.",

            video: "",

            nota: ""
          }

        ]
      },

      {
        name: "Treino B — Superiores + Escápula",

        exercises: [

          {
            id: "pulley_sem1",

            nome: "Puxada Frontal",

            tipo: "Máquina",

            series: "3–4 séries de 8–12 reps",

            foco: "Primeira Barra Fixa",

            tecnica:
              "Puxar cotovelos para baixo sem elevar ombros.",

            explicacao:
              "Desenvolve dorsais e controle escapular.",

            video: "",

            nota: ""
          },

          {
            id: "remada_sem1",

            nome: "Remada Sentada",

            tipo: "Máquina",

            series: "3–4 séries de 8–12 reps",

            foco: "Retração Escapular",

            tecnica:
              "Retrair escápulas antes de puxar.",

            explicacao:
              "Melhora estabilidade das costas.",

            video: "",

            nota: ""
          },

          {
            id: "scapular_sem1",

            nome: "Scapular Push-up",

            tipo: "Calistenia",

            series: "3 séries de 10–15 reps",

            foco: "Escápula",

            tecnica:
              "Mover apenas as escápulas.",

            explicacao:
              "Fortalece serrátil e estabilidade escapular.",

            video: "",

            nota: ""
          }

        ]
      }

    ]
  },



  // =========================
  // SEMANA 2
  // =========================

  {
    title: "Semana 2 — Período Fértil",

    workouts: [

      {
        name: "Treino A — Força Máxima",

        exercises: [

          {
            id: "legpress_sem2",

            nome: "Leg Press 45º",

            tipo: "Máquina",

            series: "3 séries de 8–10 reps",

            foco: "Carga Máxima",

            tecnica:
              "Movimento controlado e seguro.",

            explicacao:
              "Fase de melhor capacidade de força.",

            video: "",

            nota: ""
          },

          {
            id: "elevacao_sem2",

            nome: "Elevação Pélvica",

            tipo: "Misto",

            series: "3 séries de 10 reps",

            foco: "Glúteos",

            tecnica:
              "Evitar hiperextensão lombar.",

            explicacao:
              "Fortalece cadeia posterior.",

            video: "",

            nota: ""
          }

        ]
      },

      {
        name: "Treino B — Pull + Push",

        exercises: [

          {
            id: "flexao_sem2",

            nome: "Flexão com Joelhos",

            tipo: "Calistenia",

            series: "3 séries de 8–12 reps",

            foco: "Push-up",

            tecnica:
              "Core firme e peito liderando o movimento.",

            explicacao:
              "Constrói base para flexões completas.",

            video: "",

            nota: ""
          },

          {
            id: "deadhang_sem2",

            nome: "Dead Hang",

            tipo: "Calistenia",

            series: "3 séries de 20 segundos",

            foco: "Pegada",

            tecnica:
              "Manter escápulas ativas.",

            explicacao:
              "Base para barra fixa.",

            video: "",

            nota: ""
          }

        ]
      }

    ]
  },



  // =========================
  // SEMANA 3
  // =========================

  {
    title: "Semana 3 — TPM",

    workouts: [

      {
        name: "Treino A — Resistência",

        exercises: [

          {
            id: "extensora_sem3",

            nome: "Cadeira Extensora",

            tipo: "Máquina",

            series: "3 séries de 12–15 reps",

            foco: "Quadríceps",

            tecnica:
              "Contração controlada no topo.",

            explicacao:
              "Mantém estímulo muscular sem sobrecarregar SNC.",

            video: "",

            nota: ""
          },

          {
            id: "mesaflexora_sem3",

            nome: "Mesa Flexora",

            tipo: "Máquina",

            series: "3 séries de 12–15 reps",

            foco: "Posterior",

            tecnica:
              "Movimento controlado.",

            explicacao:
              "Ajuda estabilidade de joelhos.",

            video: "",

            nota: ""
          }

        ]
      },

      {
        name: "Treino B — Superiores Leves",

        exercises: [

          {
            id: "supinovertical_sem3",

            nome: "Supino Vertical",

            tipo: "Máquina",

            series: "3 séries de 12 reps",

            foco: "Peitoral",

            tecnica:
              "Movimento leve e estável.",

            explicacao:
              "Reduz desconforto nos seios durante TPM.",

            video: "",

            nota: ""
          },

          {
            id: "deadbug_sem3",

            nome: "Dead Bug",

            tipo: "Calistenia",

            series: "3 séries de 10 reps",

            foco: "Core",

            tecnica:
              "Controle lombar total.",

            explicacao:
              "Treina estabilidade sem fadiga excessiva.",

            video: "",

            nota: ""
          }

        ]
      }

    ]
  },



  // =========================
  // SEMANA 4
  // =========================

  {
    title: "Semana 4 — Menstruação",

    workouts: [

      {
        name: "Treino A — Regenerativo",

        exercises: [

          {
            id: "mobilidade_sem4",

            nome: "Mobilidade de Quadril",

            tipo: "Mobilidade",

            series: "10 minutos",

            foco: "Recuperação",

            tecnica:
              "Movimentos lentos e amplos.",

            explicacao:
              "Ajuda na recuperação e conforto corporal.",

            video: "",

            nota: ""
          },

          {
            id: "panturrilha_sem4",

            nome: "Panturrilha Máquina",

            tipo: "Máquina",

            series: "3 séries de 12 reps",

            foco: "Circulação",

            tecnica:
              "Amplitude máxima.",

            explicacao:
              "Estimula circulação e manutenção de força.",

            video: "",

            nota: ""
          }

        ]
      }

    ]
  }

];



function createCard(exercise) {

  const card =
    document.createElement("div");

  card.className = "card";

  card.innerHTML = `

    <div class="card-top">

      <input type="checkbox" />

      <div class="card-title">
        ${exercise.nome}
      </div>

    </div>

    <div class="meta">

      <strong>Tipo:</strong>
      ${exercise.tipo}<br>

      <strong>Séries:</strong>
      ${exercise.series}<br>

      <strong>Foco:</strong>
      ${exercise.foco}

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

      <textarea
        placeholder="como foi hoje?"
      ></textarea>

    </div>

  `;



  // =====================
  // ELEMENTOS
  // =====================

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



  // =====================
  // CARREGAR DADOS
  // =====================

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



  // =====================
  // SALVAR DADOS
  // =====================

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

      workoutDiv.className =
        "workout";



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
            visible
              ? "none"
              : "block";
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
