import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';

export default function Projects() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'PROJECTS'})
    }, [dispatch])

  
    return (
      <div>
          <h1>Projects Test</h1>
      </div>
    );
  }