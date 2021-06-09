var record = [];
function isAnswer(q, event) {
  if (isNaN(event) || !isFinite(event)) {
    alert("Вы ввели недопустимый символ");
    return false;
  } else if (event < 1 || event > q) {
    alert("Ваше число выходит из допустимого диапазона!");
    return false;
  }
  return true;
}

function answer(que1, answ1, answ2) {
  var ok = false;
  do {
    event = +prompt(que1 + answ1 + answ2 + "-1 - Выход из игры");
    if (event == -1) {
      break;
    } else {
      ok = isAnswer(works.a0, event);
    }
  } while (!ok);
  switch (event) {
    case 1:
      record.push([que1, answ1]);
      break;
    case 2:
      record.push([que1, answ2]);
      break;
    case -1:
      record.push(que1, "Вы вышли из игры");
      break;
  }
  return event;
}

switch (answer(works.a00, works.a1, works.a2)) {
  case 1:
    switch (answer(works.b00, works.b1, works.b2)) {
      case 1:
      case 2:
        answer(works.d00, works.d1, works.d2);
        break;
      case -1:
        break;
      default:
        alert("Ошибка");
    }
    break;
  case 2:
    switch (answer(works.c00, works.c1, works.c2)) {
      case 1:
      case 2:
        answer(works.d00, works.d1, works.d2);
        break;
      case -1:
        break;
      default:
        alert("Ошибка");
    }
    break;
  case -1:
    break;
  default:
    alert("Ошибка");
}
alert("Спасибо за игру!");

console.log(record);
var step = +prompt("введите номер хода");
console.log(step);
var stepHistory =
  "В ходе № " +
  step +
  " " +
  record[step - 1][0] +
  "Ваш выбор " +
  record[step - 1][1];
alert(stepHistory);
