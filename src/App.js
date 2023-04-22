import './App.css';

import Home from './Home';
import Results from './Ruslts';
import { BrowserRouter as Router, Route,Routes  } from "react-router-dom";
function App() {
  return (
     <Router>
   <div className='div'>
   <Routes >
     <Route path='/' element={<Home/>}/>
     <Route path='/Search/:query' element={<Results/>}/>
  </Routes>
   </div>
     </Router>
  );
}

export default App;
