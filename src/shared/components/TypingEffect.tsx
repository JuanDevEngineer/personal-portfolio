import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingEffectProps {
  words: string[];
  className?: string;
}

export function TypingEffect({ words, className = '' }: TypingEffectProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text === '') {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="typing-cursor"
      >
        |
      </motion.span>
    </motion.span>
  );
}
