import React from 'react';

// Components
import Accordion from './components/Accordion';
import Search from './components/Search';

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
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  )
}

export default App;