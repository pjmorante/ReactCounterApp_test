import React, { useState } from "react";
import PropTypes from 'prop-types';

function App( { numInicial } ) {

  const [ counter, setCounter ] = useState( numInicial );

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleSubst = () => setCounter(counter - 1)

  const handleReset = () => setCounter( 0 );

  return (
    <div>
      <h1>{ counter }</h1>
      <button onClick={ handleAdd }>+</button>
      <button onClick={ handleReset }>Reset</button>
      <button onClick={ handleSubst }>-</button>
    </div>
  );
}

App.prototype = {
  value: PropTypes.number.isRequired
}

export default App;
