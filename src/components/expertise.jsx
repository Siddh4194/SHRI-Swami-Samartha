import React from 'react';
import { Card } from 'react-bootstrap';
import { DesignServicesOutlined, FoodBankSharp, LocationOn, Mail, MusicNote, PhotoAlbum } from '@mui/icons-material';
function Expertise() {

  return (
    <div id='Services' className="expert">
      <div className="expert_head">
        <h2>Services</h2>
      </div>
      <div className='cards_container'>
        <div className="container">
          <div className="row">
            <div className='col-lg-4 col-md-4 col-sm-6 col-6'>
              <Card className="testCard_white ">
                  <Card.Body>
                      <Card.Title className='cardTitle'>
                          <div><LocationOn/></div>
                          <div><h6>Venue Selection</h6></div>
                      </Card.Title>
                      <Card.Text  className="mb-2 text-muted cardText">
                      Customize your venue selection based on your preferences.
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6 col-6'>
              <Card className="testCard_white ">
                  <Card.Body>
                      <Card.Title className='cardTitle'>
                        <div><Mail/></div>
                          <div><h6>Invitation Card</h6></div>
                      </Card.Title>
                      <Card.Text  className="mb-2 text-muted cardText">
                      Create an elegant invitation card for your special occasion.
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6 col-6'>
              <Card className="testCard_white ">
                  <Card.Body className='alinger'>
                  <Card.Title className='cardTitle'>
                          <div><DesignServicesOutlined/></div>
                          <div><h6>Decoration</h6></div>
                      </Card.Title>
                      <Card.Text  className="mb-2 text-muted cardText">
                      Elevate your event with exquisite and personalized decorations.
                      </Card.Text>
                          
                  </Card.Body>
              </Card>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6 col-6'>
              <Card className="testCard_white ">
                  <Card.Body>
                      <Card.Title className='cardTitle'>
                        <div><MusicNote/></div>
                          <div><h6>Music</h6></div>
                      </Card.Title>
                      <Card.Text  className="mb-2 text-muted cardText">
                      Set the perfect mood with curated music selections
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6 col-6'>
              <Card className="testCard_white ">
                  <Card.Body>
                      <Card.Title className='cardTitle'>
                          <div><FoodBankSharp/>
                          </div>
                          <div><h6>Food and Drinks</h6></div>
                      </Card.Title>
                      <Card.Text  className="mb-2 text-muted cardText">
                      Indulge in a delightful array of food and drinks.
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6 col-6'>
              <Card className="testCard_white ">
                  <Card.Body>
                      <Card.Title className='cardTitle'>
                        <div><PhotoAlbum/></div>
                          <div><h6>Photos And Videos</h6></div>
                      </Card.Title>
                      <Card.Text  className="mb-2 text-muted cardText">
                      Capture memories with stunning photos and captivating videos.
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
