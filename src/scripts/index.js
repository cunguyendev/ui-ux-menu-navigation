const { feather } = window;

feather.replace();

const list = document.querySelectorAll('.list');

const activeLink = (index) => {
  list.forEach((item) => {
    item.classList.remove('active');
  });

  list[index].classList.add('active');
};

list.forEach((item, index) => item.addEventListener('click', () => activeLink(index)));
