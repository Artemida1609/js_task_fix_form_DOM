'use strict';

// write code here
const elements = document.getElementsByTagName('input');
const inputParents = document.getElementsByClassName('field');

for (const element of elements) {
  const label = document.createElement('label');

  label.className = 'field-label';

  const inputId = element.id;
  const inputName = element.name;

  label.textContent = inputName;
  label.setAttribute('for', inputId);

  element.setAttribute('placeholder', inputName.toUpperCase());
}

for (const inputParent of inputParents) {
  const label = document.getElementsByTagName('label');

  inputParent.appendChild(label);
}
