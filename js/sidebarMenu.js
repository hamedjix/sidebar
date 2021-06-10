let btn = document.querySelector('#sidebar_btn');
let sidebar = document.querySelector('.sidebar');

btn.onclick = function () {
  sidebar.classList.toggle('active');
};
