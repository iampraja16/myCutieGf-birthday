import { useState, useEffect } from "react";

export const useTypingAnimation = (words: string[], typeSpeed: number = 150, deleteSpeed: number = 100, pauseTime: number = 2000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;
    
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (currentText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, typeSpeed, deleteSpeed, pauseTime]);

  return currentText;
};
