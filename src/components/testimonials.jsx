import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import testimonial icon
// import FormatQuoteIcon from '@mui/icons-material/FormatQuoteRounded';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Card from 'react-bootstrap/Card';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';



// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { FormatQuoteRounded, FormatQuoteTwoTone } from '@mui/icons-material';

export default function Testimonials() {

const [width, setWidth] = useState(window.innerWidth);
const [data, setdata] = useState([]);

const handleResize = () => {
  setWidth(window.innerWidth);
};
    useEffect(()=>{
        fetch("https://ssevent-backend-xwnd-mzpzy0go3-siddh4194.vercel.app/testfetch")
        .then(response => response.json())
        .then(data => setdata(data.data))
    },[]);

useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

const testdata = [];

data.forEach((ele,index)=>{
    testdata.push(
        <SwiperSlide key={index}>
                        <Card className="testCard"style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title className='testNomials'>
                                    <div><h6>{ele.name}</h6></div>
                                    <div><FormatQuoteRounded style={{fontSize:"3em"}}/></div>
                                </Card.Title>
                                <Card.Text  className="mb-2 text-muted cardText">
                                {ele.comment}
                                </Card.Text>
                            </Card.Body>
                        </Card>
            </SwiperSlide>
    )
})

if(width > 650 ){
    return (
        <div id='Testimonials' className='testimonials'>
            <div className='head'>
            <div className="animateIcons2">
            <FormatQuoteRounded style={{fontSize:"80px"}}/>
            </div>
                <div>
                <h1>Our Happy Costumer's</h1>
                </div>
                <div className="animateIcons">
            <FormatQuoteRounded style={{fontSize:"80px"}}/>
            </div>
            </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            // pagination={{
            //   clickable: true,
            // }}
            // direction={'vertical'}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {testdata}
        </Swiper>      
            
            </div>)
} else {
    return(
    <div id='Testimonials' className='testimonials'>
            <div className='head'>
                
            <div className="animateIcons2">
            <FormatQuoteRounded style={{fontSize:"80px"}}/>
            </div>
                <div>
                <h1>Our Happy Costumer's</h1>
                </div>
                <div className="animateIcons">
            <FormatQuoteRounded style={{fontSize:"80px"}}/>
            </div>
            </div>
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {testdata}
      </Swiper>
            </div>)
}
}



// import React from 'react';

// import 'swiper/swiper-bundle.css';
// import SwiperCore from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/swiper-react'
// import { Pagination , Navigation} from 'swiper/modules';
// // Install Swiper modules
// // SwiperCore.use([Navigation, Pagination, Autoplay]);

// export default function Testimonials(){
//     return(
//         <div className="testimonials">
//             <div className="header">
//                 <h1>Testimonials</h1>
//             </div>
            
//             <div className="container">
//                 <div className="row bag">
//                 <Swiper
//       spaceBetween={1}
//       slidesPerView={1}
//     >              <SwiperSlide>
//                     
//                     </SwiperSlide>
//                     <SwiperSlide>
//                     <Card className="testCard"style={{ width: '18rem' }}>
//                         <Card.Body>
//                             <Card.Title>Sanket Patil</Card.Title>
//                             <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//                             <Card.Text>
//                             Some quick example text to build on the card title and make up the
//                             bulk of the card's content.
//                             </Card.Text>
//                             <Card.Link href="#">Card Link</Card.Link>
//                             <Card.Link href="#">Another Link</Card.Link>
//                         </Card.Body>
//                     </Card>    
//                     </SwiperSlide>
//                     <SwiperSlide>
//                     <Card className="testCard"style={{ width: '18rem' }}>
//                         <Card.Body>
//                             <Card.Title>Ganesh Kambale</Card.Title>
//                             <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//                             <Card.Text>
//                             Some quick example text to build on the card title and make up the
//                             bulk of the card's content.
//                             </Card.Text>
//                             <Card.Link href="#">Card Link</Card.Link>
//                             <Card.Link href="#">Another Link</Card.Link>
//                         </Card.Body>
//                     </Card>
//                     </SwiperSlide>
//                     </Swiper>
//                 </div>
//             </div>         
//         </div>
//     )
// }
