const areas = document.querySelectorAll('.area');
const books = document.querySelectorAll('.book');

books.forEach(book => {
  book.draggable = 'true';
  book.addEventListener('dragstart', () => {
    book.classList.add('dragging');
  });

  book.addEventListener('dragend', () => {
    book.classList.remove('dragging');
  })
});

areas.forEach(area => {
  area.addEventListener('dragover', () => {
    const dragging = document.querySelector('.dragging');
    area.append(dragging);
  })
})