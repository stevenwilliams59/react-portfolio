import React from 'react';
import ncNews from '../images/nc-news.png';
import ncNewsFront from '../images/nc-news-front.jpg';
import styled from 'styled-components';
import Project from './Project';

const Layout = styled.section`
  min-height: ${(props) => props.theme.sectionHeight};
`;
const ProjectsLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
`;
const Heading = styled.h2`
  font-size: 40px;
  margin-bottom: 30px;
  padding: 20px;
`;

const projects = [
  {
    title: 'Northcoders News API',
    githubLink: 'https://github.com/stevenwilliams59/be-nc-news',
    technologies: ['PostgreSQL', 'Knex', 'Express'],
    projectLink: 'https://northcoders--news--project.herokuapp.com/api',
    projectImage: ncNews,
    altTag: 'API documentation'
  },
  {
    title: 'Northcoders News',
    githubLink: 'https://github.com/stevenwilliams59/NC_News',
    technologies: ['React'],
    projectLink: 'https://northcoders-news-app.netlify.app/',
    projectImage: ncNewsFront,
    altTag: 'NCnews site'
  }
];
export default function Projects() {
  return (
    <Layout id="projects">
      <Heading>Projects</Heading>
      <ProjectsLayout>
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </ProjectsLayout>
    </Layout>
  );
}
