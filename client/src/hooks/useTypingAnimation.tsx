import { useState, useEffect } from "react";

export const useTypingAnimation = (words: string[], typeSpeed: number = 150, deleteSpeed: number = 100, pauseTime: number = 2000) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex];
    
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentWord) {
      // Finished typing current word, wait before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Type or delete one character
      timeout = setTimeout(() => {
        setText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return currentWord.slice(0, prev.length + 1);
          }
        });
      }, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [text, wordIndex, isDeleting, words, typeSpeed, deleteSpeed, pauseTime]);

  return text;
};
