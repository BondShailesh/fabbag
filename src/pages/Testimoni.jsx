import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import shikha from "../avatar/shikha.png"
import anushree from "../avatar/anushree.png"
import kritha from "../avatar/kritha.png"
import niraj from "../avatar/niraj.png"
import saili from "../avatar/saili.png"
import pratika from "../avatar/pratika.png"

export default function Testimoni() {
    return (
        <div style={{
            width: "100%",
            marginTop: "90px",
            backgroundImage:
                "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')"
        }}>
            <Carousel >
                <Carousel.Item interval={1500}>
                    <img
                        src={anushree}
                        alt="Image One"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={shikha}
                        alt="Image Two"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={kritha}
                        alt="Image three"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={niraj}
                        alt="Image three"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={saili}
                        alt="Image three"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={pratika}
                        alt="Image three"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
}