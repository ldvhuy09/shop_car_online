import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'mdbreact';

export default class CustomMenu extends Component {
  constructor(props) {
    super(props);
  }

	render() {
    let listTypes, listBrands;
    if (this.props.menu.types) {
      listTypes = this.props.menu.types.map(type => (
                <ListGroupItem href="#" hover key={type.id}>
                  - {type.name}
                </ListGroupItem>  
              ))
    }
    if (this.props.menu.brands) {
      listBrands = this.props.menu.brands.map(brand => (
                <ListGroupItem href="#" hover key={brand.id}>
                  - {brand.name}
                </ListGroupItem>  
              ))
    } 
		return (
			<div>
				<ListGroup id='menu-categories'>
          <ListGroupItem href="#" disable><i className='fa fa-bars'></i> Danh muc xe</ListGroupItem>
          <ListGroupItem href="#" disable><strong><i className='fa fa-angle-right'></i> Các loại xe</strong></ListGroupItem>
          {listTypes}
        <ListGroupItem href="#" disable><strong><i className='fa fa-angle-right'></i> Các hãng xe</strong></ListGroupItem>
          {listBrands}
        </ListGroup>
			</div>
		);
	}
}

