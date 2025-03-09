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
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [isWaiting, setIsWaiting] = useState(false)

  const currentWordRef = useRef(words[0])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // If we're waiting between words, don't do anything
    if (isWaiting) return

    // Set the current word
    currentWordRef.current = words[wordIndex]

    // If we're deleting
    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.substring(0, prev.length - 1))

        // If we've deleted everything, start typing the next word
        if (displayText.length <= 1) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }, deletingSpeed)
    }
    // If we're typing
    else {
      timeout = setTimeout(() => {
        // If we haven't typed the full word yet
        if (displayText.length < currentWordRef.current.length) {
          setDisplayText(currentWordRef.current.substring(0, displayText.length + 1))
        }
        // If we've typed the full word, wait and then start deleting
        else {
          setIsWaiting(true)
          timeout = setTimeout(() => {
            setIsDeleting(true)
            setIsWaiting(false)
          }, delayBetweenWords)
        }
      }, typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords, isWaiting])

  return (
    <span className="inline-block min-h-[1.5em]">
      {displayText}
      <span className="inline-block w-1 h-6 bg-primary ml-1 animate-blink"></span>
    </span>
  )
}

