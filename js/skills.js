document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      bar.style.width = bar.getAttribute('data-skill') + '%';
    });
  });
  