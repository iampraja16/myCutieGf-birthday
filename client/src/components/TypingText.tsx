import { useTypingAnimation } from "@/hooks/useTypingAnimation";

interface TypingTextProps {
  words: string[];
  className?: string;
}

const TypingText = ({ words, className = "" }: TypingTextProps) => {
  const currentText = useTypingAnimation(words);
  
  return (
    <span className={`typing-cursor ${className}`}>
      {currentText}
    </span>
  );
};

export default TypingText;
