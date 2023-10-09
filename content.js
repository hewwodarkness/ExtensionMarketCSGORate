function addCopyButton() {
  let spanElems = document.querySelectorAll(
    ".market_commodity_orders_header_promote"
  );

  if (spanElems.length > 1) {
    let spanElem = spanElems[1]; // Вибрати другий елемент

    // Перевірка чи кнопка вже існує
    if (
      !spanElem.nextElementSibling ||
      spanElem.nextElementSibling.textContent !== "Копіювати"
    ) {
      let copyButton = document.createElement("button");
      copyButton.textContent = "Копіювати";

      // Додавання стилів для кнопки
      copyButton.style.marginLeft = "10px";
      copyButton.style.backgroundColor = "#4CAF50";
      copyButton.style.border = "none";
      copyButton.style.color = "white";
      copyButton.style.padding = "5px 10px";
      copyButton.style.textAlign = "center";
      copyButton.style.textDecoration = "none";
      copyButton.style.display = "inline-block";
      copyButton.style.fontSize = "14px";
      copyButton.style.borderRadius = "4px";
      copyButton.style.cursor = "pointer";
      copyButton.style.transitionDuration = "0.4s";
      copyButton.onmouseover = function () {
        this.style.backgroundColor = "#45a049";
      };
      copyButton.onmouseout = function () {
        this.style.backgroundColor = "#4CAF50";
      };

      copyButton.onclick = function () {
        let numberString = spanElem.textContent
          .trim()
          .replace("₴", "")
          .replace(/,/g, ".")
          .replace(" ", "");
        let copyText = document.createElement("textarea");
        document.body.appendChild(copyText);
        copyText.value = numberString;
        copyText.select();
        document.execCommand("copy");
        document.body.removeChild(copyText);
        // alert('Число скопійовано!');
      };

      spanElem.parentElement.appendChild(copyButton);
    }
  }
}

function addCopyButtonForPrice() {
  let priceDivs = document.querySelectorAll(".price_with");

  priceDivs.forEach((priceDiv) => {
    // Перевірка чи кнопка вже існує поряд з цим елементом
    if (
      !priceDiv.nextElementSibling ||
      priceDiv.nextElementSibling.textContent !== "📋"
    ) {
      let copyButton = document.createElement("button");
      copyButton.textContent = "📋"; // Використовуємо іконку буфера обміну

      // Стилі для кнопки
      copyButton.style.marginLeft = "5px";
      copyButton.style.backgroundColor = "transparent";
      copyButton.style.border = "none";
      copyButton.style.color = "#4CAF50";
      copyButton.style.padding = "0px 5px";
      copyButton.style.textAlign = "center";
      copyButton.style.textDecoration = "none";
      copyButton.style.display = "inline-block";
      copyButton.style.fontSize = "14px";
      copyButton.style.borderRadius = "4px";
      copyButton.style.cursor = "pointer";

      copyButton.onclick = function () {
        let numberString = priceDiv.textContent
          .trim()
          .replace("₴", "")
          .replace(/,/g, ".");
        let modifiedNumber = (parseFloat(numberString) - 0.01).toFixed(2);
        let finalString = modifiedNumber + " ";  // Додати пробіл на кінці
    
        let copyText = document.createElement("textarea");
        document.body.appendChild(copyText);
        copyText.value = finalString;
        copyText.select();
        document.execCommand("copy");
        document.body.removeChild(copyText);
      };

      // Додаємо кнопку безпосередньо після тексту в priceDiv
      priceDiv.parentElement.insertBefore(copyButton, priceDiv.nextSibling);
    }
  });
}

function addPasteButtonForInput() {
  let inputElems = document.querySelectorAll(
    'input[name="market_sell_currency_input"]'
  );

  if (inputElems.length > 1) {
    let inputElem = inputElems[1]; // Вибрати другий елемент

    if (
      !inputElem.nextElementSibling ||
      inputElem.nextElementSibling.textContent !== "📋"
    ) {
      let pasteButton = document.createElement("button");
      pasteButton.textContent = "📋";

      // Стилі для кнопки
      pasteButton.style.marginLeft = "5px";
      pasteButton.style.backgroundColor = "transparent";
      pasteButton.style.border = "none";
      pasteButton.style.color = "#4CAF50";
      pasteButton.style.padding = "0px 5px";
      pasteButton.style.textAlign = "center";
      pasteButton.style.textDecoration = "none";
      pasteButton.style.display = "inline-block";
      pasteButton.style.fontSize = "14px";
      pasteButton.style.borderRadius = "4px";
      pasteButton.style.cursor = "pointer";
      pasteButton.style.transitionDuration = "0.4s";
      pasteButton.onmouseover = function () {
        this.style.color = "#45a049";
      };
      pasteButton.onmouseout = function () {
        this.style.color = "#4CAF50";
      };


      function triggerEvents(element) {
        const events = ['keyup', 'keydown', 'keypress', 'input', 'change'];
        for (let ev of events) {
            let event = new Event(ev, {
                'bubbles': true,
                'cancelable': true
            });
            element.dispatchEvent(event);
        }
    }

      pasteButton.onclick = function() {
        navigator.clipboard.readText()
          .then(text => {
              inputElem.value = text; // Припустимо, що inputElem - це ваш елемент "Buyer pays"
              
              // Виклик подій
              triggerEvents(inputElem);
          })
          .catch(err => {
              console.error('Помилка при читанні з буфера обміну:', err);
          });
    }
    
    inputElem.parentElement.insertBefore(pasteButton, inputElem.nextSibling);
    
    }
  }
}

