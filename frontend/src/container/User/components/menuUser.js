import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact';

export default class MenuUser extends Component {
  constructor(props) {
    super(props);
  }
	render() {
		return (
			<div>
				<ListGroup className='menu-categories'>
          <ListGroupItem href="#" hover active><i className='fa fa-user-circle'> </i> Hồ sơ cá nhân</ListGroupItem>
          <ListGroupItem href="#" hover ><i className='fa fa-bookmark'></i>Lịch sử mua hàng</ListGroupItem>
        </ListGroup>
			</div>
		);
	}
}
