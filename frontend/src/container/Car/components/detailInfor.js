import React, { Component } from 'react';
import { Card, CardBody, CardImage, FormInline, Input,  InputNumeric, Button, Fa} from 'mdbreact';
import NumericInput from 'react-numeric-input';
import NumberFormat from 'react-number-format';

export default class DetailInforProduct extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let detailInfor;
		if (this.props.car) {
			detailInfor = (
				<Card >
					<div className='row'>
						<div className='col-md-6'>
							<CardBody>
								<CardImage cascade src={this.props.car.imageTopPath} top alt="sample photo" />
							</CardBody>
						</div>
						<div className='col-md-6'>
							<CardBody>
								<h1 className='mb-3' color='danger'>{this.props.car.name}</h1>
								<h3 id='price-car' className='mb-3'>
									<NumberFormat value={this.props.car.price} displayType={'text'} thousandSeparator={true}/> VNĐ
								</h3>
								<dl className='row pl-3'>
									<dt className='mb-2 col-lg-3'>Loại xe: </dt>
									<dd className='mb-2 col-lg-9'>{this.props.car.type}</dd>
									<dt className='mb-2 col-lg-3'>Hãng: </dt>
									<dd className='mb-2 col-lg-9'>{this.props.car.brand}</dd>
									<dt className='mb-2 col-lg-3'>Lượt xem: </dt>
									<dd className='mb-2 col-lg-9'>{this.props.car.numOfViews}</dd>
									<dt className='mb-2 col-lg-3'>Lượt bán: </dt>
									<dd className='mb-2 col-lg-9'>{this.props.car.numOfSales}</dd>
									<dt className='mb-2 col-lg-3'>Còn lại : </dt>
									<dd className='mb-2 col-lg-9'>{this.props.car.quantity}</dd>
								</dl>	
								<FormInline id='form-order-button'>
									<label>Số lượng: </label>
									<NumericInput value={1} mobile className='form-control'/>		
									<Button rounded color='danger'><Fa size='2x' icon='shopping-cart'/> Đặt hàng</Button>
								</FormInline>			
							</CardBody>
						</div>
					</div>
				</Card>
			)
		}
		return (
			<div id='detail-infor-product' className='container'>
				{detailInfor}
			</div>
		);
	}
}
