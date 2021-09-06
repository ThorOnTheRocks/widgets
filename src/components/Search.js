import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);


  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        },
      });

      setResults(data.query.search);
    };

    const timeOutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 1000);

    return () => {
      clearTimeout(timeOutId)
    }

  }, [term])

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
            rel="noreferrer"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          {result.snippet.replace(/(<([^>]+)>)/ig, '')}
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            type="text"
            className="input"
            value={term}
            onClick={() => setTerm('')}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  )
}

export default Search;
