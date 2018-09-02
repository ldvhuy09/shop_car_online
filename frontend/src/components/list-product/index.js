import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardImage, CardBody, CardTitle } from 'mdbreact';
import NumberFormat from 'react-number-format';

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listCars;
    if (this.props.cars) {
      listCars = this.props.cars.map(car => {
        let link = `/cars/${car.id}`;
        return (
        <Col lg={this.props.colSizeLg} md="4" sm="6" className="mb-4" key={car.id}>
          <Link to={link}>
	          <Card wide ecommerce>
		          <CardImage cascade src={car.imageTopPath} top alt="car photo" />
		          <CardBody cascade className="text-center">
			          <h5>{car.type}</h5>
			          <CardTitle className='mb-1'>
				          <strong><a href="">{car.name}</a></strong>
			          </CardTitle>
			          <div href="" className="red-text mt-1">
				          <NumberFormat value={car.price} displayType={'text'} thousandSeparator={true}/> VNĐ
			          </div>
		          </CardBody>
	          </Card>
          </Link>
        </Col>)}
      )
    }

    return(
      <div className='list-products'>
        <h4 className="h4-responsive ">{this.props.title}</h4>
        <section className="text-center my-2">
          <Row>
            {listCars}
          </Row>
        </section>
      </div>
    );
  };
}

