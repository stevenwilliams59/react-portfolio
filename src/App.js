import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Nav from './components/Nav';
import styled, { ThemeProvider } from 'styled-components';
import Social from './components/Social';

const Layout = styled.div``;
const Side = styled.nav`
  width: 16vw;
  position: fixed;
  height: 100vh;
  width: 16vw;
  background-color: ${(props) => props.theme.colours.backgroundDark};
  @media (max-width: 900px) {
    display: none;
  }
`;
const Main = styled.div`
  height: 100vh;
  @media (min-width: 900px) {
    width: 84vw;
    margin-left: 16vw;
  }
`;

function App() {
  const theme = {
    colours: {
      backgroundDark: '#484349',
      backgroundLight: '#F7F0F0',
      primaryLight: '#8AF3FF',
      primaryDark: '#109648',
      secondaryLight: '#8BE8CB',
      secondaryDark: '#888DA7'
    },
    sectionHeight: '90vh'
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Side>
          <Nav />
        </Side>
        <Main>
          <Hero />
          <Projects />
          <About />
          <Social/>
        </Main>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
