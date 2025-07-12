import { useEffect } from "react";

const FallingPetals = () => {
  useEffect(() => {
    const petals = ['🌸', '🌺', '🌷', '🥀'];
    
    const createPetal = () => {
      const petal = document.createElement('div');
      petal.textContent = petals[Math.floor(Math.random() * petals.length)];
      petal.className = 'fixed pointer-events-none z-0 opacity-20';
      petal.style.left = Math.random() * 100 + '%';
      petal.style.top = '-50px';
      petal.style.fontSize = (Math.random() * 20 + 10) + 'px';
      petal.style.animation = `float ${8 + Math.random() * 6}s linear infinite`;
      petal.style.animationDelay = Math.random() * 8 + 's';
      
      document.body.appendChild(petal);
      
      setTimeout(() => {
        if (petal.parentNode) {
          petal.parentNode.removeChild(petal);
        }
      }, 14000);
    };
    
    const interval = setInterval(createPetal, 2000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default FallingPetals;
