import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'HOME'})
    }, [dispatch])

  
    return (
      <div>
          <h1>Home Test AWS</h1>
      </div>
    );
  }