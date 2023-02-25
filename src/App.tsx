import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main/Main';


function App() {

  return (
    <Layout>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
