import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a fron end javascript library',
  },
  {
    title: 'Why use React?',
    content: 'React is favourite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  }
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default App;