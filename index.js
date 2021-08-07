const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.stopBtn.disabled = true;

const bgColorSwitch = {
  start() {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    this.isActive = true;
    this.timerId = setInterval(() => {
      document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  },
  stop() {
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
    clearInterval(this.timerId);
  },
};

refs.startBtn.addEventListener(
  'click',
  bgColorSwitch.start.bind(bgColorSwitch),
);
refs.stopBtn.addEventListener('click', bgColorSwitch.stop.bind(bgColorSwitch));
