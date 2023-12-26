document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');
  
    questions.forEach(question => {
      question.addEventListener('click', () => {
        const answerId = question.getAttribute('aria-controls');
        const answer = document.getElementById(answerId); // Use getElementById to get a single element
        const faq_img = question.querySelector('.faq-img');
  
        const isExpanded = question.getAttribute('aria-expanded') === 'true';

        question.setAttribute('aria-expanded', String(!isExpanded));
  
        // Toggle answer display
        answer.style.display = isExpanded ? 'none' : 'block';
        // Update aria attributes
        question.setAttribute('aria-expanded', !isExpanded);
        answer.setAttribute('aria-hidden', !isExpanded);
        // Change icon
        faq_img.src = isExpanded ? './assets/images/icon-plus.svg' : './assets/images/icon-minus.svg';
      });
    });
  });
  