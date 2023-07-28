// Global variable to enable immersiveTranslateEbookViewer
globalThis.immersiveTranslateEbookViewer = true;

// DOM elements
const textFindReplaceForm = document.querySelector('#text-find-replace form');
const findTextInput = document.getElementById('find-text-input');
const replaceTextInput = document.getElementById('replace-text-input');
const replaceButton = document.getElementById('replace-button');

// Initialize textToFindAndReplace from localStorage or set it to an empty object
let textToFindAndReplace = JSON.parse(localStorage.getItem('textToFindAndReplace')) || {
  find: [],
  replace: [],
};

// Function to handle click event on the replace button
function handleReplaceButtonClick(event) {
  event.preventDefault();

  const inputFind = findTextInput.value.trim();
  const inputReplace = replaceTextInput.value.trim();

  if (inputFind && inputReplace) {
    // Check if the inputFind already exists in the find array
    const findIndex = textToFindAndReplace.find.indexOf(inputFind);

    if (findIndex === -1) {
      // If not found, add the new find and replace texts
      textToFindAndReplace.find.push(inputFind);
      textToFindAndReplace.replace.push(inputReplace);

      // Update the data in localStorage
      localStorage.setItem('textToFindAndReplace', JSON.stringify(textToFindAndReplace));
      alert("Data Inputed")
    } else {
      // If found, update the replace text for the existing find text
      alert("Data Already In List")
      textToFindAndReplace.replace[findIndex] = inputReplace;
    }

    // Clear the input fields after replacement
    findTextInput.value = '';
    replaceTextInput.value = '';

    // Trigger the replacement immediately after adding/updating
    replaceTextInIframe();
  }
}

// Attach the handleReplaceButtonClick function to the button click event
replaceButton.addEventListener('click', handleReplaceButtonClick);

// Function to replace text inside the iframe content
function replaceTextInIframe() {
  const iframe = document.body?.lastElementChild?.firstChild?.firstElementChild?.firstChild;
  if (!iframe) {
    console.error('Iframe not found.');
    return;
  }

  const iframeDocument = iframe?.contentDocument;
  if (!iframeDocument) {
    console.error('Iframe document not found.');
    return;
  }

  let iframeContent = iframeDocument?.body?.innerHTML;
  textToFindAndReplace.find.forEach((item, index) => {
    const findTextRegex = new RegExp(item.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
    iframeContent = iframeContent?.replaceAll(findTextRegex, textToFindAndReplace.replace[index]);
  });

  if (iframeDocument.body) {
    iframeDocument.body.innerHTML = iframeContent;
  }
}

// Attach the replaceTextInIframe function to the mousemove event
document.body.addEventListener('mousemove', replaceTextInIframe);
