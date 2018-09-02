import React, { Component } from 'react'
import { connect } from 'react-redux';
import CategoryAction from '../../actions/categoryAction';
import SearchForm from '../../components/search-form';

class Search extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchTypes();
    this.props.fetchBrands();    
  }

  render() {
    return (
      <div className='main-body'>        
        <SearchForm/>
      </div>
    )
  }
}

const mapStateToProp = (state) => ({
  types: state.CategoryReducer.types,
  brands: state.CategoryReducer.brands
});

const mapDispatchToProp = (dispatch) => ({
  fetchTypes: () => dispatch(CategoryAction.fetchTypes()),
  fetchBrands: () => dispatch(CategoryAction.fetchBrands()),
});

export default connect(mapStateToProp, mapDispatchToProp)(Search);
