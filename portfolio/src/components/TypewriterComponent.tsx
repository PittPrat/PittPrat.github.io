import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypewriterComponent: React.FC<TypewriterProps> = ({
  words,
  typingSpeed =150,
  deletingSpeed = 50,
  pauseTime = 2000,
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          setIsWaiting(true);
        }
      }
    }, isWaiting ? pauseTime : isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, isWaiting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className="text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-bold text-4xl md:text-4xl">
      {text}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypewriterComponent;