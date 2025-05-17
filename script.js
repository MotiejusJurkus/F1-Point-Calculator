document.getElementById('points-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const inputs = document.querySelectorAll('.race-grid input');
  const pointsMap = {
    1: 25, 2: 18, 3: 15, 4: 12, 5: 10,
    6: 8, 7: 6, 8: 4, 9: 2, 10: 1
  };

  let totalPoints = 0;

  inputs.forEach(input => {
    const pos = parseInt(input.value);
    if (!isNaN(pos) && pos >= 1 && pos <= 10) {
      totalPoints += pointsMap[pos];
    }
  });

  document.getElementById('result').textContent = `Total Points: ${totalPoints}`;
});

document.querySelectorAll('input[type="number"]').forEach(input => {
  input.addEventListener('keydown', function (e) {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  });
});
