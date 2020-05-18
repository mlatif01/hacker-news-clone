import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import News from './components/News';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <News />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
