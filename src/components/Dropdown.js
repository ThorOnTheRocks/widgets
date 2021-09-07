import React, { useRef } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const Dropdown = ({ options, selected, onChangeSelected }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, { capture: true });
    }
  }, [])

  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        onClick={() => onChangeSelected(option)}
        className="item"
      >
        {option.label}
      </div>
    )
  })


  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}

        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;