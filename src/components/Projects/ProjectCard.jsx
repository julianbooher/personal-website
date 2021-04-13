import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// icons
import { GrGithub, GrHeroku, GrYoutube } from 'react-icons/gr';

const useStyles = makeStyles({
  root: {
    maxWidth: 500 || '100%',
    margin: '1em',
  },
  media: {
    height: 250,
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();
  const {project} = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={project.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {project.github && 
          <Button onClick={() => { window.open(`https://${project.github}`, '_blank')}}><GrGithub/></Button>
        }
        {project.heroku && 
          <Button onClick={() => { window.open(`https://${project.heroku}`, '_blank')}}><GrHeroku/></Button>
        }
        {project.youtube && 
          <Button onClick={() => { window.open(`https://${project.youtube}`, '_blank')}}><GrYoutube/></Button>
        }
      </CardActions>
    </Card>
  );
}