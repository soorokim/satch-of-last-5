import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Main from './pages/Main/Main';
import SetSatchItem from './pages/SetSatchItem/SetSatchItem';
import SetGoals from './pages/SetGoals/SetGoals';

function App() {
  return (
    <Layout>
      <div>
        <Routes>
          <Route path="/setsatchitem" element={<SetSatchItem />} />
          <Route path="/setgoals" element={<SetGoals />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
