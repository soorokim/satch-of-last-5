import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Main from './pages/Main/Main';
import InitialPage from './pages/Initial/InitialPage';
import HistoryPage from './pages/Initial/HistoryPage';

function App() {
  return (
    <Layout>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/initial" element={<InitialPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
