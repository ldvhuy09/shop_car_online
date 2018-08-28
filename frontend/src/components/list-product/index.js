import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CLIENT_BASE_URL } from '../../constants/config';
import { Row, Col, Card, CardImage, CardBody, CardTitle, CardFooter, Fa, Button } from 'mdbreact';

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listCars;
    if (this.props.cars) {
      listCars = this.props.cars.map(car => {
          var link = `/cars/${car.id}`;
          return (
          <Col lg="3" md="4" sm="6" className="mb-lg-4 mb-4">
            <Card wide ecommerce>
              <CardImage cascade src={car.imageTopPath} top alt="sample photo" />
              <CardBody cascade className="text-center">
                <a href="" className="text-muted">
                  <h5>{car.type}</h5>
                </a>
                <CardTitle>
                  <strong><a href="">{car.name}</a></strong>
                </CardTitle>
                <a href="" className="deep-orange-text">
                  <h5>{car.price / 1000000000.0} tỷ Đ</h5>
                </a>
                <CardFooter className="px-0">
                  <Button color='amber' className='float-left mb-2' size='sm'><Fa icon='shopping-cart'/> Đặt hàng</Button>
                  <Link to={link} onlyActiveOnIndex>
                    <Button color='blue' className='float-right' size='sm'><Fa icon='eye'/>Chi tiết</Button>
                  </Link>
                </CardFooter>
              </CardBody>
            </Card>
          </Col>)}
      )
    }

    return(
      <div className='list-products'>
      <h4 className="h3-responsive my-2">{this.props.title}</h4>    
          <section className="text-center my-2">
            <Row>
              {listCars}
            </Row>
          </section>
    </div>
    );
  };
}
