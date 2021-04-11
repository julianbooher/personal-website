import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ProjectCard from './ProjectCard.jsx'

// Material-UI
import Grid from '@material-ui/core/Grid';


export default function Projects() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'PROJECTS'})
    }, [dispatch])

    const projects = useSelector(state=> state.projects);

    return (
      <div>
          <h1>Projects Test</h1>
          <Grid container>
            {projects.map((project, i) => (
              <Grid item xs={12} md={3} key={i}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
      </div>
    );
  }