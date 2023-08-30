
function insertCustomDiv() {
  // Пошук елемента за класом
  var element = document.querySelector('.item-price.ng-star-inserted');

  // Перевірка, чи знайдений елемент
  if (element) {
    console.log('Елемент знайдено:', element);

    // Створення нового div
    var newDiv = document.createElement('div');

    newDiv.classList.add('custom-div');

    // Створення полів для введення тексту
    var inputField1 = document.createElement('input');
    inputField1.placeholder = 'Введіть число';

    var inputField2 = document.createElement('input');
    inputField2.disabled = true; // Вимкнемо поле, поки не буде введено число

    // Додаємо обробник події для першого поля
    inputField1.addEventListener('input', function() {
      var inputValue = parseFloat(inputField1.value);
      var priceValue = parseFloat(element.querySelector('.ng-star-inserted').textContent.replace('₽', '').replace(',', ''));

      if (!isNaN(inputValue) && !isNaN(priceValue)) {
        inputField2.value = 'Rate: ' + (priceValue * 0.95 / inputValue).toFixed(2) + ' ';
      } else {
        inputField2.value = '';
      }
    });

    // Додаємо поля до нового div
    newDiv.appendChild(inputField1);
    newDiv.appendChild(inputField2);

    // Вставка нового div після знайденого елемента
    element.parentNode.insertBefore(newDiv, element.nextSibling);

  } else {
    console.log('Елемент не знайдено');
    setTimeout(insertCustomDiv, 500);
  }
};

function setupObserver() {
  // Створюємо новий спостерігач
  var observer = new MutationObserver(function(mutationsList, observer) {
    for (var mutation of mutationsList) {
      // Перевіряємо, чи доданий необхідний елемент
      if (mutation.addedNodes.length > 0) {
        for (var node of mutation.addedNodes) {
          if (node.matches && node.matches('.item-price.ng-star-inserted')) {
            // Якщо знайдено необхідний елемент, викликаємо вашу функцію
            insertCustomDiv();
            break;
          }
        }
      }
    }
  });

  // Налаштовуємо спостерігач на спостереження за додаванням елементів до body
  observer.observe(document.body, { childList: true, subtree: true });
}

// Запускаємо початкову настройку спостерігача
setupObserver();

