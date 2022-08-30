function createDaysOfTheWeek() {
  const weekDays = [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ]
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[ index ];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

let decemberDaysList = [ 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 ];

// Escreva seu código abaixo.
(function generateMonth() {

  const decemberDays = document.querySelector('#days');
  let isHoliday = false;
  let isFriday = false;
  let counter = 0;

  for (let i = 0; i < decemberDaysList.length; i += 1) {

    counter = i;

    const daysList = document.createElement('li');

    if (counter === 5 || counter === 12 || counter === 19) {
      isFriday = true;
    }
    else if (counter === 26) {
      isFriday = true;
      isHoliday = true;
    }

    if (counter === 25 || counter === 32) {
      isHoliday = true;
    }

    daysList.className = 'day';

    if (isFriday) {
      daysList.classList = 'day friday'
    }

    if (isHoliday) {
      daysList.classList = 'day holiday';
    }

    if (isHoliday && isFriday) {
      daysList.classList = 'day holiday friday';
    }

    daysList.innerText = decemberDaysList[ i ];

    isFriday = false;
    isHoliday = false;

    decemberDays.appendChild(daysList)
  }
})();

(function holidayBtn() {

  const btnParent = document.querySelector('.buttons-container');
  const holidayBtn = document.createElement('input');

  holidayBtn.type = 'button';
  holidayBtn.id = 'btn-holiday';
  holidayBtn.value = 'Holidays';

  btnParent.appendChild(holidayBtn);
})();

function highlightHolidays() {

  const holidays = document.querySelectorAll('.day.holiday');

  for (key in holidays) {

    if (holidays[ key ].style.color === 'red' || holidays[ key ].style.color === 'blue') {
      holidays[ key ].style.color = '#666';
    }
    else {
      holidays[ key ].style.color = 'red';
    }
  }
};

document.querySelector('#btn-holiday').addEventListener('click', highlightHolidays);

(function fridayBtn() {

  const btnParent = document.querySelector('.buttons-container');
  const fridayBtn = document.createElement('input');

  fridayBtn.type = 'button';
  fridayBtn.id = 'btn-friday';
  fridayBtn.value = 'Fridays';

  btnParent.appendChild(fridayBtn);
})()

function highlightFridays() {

  const fridays = document.querySelectorAll('.friday');
  let counter = 0;

  for (key in fridays) {
    counter = key;
    fridays[ key ].innerText = 'Sextou!';
  }
};

document.querySelector('#btn-friday').addEventListener('click', highlightFridays);

function zoomMonthDay(event) {

  event.target.style.transform = 'scale(1.5)';
  event.target.style.transition = 'all 0.3s ease-in 0.1s';
}

function unzoomMonthDay(event) {

  event.target.style.transform = 'scale(1)';
  event.target.style.transition = 'all 0.3s ease-out 0.1s';
}

(function doHoverEffect() {

  const days = document.querySelectorAll('.day');

  for (let i = 0; i < days.length; i += 1) {
    days[ i ].addEventListener('mouseover', zoomMonthDay);
    days[ i ].addEventListener('mouseout', unzoomMonthDay);
  }
})();

function createTask(task, urgency) {

  const spanParent = document.querySelector('.my-tasks');
  const taskSpan = document.createElement('span');
  const taskDescription = document.createElement('div');

  taskDescription.style.display = 'block';
  taskSpan.innerText = task;
  taskDescription.className = 'task';
  taskDescription.style.backgroundColor = urgency;

  spanParent.appendChild(taskSpan);
  spanParent.appendChild(taskDescription);
};

createTask('play video-games', 'green');
createTask('study', 'orange');
createTask('sleep', 'red');


function highlightTasks(event) {

  if (event.target.className === 'task') {
    event.target.classList = 'task selected';
  }
  else {
    event.target.className = 'task';
  }

};

(function doSelectTask() {

  const tasks = document.querySelectorAll('.task');

  for (let i = 0; i < tasks.length; i += 1) {
    tasks[ i ].addEventListener('click', highlightTasks);
  }
})();

function displayTaskOnCalendary(event) {
  
  const selectedTask = document.querySelector('.task.selected');

  if (selectedTask) {

    if (event.target.style.color === selectedTask.style.backgroundColor) {
      event.target.style.color = '#666';
    }

    else if (event.target.style.color !== selectedTask.style.backgroundColor){
      event.target.style.color = selectedTask.style.backgroundColor;
    }
  }
  else {
    event.target.style.color = '#666';
  }

}

(function doDisplayTaskOnCalendary() {

  const days = document.querySelectorAll('.day');

  for (let i = 0; i < days.length; i += 1) {
    days[ i ].addEventListener('click', displayTaskOnCalendary);
  }
})();