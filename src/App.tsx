import { useState } from 'react';
import styled from 'styled-components';
import reactLogo from './assets/react.svg';
import './App.css';
import Layout from './components/Layout';

const Card = styled.div`
  padding: 2em;
`;

const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  :hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

const ReactLogo = styled(Logo)`
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  :hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
  animation: logo-spin infinite 20s linear;
`;

const ReadTheDocs = styled.p`
  color: #888;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <Logo src="/vite.svg" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <ReactLogo src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Card>
        <button onClick={() => setCount((_count) => _count + 1)} type="button">
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <ReadTheDocs>Click on the Vite and React logos to learn more</ReadTheDocs>
    </Layout>
  );
}

export default App;
