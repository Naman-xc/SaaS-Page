document.addEventListener('DOMContentLoaded', () => {
  // FAQ toggle functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isVisible = answer.style.display === 'block';

      // Close all answers
      document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');

      // Toggle current answer
      answer.style.display = isVisible ? 'none' : 'block';
    });
  });

  // Testimonials carousel
  const testimonials = document.querySelectorAll('.testimonial');
  let index = 0;

  function showTestimonial(i) {
    testimonials.forEach((t, idx) => {
      t.classList.toggle('active', idx === i);
    });
  }

  showTestimonial(index);

  setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }, 5000);

  // Scroll animation using IntersectionObserver
  const fadeElements = document.querySelectorAll('section, .card, .pricing-card, .faq-item');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));

  // Button click demo handlers
  const startTrialBtn = document.getElementById('start-trial-btn');
  if (startTrialBtn) {
    startTrialBtn.addEventListener('click', () => {
      alert('Thank you for starting a free trial! We will contact you shortly.');
    });
  }

  document.querySelectorAll('.choose-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert(`You selected the "${btn.closest('.pricing-card').querySelector('h3').innerText}" plan.`);
    });
  });
});
