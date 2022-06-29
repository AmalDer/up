
import './App.css';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Students from './components/Students';
import Groups from './components/Groups';



function App() {
  return (
    <Router>
      <div className="App">
        { <h1>Gestion de groupes d'élèves</h1> }
        <HomePage/>
        <Routes>
          <Route path='/student' element={<Students/>} />
          <Route path='/group' element={<Groups/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
