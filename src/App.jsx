import React from 'react';

import { useInput } from './hooks';
import { List, HighlightText } from './components';

import './scss/index.scss';
import data from './resources/mock-data.json';


/**
 * Application pages
 *
 * @return {JSX.Element}
 */
function App () {
  const [ search, setSearch ] = useInput('');

  const render = ({ title }) => (
    <div className="render-item">
      <HighlightText text={title} highlight={search} />
    </div>
  )

  return (
    <div className="home-page">
      <div className="container">
        <div className="input-container">
          <input type="text" placeholder="Search" className="input" onChange={setSearch} />
        </div>

        <List
          items={data.filter((item) => item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)}
          keyExtractor={(_, index) => index.toString()}
          render={render}
          containerClassName="has-bordered"
        />
      </div>
    </div>
  );
}

export default App;
