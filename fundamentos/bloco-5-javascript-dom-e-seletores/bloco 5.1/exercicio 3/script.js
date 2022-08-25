function headerStyle() {
  const header = document.querySelector('#header-container');
  header.style.backgroundColor = '#11b06d';
}

function bodyStyle() {
  const body = document.querySelector('#container');
  body.style.backgroundColor = '#f3f3f3';

  const urgentTasks = document.querySelector('.emergency-tasks');
  urgentTasks.style.backgroundColor = '#fea087';

  const notUrgentTasks = document.querySelector('.no-emergency-tasks');
  notUrgentTasks.style.backgroundColor = '#f9db6b';
  
  const urgentTasksTitle = document.querySelectorAll('.emergency-tasks h3');
  const notUrgentTasksTitle = document.querySelectorAll('.no-emergency-tasks h3');
  
  for (let title of urgentTasksTitle) {
    title.style.backgroundColor = '#a40aed';
  }

  for (let title of notUrgentTasksTitle) {
    title.style.backgroundColor = '#232525';
  }
}

function footerStyle() {
  const footer = document.querySelector('#footer-container');
  footer.style.backgroundColor = '#013533';
}

(function main() {

  headerStyle();
  bodyStyle();
  footerStyle();

})();
