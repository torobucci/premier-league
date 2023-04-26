import { Route, Routes } from 'react-router';
import LayOut from './components/view/LayOut';
import Home from './components/routes/Home';
import Details from './components/routes/Details';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="/team/:teamName" element={<Details />} />
      </Route>

    </Routes>
  );
}

export default App;
