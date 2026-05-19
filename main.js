import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar Glassmorphism Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('glass');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('glass');
      navbar.classList.add('bg-transparent');
    }
  });

  // Smooth Reveal Animation on Scroll
  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // trigger once on load

  // WhatsApp Appointment Booking Logic
  const form = document.getElementById('appointmentForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const date = document.getElementById('date').value;
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value;

      const whatsappNumber = '917988781452'; 
      const text = `Hello Kidney Dialysis Care, I would like to book an appointment.
Name: ${name}
Phone: ${phone}
Preferred Date: ${date}
Service Type: ${service}
Message: ${message}`;
      
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
      
      window.open(whatsappUrl, '_blank');
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    button.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');
      
      // Close all others
      faqItems.forEach(otherItem => {
        otherItem.querySelector('.faq-content').classList.add('hidden');
        otherItem.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
      });

      if (!isOpen) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
});
