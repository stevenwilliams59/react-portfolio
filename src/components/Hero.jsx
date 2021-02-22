import React from 'react';
import styled from 'styled-components';
import hero from '../images/hero.jpg';

const Layout = styled.section`
  min-height: ${(props) => props.theme.sectionHeight};
  color: ${(props) => props.theme.colours.backgroundLight};
  background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
    url(${hero});
  background-size: cover;
  padding-top: 35vh;
  padding-left: 25%;
`;
const TagLine = styled.p`
  padding-top: 20px;
  font-size: 30px;
`;
const Title = styled.h1`
  font-size: 70px;
`;

export default function Hero() {
  return (
    <Layout>
      <Title>Steven Williams</Title>
      <TagLine>Full Stack Web Developer.</TagLine>
    </Layout>
  );
}
