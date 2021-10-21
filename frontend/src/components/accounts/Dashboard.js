import React, { Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export default function Dashboard() {
  return (<Fragment>
    <h2>Hey Dashboard</h2>
    <Image src="https://ichef.bbci.co.uk/news/976/cpsprodpb/3526/production/_99560631_superheroesgetty.jpg" fluid />
    <br/>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.replicon.com/wp-content/uploads/2018/03/17-reasons.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     className="d-block w-100"
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_Q4HThnb3pD2VjsJROhIqAsIoXLHxmYiOMZ_Q4jZwhxfx-6uEK43qTPURoWNlD4TiPM&usqp=CAU"
     alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQH3biB_xtPZadMs9Kz_AA3phdf1jhqzJxtP9wOCobtuu9lgpPh3nv7KT7K95okc75Xk&usqp=CAU"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </Fragment>);
}
