# goit-js-hw-11-color-switch

Есть массив цветов в hex-формате и кнопки Start и Stop.

<button type="button" data-action="start">Start</button>
<button type="button" data-action="stop">Stop</button>

Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет
фона body на случайное значение из массива, используя инлайн-стиль. При нажатии
на кнопку Stop, изменение цвета фона должно останавливаться.

⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так,
чтобы пока изменение темы запушено, кнопка Start была не активна.

Для генерации случайного числа (индекс элемента массива цветов), используй
функцию randomIntegerFromInterval.

const randomIntegerFromInterval = (min, max) => { return
Math.floor(Math.random() \* (max - min + 1) + min); };
