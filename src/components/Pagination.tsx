import * as React from 'react';
import { connect } from 'react-redux';
import MuiPagination from '@material-ui/lab/Pagination';
import { 
  selectPaginationPage, 
} from '../redux/actions/actions'

const Pagination = (props) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value)
    props.selectPage(value);
  }
  console.log(props)
  if (!props.isReposListLoaded) {
    return <></>
  }
  return (
    <MuiPagination count={props.pagesCount} page={page} onChange={handleChange} />
  )
}

const mapStateToProps = (state) => {
  return {
    paginationCurrentPage: state.company.paginationCurrentPage,
    pagesCount: state.company.paginationPagesCount,
    isReposListLoaded: state.company.isReposListLoaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPage: (page) => { dispatch(selectPaginationPage(page)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)