import { useEffect } from "react";

const FloatingHearts = () => {
  useEffect(() => {
    const hearts = ['💕', '❤️', '💖', '💝', '💗', '💓'];
    
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.className = 'fixed text-2xl pointer-events-none z-0 opacity-30';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.top = '100vh';
      heart.style.color = 'hsl(325, 67%, 84%)';
      heart.style.animation = `float ${6 + Math.random() * 4}s linear infinite`;
      heart.style.animationDelay = Math.random() * 6 + 's';
      
      document.body.appendChild(heart);
      
      setTimeout(() => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart);
        }
      }, 10000);
    };
    
    const interval = setInterval(createHeart, 3000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default FloatingHearts;
