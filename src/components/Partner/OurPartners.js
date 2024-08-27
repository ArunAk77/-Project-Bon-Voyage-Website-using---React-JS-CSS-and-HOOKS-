import React from 'react';
import styled from 'styled-components';
import './OurPartners.css';

const Container = styled.div`
  background-color: white;
  color: black;
  padding:  20px;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  color:black;
`;

const Subheading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const PlaceholderText = styled.p`
  margin-bottom: 30px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap:20px;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

function OurPartners() {
  return (
    <Container id='partners-container'>
      <h1 className='Head'>INDUSTRY</h1>
      <Subheading className='Subbheader'>Our Partners</Subheading>
      <PlaceholderText className='parA' style={{padding:"40px"}}>
      At Travel Partners, we believe that the journey is just as important as the destination. 
          That's why we've teamed up with some of the world's leading travel companies to offer you 
          unparalleled experiences wherever you go. From airlines and hotels to car rentals and tour 
          operators, our partners are carefully selected to ensure that you get the best service, 
          quality, and value.

      </PlaceholderText>
      <LogoContainer>
        <a href='https://www.makemytrip.com/' target='_blank'><Logo src="https://play-lh.googleusercontent.com/FjzfZ1kLKepkyGv0GhutNs1ORxjIRCAlhKGCp1qfeiwKeD29J8K1XeE2v-DYIM814A" alt="General Transport" /></a>
        <a href='https://www.emirates.com/in/english/' target='_blank'><Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/967px-Emirates_logo.svg.png" alt="IDI Software" /></a>
        <a href='https://en.wikipedia.org/wiki/Kingfisher_Airlines' target='_blank'><Logo src="https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2F20160517201806688293_Kingfisher_Airlines_logo_365.gif&h=570&w=855&q=100&v=20170226&c=1" alt="Imogen Cars" /></a>
        <a href='http://www.snjgroup.com/index' target='_blank'><Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbDUOFdlk9hKNIHu78aCf_9s1pOQFPU8ktA&s" alt="Tri-Nex" /></a>
      </LogoContainer>
    </Container>
  );
}

export default OurPartners;