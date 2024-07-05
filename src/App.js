import {Home} from './Components/Home'
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Layout} from './Components/Layout';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-out' element={<SignUp/>}/>
          </Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
