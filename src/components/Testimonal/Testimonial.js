import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import './Testimonial.css'; 

const testimonials = [
  {
    quote: "I'm addicted to the Cleanic!",
    author: "Jane Deirs, AR",
    text: "Our honeymoon was nothing short of magical, thanks to [Bon Voyage]. From the opulent accommodations to the personalized service, every detail was handled with perfection. We couldn’t have asked for a more memorable experience!",
  },
    {
    quote: "My flat looks like a boutique hotel",
    author: "Eric Laguardia, CA",
    text: "If you're looking for adrenaline-pumping adventure and breathtaking landscapes, look no further. [Bon Voyage] curated an exhilarating trip that exceeded all our expectations. Each day was a new adventure, and the guides were top-notch!",
  },
  {
    quote: "Soft perfection",
    author: "Lena Rogel, RI",
    text: "Our family vacation was a hit thanks to [Bon Voyage]. They took care of everything, from kid-friendly activities to comfortable accommodations. We enjoyed quality time together without any stress. Highly recommend!",
  },
  {
    quote: "I'm obsessed",
    author: "Jean McDermott, CT",
    text: "Paradise found! [Bon Voyage] organized a beach getaway that was nothing short of perfect. Crystal-clear waters, luxurious resorts, and exceptional service. It was the ultimate escape from the daily grind.",
  },
];

const TestimonialCard = styled.div`

background-color: rgba(255, 255, 255, 0.70);
  padding: 10px;
  margin: 10px;
  width:540px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #000000;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bolder;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
`;

const StarIcon = styled(FaStar)`
  color: #ffd700;
  margin-right: 5px;
`;

const TestimonialSection = () => {
  return (
    <div className='Testi'>
      <h2 className='test'>Shiny Happy Clients</h2>
      <div className='test1' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {Array(5).fill().map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <h3>"{testimonial.quote}"</h3>
            <p>{testimonial.text}</p>
            <p><strong>{testimonial.author}</strong></p>
          </TestimonialCard>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;
