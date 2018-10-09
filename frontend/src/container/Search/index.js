import React, { Component } from 'react'
import { connect } from 'react-redux';
import SearchForm from '../../components/form/searchForm';
import ListProduct from '../../components/list-product';
import CategoryAction from '../../actions/categoryAction';
import SearchAction from '../../actions/searchAction';

class Search extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchTypes();
    this.props.fetchBrands();    
  }

  render() {
    let results = '';
    if (this.props.result.cars) {
      if (this.props.result.cars.length > 0)
        results = (
          <ListProduct className='mt-3'
            cars={this.props.result.cars}
            title="Kết quả tìm kiếm"
            colSizeLg="3"
          />
        )
      else results = (
        <h4 className="h4-responsive ">Không tìm thấy kêt quả</h4>
      )
    }
    return (
      <div className='main-body'>        
        <div className='container'>
          <div className="row mb-3">
            <SearchForm types={this.props.types}
              brands={this.props.brands}
              onSearch={this.props.onSearch}
            />
          </div>
          <div className="row">
            {results}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProp = (state) => ({
  types: state.CategoryReducer.types,
  brands: state.CategoryReducer.brands,
  result: state.SearchFormReducer.result,
});

const mapDispatchToProp = (dispatch) => ({
  fetchTypes: () => dispatch(CategoryAction.fetchTypes()),
  fetchBrands: () => dispatch(CategoryAction.fetchBrands()),
  onSearch: (queryObj) => dispatch(SearchAction.onSearch(queryObj))
});

export default connect(mapStateToProp, mapDispatchToProp)(Search);
