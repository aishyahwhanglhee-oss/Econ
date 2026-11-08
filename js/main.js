/**
 * Economist Portfolio - Main Interactive Scripts
 * Author: Siwat Teimtad
 */

document.addEventListener('DOMContentLoaded', () => {
  initReadingProgressBar();
  initEmailCopy();
  initSmoothScroll();
});

/**
 * Initializes the reading progress bar for article pages
 */
function initReadingProgressBar() {
  const progressBar = document.querySelector('.reading-progress-bar');
  if (!progressBar) return;

  const updateProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      progressBar.style.width = '0%';
      return;
    }
    const currentScroll = window.scrollY;
    const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
    progressBar.style.width = `${progress}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();
}

/**
 * One-click copy email handler with feedback toast
 */
function initEmailCopy() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('copyToast');
  const emailText = 'dx@outlook.com';

  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailText);
      } else {
        // Fallback for non-https / older browsers
        const tempInput = document.createElement('textarea');
        tempInput.value = emailText;
        tempInput.style.position = 'fixed';
        tempInput.style.left = '-9999px';
        document.body.appendChild(tempInput);
        tempInput.focus();
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      if (toast) {
        toast.textContent = '✓ Copied to clipboard!';
        toast.style.opacity = '1';
        copyBtn.textContent = 'Copied';

        setTimeout(() => {
          toast.textContent = '';
          copyBtn.textContent = 'Copy';
        }, 3000);
      }
    } catch (err) {
      console.error('Clipboard copy failed:', err);
      if (toast) {
        toast.textContent = 'Manual copy: dx@outlook.com';
      }
    }
  });
}

/**
 * Smooth scrolling for in-page anchors
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update active nav state
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        if (this.classList.contains('nav-link')) {
          this.classList.add('active');
        }
      }
    });
  });
}
