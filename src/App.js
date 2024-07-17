import {Home} from './Components/Home'
import './index.css';
import {Routes,Route} from 'react-router-dom';
import {Layout} from './Components/Layout';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import StudentDashboard from './Components/Pages/StudentDashboard';
import { StudentSelect } from './Components/Pages/StudentSelect';
import LabTechnicianDashboard from './Components/Pages/LabTechnicianDashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-out' element={<SignUp/>}/>
            <Route path='/student' element={<StudentDashboard/>}/>
            <Route path='/student-select' element={<StudentSelect/>}/>
            <Route path='/labTechnician' element={<LabTechnicianDashboard/>}/>
          </Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
