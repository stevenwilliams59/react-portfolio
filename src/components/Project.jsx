import React from 'react';
import { ExternalLink } from 'react-external-link';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 40%;
  background-color: ${(props) => props.theme.colours.backgroundDark};
  color: ${(props) => props.theme.colours.backgroundLight};
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 20px;
`;
const ProjectImageWrapper = styled.div`
  max-height: 400px;
  overflow: hidden;
`;
const ProjectImage = styled.img`
  width: 80%;
  height: auto;
  max-width: 400px;
  margin: 0 auto;
  display: block;
`;

const SocialImage = styled.i`
  color: white;
  font-size: 50px;
  &:hover {
    color: ${(props) => props.theme.colours.primaryLight};
  }
`;

const AccessibilityHiddenText = styled.span`
  position: absolute;
  top: -9999px;
  left: -9999px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ListStyle = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;
const ProjectHeading = styled.h3`
  font-size: 25px;
`;
const TechUsed = styled.h4`
  margin-bottom: 20px;
`;

export default function Project(props) {
  return (
    <Layout>
      <Header>
        <ProjectHeading>{props.project.title}</ProjectHeading>
        <ExternalLink
          style={{ textDecoration: 'none' }}
          href={props.project.githubLink}
          target="_blank"
        >
          <SocialImage className="devicon-github-original">
            <AccessibilityHiddenText>
              {props.project.title} GitHub Repo
            </AccessibilityHiddenText>
          </SocialImage>
        </ExternalLink>
      </Header>
      <TechUsed>Technologies</TechUsed>
      <ul>
        {props.project.technologies.map((item) => {
          return <ListStyle key={item}>{item}</ListStyle>;
        })}
      </ul>
      <ExternalLink href={props.project.projectLink} target="_blank">
        <AccessibilityHiddenText>{props.project.title}</AccessibilityHiddenText>
        <ProjectImageWrapper>
          <ProjectImage
            src={props.project.projectImage}
            alt={props.project.altTag}
          />
        </ProjectImageWrapper>
      </ExternalLink>
    </Layout>
  );
}
