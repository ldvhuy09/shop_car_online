import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container, Button } from 'mdbreact';

export default class CustomCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <Carousel
          id='carousel-ads'
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={false}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-105" src="https://res.cloudinary.com/ldvhuy09/image/upload/v1534821364/cars/first.jpg" alt="First slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Tốc độ</h3>
                <Link to='/cars/'><Button color='amber' rounded>Xem ngay</Button></Link>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-125" src="https://res.cloudinary.com/ldvhuy09/image/upload/v1535355276/cars/18_18.jpg" alt="Second slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Mạnh mẽ</h3>
                <Link to='/cars/18'><Button color='amber' rounded>Xem ngay</Button></Link>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-125" src="https://res.cloudinary.com/ldvhuy09/image/upload/v1535355276/cars/12_12.jpg" alt="Third slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Sang trọng</h3>
                <Link to='/cars/12'><Button color='amber' rounded>Xem ngay</Button></Link>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="d-block w-125" src="https://res.cloudinary.com/ldvhuy09/image/upload/v1535355276/cars/10_10.jpg" alt="Mattonit's item" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Lịch lãm</h3>
                <Link to='/cars/10'><Button color='amber' rounded>Xem ngay</Button></Link>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
    );
  }
}
