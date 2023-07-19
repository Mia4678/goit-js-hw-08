import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const feedbackStateStorageKey = 'feedback-form-state';

form.addEventListener('input', throttle(saveFormState, 500));

loadFormState();

form.addEventListener('submit', handleSubmit);

function saveFormState() {
  const feedbackState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(feedbackStateStorageKey, JSON.stringify(feedbackState));
}

function loadFormState() {
  const feedbackStateJSON = localStorage.getItem(feedbackStateStorageKey);
  if (feedbackStateJSON) {
    const feedbackState = JSON.parse(feedbackStateJSON);
    emailInput.value = feedbackState.email;
    messageTextarea.value = feedbackState.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const feedbackStateJSON = localStorage.getItem(feedbackStateStorageKey);
  if (feedbackStateJSON) {
    localStorage.removeItem(feedbackStateStorageKey);
  }

  const feedbackState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  console.log(feedbackState);

  form.reset();
}
