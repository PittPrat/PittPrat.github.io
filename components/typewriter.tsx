"use client"

import { useState, useEffect, useRef } from "react"

interface TypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
}

export default function Typewriter({
  words,
  typingSpeed = 60,
  deletingSpeed = 40,
  delayBetweenWords = 1000,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [isWaiting, setIsWaiting] = useState(false)

  const currentWordRef = useRef(words[0])

  useEffect(() => {
    // Safety check for words array
    if (!words || !words.length || wordIndex >= words.length) return;
    
    // Set the current word
    currentWordRef.current = words[wordIndex];
    
    let timeout: NodeJS.Timeout;
    
    // If we're waiting between words, just set up the timeout for the next state
    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setIsWaiting(false);
      }, delayBetweenWords);
    } 
    // If we're deleting
    else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        
        // If we've deleted everything, start typing the next word
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    }
    // If we're typing
    else {
      timeout = setTimeout(() => {
        // If we haven't typed the full word yet
        if (displayText.length < currentWordRef.current.length) {
          setDisplayText(currentWordRef.current.substring(0, displayText.length + 1));
        }
        // If we've typed the full word, enter waiting state
        else {
          setIsWaiting(true);
        }
      }, typingSpeed);
    }
    
    // Clean up function to clear timeout
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords, isWaiting]);
  return (
    <span className="inline-block min-h-[1.5em]">
      {displayText}
      <span className="inline-block w-1 h-6 bg-primary ml-1 animate-blink"></span>
    </span>
  )
}

