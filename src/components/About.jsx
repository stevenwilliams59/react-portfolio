import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from 'react-external-link';

const Layout = styled.section`
  min-height: 100vh;
  background: ${(props) => props.theme.colours.secondaryDark};
  color: ${(props) => props.theme.colours.backgroundLight};
`;

const Heading = styled.h2`
  font-size: 40px;
  margin-bottom: 30px;
  padding: 20px;
`;

const TextContainer = styled.div`
  background-color: ${(props) => props.theme.colours.backgroundLight};
  color: ${(props) => props.theme.colours.backgroundDark};
  padding: 40px;
  border-radius: 20px;
  margin: 0 auto 20px;
  max-width: 600px;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
`;



export default function About() {
  return (
    <Layout id="about">
      <Heading>About Me</Heading>
      <TextContainer>
        <h3>Motivation</h3>
        <Paragraph>
          I'm Steven Williams; a current student at Northcoders undergoing their
          developer pathway. Having spent 12 years working in the print industry
          I had achieved all the goals I set out to and felt ready for a new
          challenge. I decided to leave the industry and began working as a
          police constable, whilst in my spare time I began learning to code via
          the freecodecamp platform. I found that I really enjoyed writing code
          and although the idea of this becoming a career seemed a long way off
          I decided to carry on learning with that being my end goal.
        </Paragraph>
        <h3>Pre-Northcoders</h3>
        <Paragraph>
          I left the police force and went back into print to allow myself more
          time to study towards my goal of becoming a software developer. After
          studying on freecodecamp I decided that the best route into software
          development was a coding bootcamp. I began to research what was out
          there and decided that Northcoders was the best fit for me, so I
          applied for a spot on their developer pathway, passed my entry
          challenge and began the course in November 2020.
        </Paragraph>
        <h3>Interests</h3>
        <Paragraph>
          Currently learning new software development skills is my main interest.
          I've really enjoyed my bootcamp journey so far, I have learned many
          new technologies and find it very rewarding when they click
          and I'm able to build something from scratch. I've particularly
          enjoyed learning Express, Knex and React.
        </Paragraph>

      </TextContainer>
    </Layout>
  );
}
