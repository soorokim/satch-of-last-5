import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Main from './pages/Main/Main';
import InitialPage from './pages/Initial/InitialPage';
import HistoryPage from './pages/Initial/HistoryPage';
import SetSatchItem from './pages/SetSatchItem/SetSatchItem';
import SetGoals from './pages/SetGoals/SetGoals';
import CalendarPage from './pages/CalendarPage';
import Developing from './pages/Developing/Developing';
import Oauth from './pages/Oauth/Oauth';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/developing" element={<Developing />} />
        <Route path="/setsatchitem" element={<SetSatchItem />} />
        <Route path="/setgoals" element={<SetGoals />} />
        <Route path="/" element={<Main />} />
        <Route path="/oauth" element={<Oauth />} />
        <Route path="/initial" element={<InitialPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
