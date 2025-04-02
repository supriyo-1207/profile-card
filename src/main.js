// Edit profile information functionality
document.addEventListener('DOMContentLoaded', function () {
  // Elements
  const nameEl = document.getElementById('name');
  const roleEl = document.getElementById('role');
  const bioEl = document.getElementById('bio');
  const emailEl = document.getElementById('email');
  const phoneEl = document.getElementById('phone');
  const locationEl = document.getElementById('location');
  const downloadBtn = document.getElementById('downloadBtn');
  const themeToggle = document.getElementById('themeToggle');

  // Edit on double click functionality
  [nameEl, roleEl, bioEl, emailEl, phoneEl, locationEl].forEach(element => {
    element.addEventListener('dblclick', function () {
      const currentValue = this.textContent;
      const input = document.createElement('input');
      input.value = currentValue;
      input.style.width = '100%';
      input.style.fontSize = window.getComputedStyle(this).fontSize;

      if (this === bioEl) {
        const textarea = document.createElement('textarea');
        textarea.value = currentValue;
        textarea.style.width = '100%';
        textarea.style.height = '80px';
        textarea.style.resize = 'none';
        this.textContent = '';
        this.appendChild(textarea);
        textarea.focus();

        textarea.addEventListener('blur', function () {
          element.textContent = this.value;
        });
        return;
      }

      this.textContent = '';
      this.appendChild(input);
      input.focus();

      input.addEventListener('blur', function () {
        element.textContent = this.value;
      });
    });
  });

  // Download CV functionality
  downloadBtn.addEventListener('click', function () {
    // Option 1: If your PDF is hosted online
    // window.open('path/to/your/Supriyo_Maity_CV.pdf', '_blank');
    
    // Option 2: If your PDF is in your project directory
    const a = document.createElement('a');
    a.href = '../cv/Supriyo_Maity_CV.pdf';
    a.download = 'Supriyo_Maity_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

  // Theme toggle functionality - starting with dark mode
  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    this.innerHTML = document.body.classList.contains('dark-mode') ?
      '<i class="fas fa-sun"></i>' :
      '<i class="fas fa-moon"></i>';
  });
});