let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;
let lapCounter = 1;

function startStop() {
  if (!running) {
    running = true;
    timer = setInterval(updateDisplay, 1000);
    document.getElementById('startStopBtn').textContent = 'Stop';
    document.getElementById('pauseBtn').style.display = 'inline-block';
  } else {
    running = false;
    clearInterval(timer);
    document.getElementById('startStopBtn').textContent = 'Start';
    document.getElementById('pauseBtn').style.display = 'none';
  }
}

function pause() {
  running = false;
  clearInterval(timer);
  document.getElementById('startStopBtn').textContent = 'Resume';
}

function updateDisplay() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('display').textContent = display;
}

function reset() {
  running = false;
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  lapCounter = 1;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('startStopBtn').textContent = 'Start';
  document.getElementById('pauseBtn').style.display = 'none';
  document.getElementById('lapsList').innerHTML = '';
}

function lap() {
  if (running) {
    const lapTime = document.getElementById('display').textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
    document.getElementById('lapsList').appendChild(lapItem);
    lapCounter++;
  }
}
