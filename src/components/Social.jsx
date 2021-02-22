import React from 'react';
import { ExternalLink } from 'react-external-link';
import styled from 'styled-components';

const SocialLink = styled.div`
list-style: none;
    font-size: 60px;
    margin: 0 auto 20px;
    margin-top: 20px;
      max-width: 400px;
      min-height: 5vh;
  color: ${(props) => props.theme.colours.backgroundDark};
  display: flex;
  justify-content: space-around;
    `
    const Text = styled.p`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    font-size: 25px;

    `


export default function Social() {
  return (
    <>
<Text>Email: stevenwilliams5959@outlook.com</Text>
          <SocialLink>

          <ExternalLink
            href="https://github.com/stevenwilliams59?tab=repositories"
            target="_blank"
          >
            <i className="devicon-github-original-wordmark colored"></i>
          </ExternalLink>
          <ExternalLink
            href="https://www.linkedin.com/in/steven-williams-541855187"
            target="_blank"
          >
            <i className="devicon-linkedin-plain colored"></i>
          </ExternalLink>
          </SocialLink>

          </>
  );
}