function addCopyButtonForTd() {
  let tdElems = document.querySelectorAll('td[align="right"]');

  tdElems.forEach(tdElem => {
      if (!tdElem.nextElementSibling || tdElem.nextElementSibling.textContent !== "📋") {
          let copyButton = document.createElement('button');
          copyButton.textContent = "📋";

          // Стилі для кнопки
          copyButton.style.marginLeft = '5px';
          copyButton.style.backgroundColor = 'transparent';
          copyButton.style.border = 'none';
          copyButton.style.color = '#4CAF50';
          copyButton.style.padding = '0px 5px';
          copyButton.style.textAlign = 'center';
          copyButton.style.textDecoration = 'none';
          copyButton.style.display = 'inline-block';
          copyButton.style.fontSize = '14px';
          copyButton.style.borderRadius = '4px';
          copyButton.style.cursor = 'pointer';
          copyButton.style.transitionDuration = '0.4s';
          copyButton.onmouseover = function() { this.style.color = '#45a049'; }
          copyButton.onmouseout = function() { this.style.color = '#4CAF50'; }

          copyButton.onclick = function() {
              let numberString = tdElem.textContent
                  .trim()
                  .replace("₴", "")
                  .replace(/,/g, ".");

              let copyText = document.createElement("textarea");
              document.body.appendChild(copyText);
              copyText.value = numberString;
              copyText.select();
              document.execCommand("copy");
              document.body.removeChild(copyText);
          }

          // Додаємо кнопку безпосередньо після тексту в tdElem
          tdElem.appendChild(copyButton);
      }
  });
}

function insertCustomDiv() {
  // Пошук елемента за класом
  var element = document.querySelector('.item-price.ng-star-inserted');

  // Перевірка, чи знайдений елемент
  if (element) {
    console.log('Елемент знайдено:', element);

    // Створення нового div
    var newDiv = document.createElement('div');
    var newDiv2= document.createElement('div');
    var newDiv3= document.createElement('div');

    newDiv.classList.add('custom-div');
    newDiv2.classList.add('custom-div');
    newDiv3.classList.add('custom-div');
    // Створення полів для введення тексту
    var inputField1 = document.createElement('input');
    inputField1.placeholder = 'Введіть число';

    var inputButton = document.createElement('button');
    inputButton.textContent = 'Вставити число';
    inputButton.className = 'mat-focus-indicator spinner add mat-flat-button mat-button-base mat-primary ng-star-inserted';

    var inputField2 = document.createElement('input');
    inputField2.disabled = true; // Вимкнемо поле, поки не буде введено число

    var inputField11 = document.createElement('input');
    inputField11.disabled = true;

    var inputField22 = document.createElement('input');
    inputField22.disabled = true;

    var inputField111 = document.createElement('input');
    inputField111.disabled = true;

    var inputField222 = document.createElement('input');
    inputField222.disabled = true;

    // Додаємо обробник події для першого поля
    function handleInputChange() {
      var inputValue = parseFloat(inputField1.value);
      var priceValue = parseFloat(element.querySelector('.ng-star-inserted').textContent.replace('₽', '').replace(',', ''));
    
      if (!isNaN(inputValue) && !isNaN(priceValue)) {
          inputField2.value = 'Rate: ' + (priceValue * 0.95 / inputValue).toFixed(2) + ' ';
    
          inputField11.value = '₽' + (priceValue - (priceValue * 0.05)).toFixed(2);
          inputField111.value = '₽' + (priceValue - (priceValue * 0.10)).toFixed(2);
    
          inputField22.value = 'Rate: ' + ((priceValue - (priceValue * 0.05)) * 0.95 / inputValue).toFixed(2) + ' ';
          inputField222.value = 'Rate: ' + ((priceValue - (priceValue * 0.10)) * 0.95 / inputValue).toFixed(2) + ' ';
      } else {
          inputField2.value = '';
      }
    }
  
    inputField1.addEventListener('input', handleInputChange);

    inputButton.onclick = function() {
      navigator.clipboard.readText()
          .then(text => {
              inputField1.value = text;

              var event = new Event('input', {
                'bubbles': true,
                'cancelable': true
            });
            inputField1.dispatchEvent(event);
            
          })
          .catch(err => {
              console.error('Помилка при читанні з буфера обміну:', err);
          });
  }
    
    
    // Додаємо поля до нового div
    newDiv.appendChild(inputButton);
    newDiv.appendChild(inputField1);
    newDiv.appendChild(inputField2);

    newDiv2.appendChild(inputField11);
    newDiv2.appendChild(inputField22);

    newDiv3.appendChild(inputField111);
    newDiv3.appendChild(inputField222);
    // Вставка нового div після знайденого елемента
    element.parentNode.insertBefore(newDiv3, element.nextSibling);
    element.parentNode.insertBefore(newDiv2, element.nextSibling);
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

// Додати кнопку відразу при завантаженні скрипта
addCopyButton();
addCopyButtonForPrice();
addPasteButtonForInput();
// addCopyButtonForTd();

// Відстеження змін у DOM і додавання кнопки при змінах
let observer = new MutationObserver(() => {
  addCopyButton();
  addCopyButtonForPrice();
  addPasteButtonForInput();
  // addCopyButtonForTd();
});
observer.observe(document.body, { childList: true, subtree: true });
