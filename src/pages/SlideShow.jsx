import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import bg1 from "../avatar/bg1.png"
import bg2 from "../avatar/bg2.png";
import bg3 from "../avatar/bg3.png";
import { Link } from 'react-router-dom';

export default function Caurosel() {
    return (
        <div style={{ width: "100%" }}>
            <Carousel >
                <Carousel.Item interval={1500}>
                    <Link to="/commonproduct">
                        <img
                            src={bg1}
                            alt="Image One"
                        />
                    </Link>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <Link to="/commonproduct">
                        <img
                            className="d-block w-100"
                            src={bg2}
                            alt="Image Two"
                        />
                    </Link>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <Link to="/commonproduct">
                        <img
                            className="d-block w-100"
                            src={bg3}
                            alt="Image Two"
                        />
                    </Link>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}