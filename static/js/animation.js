// 删除文字渐现动画部分以避免与CSS动画冲突
document.addEventListener('DOMContentLoaded', () => {
  // 删除以下代码段
  // const fadeElements = document.querySelectorAll('h1, h2, h3, p');
  // fadeElements.forEach((el, index) => {
  //   el.style.opacity = '0';
  //   el.style.transform = 'translateX(-20px)';
  //   el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
  //   
  //   setTimeout(() => {
  //     el.style.opacity = '1';
  //     el.style.transform = 'translateX(0)';
  //   }, 300 + index * 50);
  // });

  // 代码块增强动画保持不变
  const codeBlocks = document.querySelectorAll('pre');
  codeBlocks.forEach(block => {
    block.style.position = 'relative';
    block.style.overflow = 'hidden';

    const pulseLayer = document.createElement('div');
    pulseLayer.style.cssText = `
      position: absolute;
      top: -50%; left: -50%;
      width: 200%; height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
      transform: rotate(45deg);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    block.appendChild(pulseLayer);

    block.addEventListener('mouseenter', () => {
      pulseLayer.style.opacity = '1';
      pulseLayer.style.animation = 'pulse 1.5s ease-out';
      block.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
    });

    block.addEventListener('mouseleave', () => {
      pulseLayer.style.opacity = '0';
      block.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    });

    block.addEventListener('click', () => {
      block.style.animation = 'pulse 0.6s ease-out';
      setTimeout(() => {
        block.style.animation = '';
      }, 600);
    });
  });

  // 文档切换动画检测保持不变
  const docRoot = document.querySelector('.markdown');
  if (docRoot) {
    requestAnimationFrame(() => {
      docRoot.style.opacity = '1';
    });
  }

  // 实时滚动阴影效果保持不变
  const markdownContent = document.querySelector('.markdown');
  if (markdownContent) {
    markdownContent.addEventListener('scroll', () => {
      const scrollTop = markdownContent.scrollTop;
      markdownContent.style.boxShadow = `0 ${Math.min(scrollTop/10, 5)}px ${Math.min(scrollTop/5, 10)}px rgba(0,0,0,0.1)`;
    });
  }
});

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
}