'use strict';

// write code here
const elements = document.getElementsByTagName('input');

for (const element of elements) {
  const label = document.createElement('label');
  const inputId = element.id;
  const inputName = element.name;

  label.className = 'field-label';

  label.setAttribute('for', inputId);
  label.setAttribute('textContent', inputName);
  element.appendChild(label);
  element.setAttribute('placeholder', inputName);
}
