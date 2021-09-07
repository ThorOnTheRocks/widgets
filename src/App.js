import React from 'react';
import { useState } from 'react/cjs/react.development';

// Components
import Accordion from './components/Accordion';
import Convert from './components/Convert';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a fron end javascript library',
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is favourite JS library among engineers'
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components',
//   }
// ];

// const options = [
//   {
//     label: 'Red',
//     value: 'red'
//   },

//   {
//     label: 'Green',
//     value: 'green'
//   },

//   {
//     label: 'Blue',
//     value: 'blue'
//   }
// ]

const App = () => {
  // const [selected, setSelected] = useState(options[0])

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        options={options}
        selected={selected}
        onChangeSelected={setSelected}
      /> */}
      <Translate />
    </div>
  )
}

export default App;