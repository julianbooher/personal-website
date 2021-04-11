import React from 'react';

export default function Projects(props) {
    const {project} = props;


    return (
      <div>
          {JSON.stringify(project)}
      </div>
    );
  }