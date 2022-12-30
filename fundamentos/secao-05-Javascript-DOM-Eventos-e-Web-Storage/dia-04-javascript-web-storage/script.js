window.onload = function () {
  let select = document.querySelector('select');
  select.addEventListener('change', () => {
      let selected = select.selectedOptions[0];
      document.body.style.backgroundColor = selected.value;
  })
}