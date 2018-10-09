import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'mdbreact';

export default class CustomMenu extends Component {
  constructor(props) {
    super(props);
  }

  listItems(items, category) {
  	return items.map(item => {
  		let isActive = false;
  		if (item.name === this.props.activedItem)
  			isActive = true;
  		return (
			  <ListGroupItem href={'/cars/' + category + '/' + item.name} active={isActive} hover key={item.id}>
				  - {item.name}
			  </ListGroupItem>
		  )
	  })
  }

	render() {
    let listTypes = this.props.menu.types ? this.listItems(this.props.menu.types, 'type') : [];
		let listBrands = this.props.menu.brands ? this.listItems(this.props.menu.brands, 'brand') : [];

		return (
			<div>
				<ListGroup className='menu-categories'>
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

