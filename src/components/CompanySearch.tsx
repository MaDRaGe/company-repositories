import * as React from 'react';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { fetchCompanyRepos } from '../redux/actions/actions';

export interface ICompanySearchProps {

}


const CompanySearch = (props) => {
  const [inputValue, setInputValue] = React.useState('');
  return (
    <div>
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