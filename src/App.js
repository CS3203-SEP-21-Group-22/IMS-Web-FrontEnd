import {Home} from './Components/Home'
import './index.css';
import {Routes,Route} from 'react-router-dom';
import {Layout} from './Components/Layout';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import {UserProfile} from './Components/Pages/UserProfile';
import StudentDashboard from './Components/Pages/StudentDashboard';
import { StudentSelect } from './Components/Pages/StudentSelect';
import StaffDashboard  from './Components/Pages/AcaStaff/StaffDash';
import AdminDashboard from './Components/Pages/Admin/AdminDash';

import {LabTechDash} from './Components/Pages/LabTechDash';

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
            <Route path='/labTechnician' element={<LabTechDash/>}/>
            <Route path='/user' element={<UserProfile/>}/>
            <Route path='/staff' element={<StaffDashboard/>}/>
            <Route path='/admin' element={<AdminDashboard/>}/>
          </Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
