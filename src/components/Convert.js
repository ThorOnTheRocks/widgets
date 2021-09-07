import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const Convert = ({ language, text }) => {
  const [translation, setTranslation] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text)
    }, 1000);

    return () => {
      clearTimeout(timerId)
    }
  }, [text])

  useEffect(() => {

    const getTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: process.env.REACT_APP_API_KEY
          }
        }
      )
      setTranslation(data.data.translations[0].translatedText)
    }

    if (debouncedText) {
      getTranslation()
    }

  }, [language, debouncedText])

  return (
    <div>
      <h1 className="ui header">{translation}</h1>
    </div>
  )
}

export default Convert;