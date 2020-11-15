import * as React from 'react';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { fetchCompanyRepos } from '../redux/actions/actions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  companySearch: {
    marginBottom: '20px'
  }
})

const CompanySearch = (props) => {
  const [inputValue, setInputValue] = React.useState('');
  const classes = useStyles();
  return (
    <div className={classes.companySearch}>
      <form onSubmit={(event) => {
          event.preventDefault();
          props.fetchCompanyRepos(inputValue);
          }}>
        <Input 
          onInput={(event: React.FocusEvent<HTMLInputElement>) => {
            setInputValue(event.target.value)
          }} 
          value={inputValue}
          placeholder="Search companies..." />
      </form>
      
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCompanyRepos: (companyName) => dispatch(fetchCompanyRepos(companyName))
  }
}

export default connect(null, mapDispatchToProps)(CompanySearch);