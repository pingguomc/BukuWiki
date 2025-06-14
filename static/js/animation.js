document.addEventListener('DOMContentLoaded', () => {
  // 为目录添加展开动画
  const sidebarItems = document.querySelectorAll('.menu__list-item');
  sidebarItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-10px)';
    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, 50 + index * 30);
  });
  
  // 为代码块添加高亮效果
  const codeBlocks = document.querySelectorAll('pre');
  codeBlocks.forEach(block => {
    block.addEventListener('mouseenter', () => {
      block.style.transform = 'scale(1.01)';
      block.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    });
    
    block.addEventListener('mouseleave', () => {
      block.style.transform = 'scale(1)';
      block.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    });
    
    block.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  });
});