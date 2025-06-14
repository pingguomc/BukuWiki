document.addEventListener('DOMContentLoaded', () => {
  // 为所有内容块添加滚动动画
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.markdown h2, .markdown h3, .markdown p, .markdown img');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.9) {
        element.classList.add('animate-in');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // 初始检查
});