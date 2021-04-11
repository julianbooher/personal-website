import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'PROJECTS'})
    }, [dispatch])

    const projects = useSelector(state=> state.projects);

    return (
      <div>
          <h1>Projects Test</h1>
          {projects.map((project, i) => (
            <ProjectCard project={project} key={i} />
          ))}
      </div>
    );
  }