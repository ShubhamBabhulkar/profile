import { useState, useEffect } from 'react';
import { ROLES } from '../utils/constsnt';

const useTypingEffect = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);      // current word index
  const [subIndex, setSubIndex] = useState(0); // current letter index
  const [deleting, setDeleting] = useState(false);
  const [hold, setHold] = useState(false);    // pause after full word

  useEffect(() => {
    if (index >= ROLES.length) setIndex(0);
    const currentWord = ROLES[index];

    if (hold) {
      // Hold for 3 seconds
      const holdTimeout = setTimeout(() => setHold(false), 2000);
      return () => clearTimeout(holdTimeout);
    }

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex + 1 === currentWord.length) {
          setHold(true);      // trigger hold
          setDeleting(true);  // start deleting after hold
        }
      } else {
        setText(currentWord.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex(index + 1);
        }
      }
    }, deleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, hold]);

  return text;
};

export default useTypingEffect;