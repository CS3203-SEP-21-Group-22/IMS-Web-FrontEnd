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
import  OfficeClerkDashboard  from './Components/Pages/OfficeClerk/OfficeClerkDashboard';
import {LabTechDash} from './Components/Pages/LabTechDash';
import AproveLisTRequest from './Components/AproveLisTRequest';
import { StaffProfile } from './Components/Pages/AcaStaff/StaffProfile';
import { AdminProfile } from './Components/Pages/Admin/AdminProfile';
import { OfficeClerkProfile } from './Components/Pages/OfficeClerk/OfficeClerkProfile';

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
            <Route path='/officeclerk' element={<OfficeClerkDashboard/>}/>
            <Route path='/aprove-list-request' element={<AproveLisTRequest/>}/>
            <Route path='/staff-profile' element={<StaffProfile/>}/>
            <Route path='/admin-profile' element={<AdminProfile/>}/>
            <Route path='/officeclerk-profile' element={<OfficeClerkProfile/>}/>
          </Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
