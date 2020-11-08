import * as React from 'react';
import { IRepository } from '../redux/types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 275,
    marginBottom: '20px'
  },
})

const Repository = (props: IRepository) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <a href={props.url} target="_blank">
        <CardContent>
          <Typography>
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
      </a>
    </Card>
  )
}

export default Repository;