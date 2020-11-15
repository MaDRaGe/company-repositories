import * as React from 'react';
import { IRepository } from '../redux/types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: '250px',
    marginBottom: '20px'
  },
  link: {
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  title: {
    marginBottom: '15px'
  },
})

const Repository = (props: IRepository) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {props.name}
        </Typography>
        <Typography>
          Forks: {props.forkCount}
        </Typography>
        <Typography>
          Watches: {props.watchCount}
        </Typography>
        <Typography>
          Stars: {props.starCount}
        </Typography>
      </CardContent>
      <CardContent>
        <Button size="small">
          <a href={props.url} className={classes.link} target="_blank">Learn more</a>
        </Button>
      </CardContent>
    </Card>
  )
}

export default Repository;