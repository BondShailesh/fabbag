import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Caurosel() {
    
    return (
    //   style={{ display: 'block'}}
        <div >
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        // className="d-block w-100"
                        src= "../avatar/imgg.webp"
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <h3>Label for first slide</h3>
                        <p>Sample Text for Image One</p>
                    </Carousel.Caption>
                </Carousel.Item>

{/* 
                <Carousel.Item interval={1000}>
                    <img
                        src="../avatar/imgg.webp"
                        alt="Image Two"
                        width="800px"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        src="../avatar/imgg.webp"
                        alt="Image Two"
                        width="800px"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item> */}

            </Carousel>
        {/* </div> */}
        </div>
    );
}
