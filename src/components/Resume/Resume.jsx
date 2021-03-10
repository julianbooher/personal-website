import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';

export default function Resume() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'RESUME'})
    }, [dispatch])

  
    return (
      <div>
          <h1>Resume Test</h1>
      </div>
    );
  }