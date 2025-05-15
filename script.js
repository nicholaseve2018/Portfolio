const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModal');
const openModalButtons = document.querySelectorAll('.open-modal-btn');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    modalTitle.textContent = 'Education';
    modalBody.textContent =
      modalBody.textContent =
  '• College - Diploma in Computer Engineering Technology - CITE Technical Institute Inc. (2023–Present)\n\n\n' +
  '• Senior High School - Accountancy Business Management - University of Cebu - Banilad Campus (2018–2020)\n\n\n'+
  '• High School - Consolacion National High School (2014-2018)';

    
    modal.style.display = 'flex';
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    alert('All fields are required. Please fill them in.');
    return;
  }
  if (!validateEmail(email)) {
    alert('Invalid email format. Please enter a valid email address.');
    return;
  }

  alert('Thank you for your message!');
  contactForm.reset();
});

function validateEmail(email) {
  return /^[^ ]+@[^ ]+\.[a-z]{2,}$/i.test(email);
}

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.pageYOffset > 100 ? 'block' : 'none';
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
