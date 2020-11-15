import * as React from 'react';
import { connect } from 'react-redux';
import { IRepository } from '../redux/types';
import Repository from './Repository';
import Loader from '@material-ui/core/CircularProgress';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
})


export interface IRepositoryListProps {
  reposList: IRepository[];
  isLoading: boolean;
  isLoadedSuccess: boolean | null
}

const RepositoryList = (props: IRepositoryListProps) => {
  const classes = useStyles();
  if (props.isLoadedSuccess === false) {
    return <MuiAlert severity="error">Loading repositories is failure</MuiAlert>  
  }

  if (props.isLoading) {
    return <Loader />
  }
  const reposListView = props.reposList && props.reposList.map((repo) => {
    return <Repository 
      name={repo.name}
      url={repo.url}
      forkCount={repo.forkCount}
      watchCount={repo.watchCount}
      starCount={repo.starCount}
    />
  })
  
  return (
    <div className={classes.root}>
      {reposListView}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    isLoadedSuccess: state.company.isReposListLoaded,
    reposList: state.company.reposOnPage,
    isLoading: state.company.isReposListLoading
  }
}

export default connect(mapStateToProps)(RepositoryList);