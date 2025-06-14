document.addEventListener('DOMContentLoaded', function () {
    if (typeof pangu !== 'undefined' && typeof pangu.autoSpacingPage === 'function') {
        pangu.autoSpacingPage();
    }
});

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme-choice', isDarkMode ? 'dark' : 'light');
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  const isDark = e.matches;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme-choice', isDark ? 'dark' : 'light');
});