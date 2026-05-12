const container = document.getElementById('workoutContainer');

async function loadWorkout() {
  const exercisesResponse = await fetch('./data/exercicios.json');
  const workoutResponse = await fetch('./data/treinos.json');

  const exercises = await exercisesResponse.json();
  const workout = await workoutResponse.json();

  renderWorkout(workout.treinoA, exercises);
}

function renderWorkout(workoutIds, exercises) {
  container.innerHTML = '';

  workoutIds.forEach(id => {
    const exercise = exercises.find(e => e.id === id);

    if (!exercise) return;

    const checked = localStorage.getItem(id) === 'true';

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="exercise-header">
        <input type="checkbox" class="checkbox" ${checked ? 'checked' : ''} />
        <div>
          <div class="exercise-name">${exercise.nome}</div>
          <div class="tag">${exercise.grupo}</div>
        </div>
      </div>

      <div class="details">
        <strong>Ajuda na calistenia:</strong><br>
        ${exercise.calistenia}
      </div>

      ${exercise.video ? `
  <iframe
    class="video"
    src="${exercise.video}"
    title="${exercise.nome}"
    frameborder="0"
    allowfullscreen>
  </iframe>
` : ''}

    const checkbox = card.querySelector('.checkbox');

    checkbox.addEventListener('change', () => {
      localStorage.setItem(id, checkbox.checked);
    });

    container.appendChild(card);
  });
}

loadWorkout();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
}
