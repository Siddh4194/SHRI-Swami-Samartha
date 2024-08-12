import React from 'react';
import { Card } from 'react-bootstrap';

export default function About() {
    return(
        <div id='About' className="about">
            <div className='Abouthead'>
                <div>
                    <h1>About Company</h1>
                </div>
                <div>
                    <h6>
At Shri Swami Samartha, we specialize in turning your dream events into reality. With a passion for creativity and attention to detail, we curate unforgettable experiences. From weddings to corporate gatherings, our team brings your vision to life, ensuring every moment is as extraordinary as you are.</h6>
                </div>
</div>
            <div className='Abouthead'>
                <div>
                <h1>Our Story</h1>
                </div>
                <div className="container">
                <div className="row aboutBag">
                        <Card className="col-lg-4 col-md-6 col-sm-12 aboutCard">
                            <Card.Body>
                                <Card.Title className='testNomials_about'>
                                    Expirience
                                </Card.Title>
                                <Card.Text  className="mb-2 text-muted cardText">
                                Crafting unforgettable experiences, we blend meticulous planning, tailored elegance, and innovative concepts. Our dedicated team turns your vision into reality, ensuring seamless, cherished moments that linger in memories.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-lg-4 col-md-6 col-sm-12  aboutCard">
                            <Card.Body>
                                <Card.Title className='testNomials_about'>
                                    SS Events Foundation 😍
                                </Card.Title>
                                <Card.Text  className="mb-2 text-muted cardText">
                                Built on passion and expertise, our company was founded to transform events into cherished memories. With a commitment to creativity and excellence, we bring dreams to life, one remarkable event at a time.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-lg-4 col-md-6 col-sm-12  aboutCard">
                            <Card.Body>
                                <Card.Title className='testNomials_about'>
                                    25 Events are Organized 🎉
                                </Card.Title>
                                <Card.Text  className="mb-2 text-muted cardText">
                                With 25 successful events, our track record reflects our dedication to delivering exceptional experiences that exceed expectations
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </div>
            </div>
            </div>
            </div>
            
    
    ); 
}