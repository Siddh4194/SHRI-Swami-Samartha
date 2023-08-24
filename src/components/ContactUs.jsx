import { Instagram, MailOutline, Call } from '@mui/icons-material';
import React ,{useState} from 'react';

export default function Contact() {
    const [formData,setData] = useState({
        name:'',
        mobile:'',
        event:'',
        place:'',
    });


    const [inputStyle, setInputStyle] = useState({
       border: "none",
       borderRadius: ".2em",
  });


    const handleChange = (event) =>{
        const {name,value} = event.target;
        setData((prevData)=>({
            ...prevData,
            [name] : value,
        }));
    }
    const handleClick = (event) =>{
        event.preventDefault();
        if(formData.mobile.match("[0-9]{10}")){
            console.log(formData);
            fetch('https://backend-sse.vercel.app/contact', {
                method: 'post', // HTTP method is POST
                headers: {
                  'Content-Type': 'application/json', // Specify that the request body is in JSON format
                },
                body: JSON.stringify({
                  name: formData.name,
                  mobile: formData.mobile,
                  event: formData.event,
                  place: formData.place,
                }), // Convert the data to a JSON string and send it in the request body
              })
                .then(response => response.json()) // Parse the response as JSON
                .then(data => {
                  console.log('Response from server:', data); // Log the response data to the console
                })
                .catch(error => {
                  console.error('Error sending data:', error); // Log any errors that occur during the request
             });
                setData({
                    name:'',
                    mobile:'',
                    event:'',
                    place:'',
                })
                setInputStyle({
                    border: "none",
                    borderRadius: ".2em",
            });
        } else{
            setInputStyle({
                border: "1px solid red",
                borderRadius: ".2em",
           });
        }
        
    }
    return(
        <div id='ContactUs' className="contact">
            <div className="contacthead">
                <h2>ContactUs</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className='col-lg-6 col-md-12 col-sm-12 col-12 contForm'>
                        <div>
                            <h5>Fill Up The Form To PreRegister</h5>
                        </div>
                        <div>
                        <input placeholder='Name' type="text" value={formData.name } onChange={handleChange} name='name'/>
                        </div>

                        <div>
                        <input placeholder='Mobile No' type="text" id='number' style={inputStyle}  value={formData.mobile} onChange={handleChange} name='mobile'/>
                        </div>
                        <div>
                        <input placeholder='Enter Interested Event' value={formData.event} type="text" onChange={handleChange} name='event'/>
                        </div>
                        <div>
                        <input type="text" placeholder='Enter Your Place' value={formData.place} onChange={handleChange} name='place'/>
                        </div>
                        <div>
                        <button className='formButton' onClick={handleClick}>Submit</button>
                        </div>
                    </div>
                    <div  className='col-lg-6 col-md-12 col-sm-12 col-12 text_center_div'>
                        <div>
                            <h5>Get in touch for all your event inquiries.</h5>
                        </div>
                        <div className="ContactButtons">
                            <div className='socialTabs'>
                                {/* <div className="container"> */}
                                    {/* <div className="row"> */}
                                <button className='col-md-4 col-sm-6 col-6' ><a href="https://www.instagram.com/shri.swami_samarth_events/" className='anchorButton'>
                                    <div className="ic"><Instagram/></div>
                                    <div className="icName">Instagram Handle</div>
                                </a></button>
                                <button className='col-md-4 col-sm-6 col-6'><a href="mailto:sp876672@gmail.com" className='anchorButton'>
                                    <div className="ic"><MailOutline/></div>
                                    <div className="icName">Mail Me</div>
                                </a></button>
                                <button className='col-md-4 col-sm-6 col-6'><a href="tel:+918766728199" className='anchorButton'>
                                    <div className="ic"><Call/></div>
                                    <div className="icName">Call Me</div>
                                </a></button>
                                    </div>
                                {/* </div>
                            </div> */}
                            <div className="contInfo">
                            Connect with us for bookings, inquiries, and personalized event experiences. We're dedicated to bringing your vision to life. Reach us via phone or email to start planning your unforgettable event.
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
