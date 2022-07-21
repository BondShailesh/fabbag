import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import bg1 from "../avatar/bg1.png"
import bg2 from  "../avatar/bg2.png";
import bg3 from "../avatar/bg3.png";

export default function Caurosel() {
    return (
        <div style={{ width: "100%"}}>
            <Carousel >
                <Carousel.Item interval={1500}>
                    <img
                        src={bg1}
                        alt="Image One"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={bg2}
                        alt="Image Two"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={bg3}
                        alt="Image Two"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
}