import { useState } from 'react';


/**
 * Use input hooks
 *
 * @param {any} initialState
 * @return {any, (e: any) => void}
 */
function useInput (initialState) {
  const [ state, setState ] = useState(initialState);

  const onChange = (e) => {
    setState(e.target.value);
  }

  return [ state, onChange ];
}

export default useInput;
