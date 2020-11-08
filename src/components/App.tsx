import * as React from 'react';
import CompanySearch from './CompanySearch';
import RepositoryList from './RepositoryList';
import Container from '@material-ui/core/Container';
import Pagination from './Pagination';

const App = () => {
  return (
    <Container>
      <CompanySearch />
      <RepositoryList/>
      <Pagination/>
    </Container>
  )
}

export default App;