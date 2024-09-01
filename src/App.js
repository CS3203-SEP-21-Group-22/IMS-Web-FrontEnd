import { Home } from './Components/Home';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Components/Layout';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import { UserProfile } from './Components/Pages/UserProfile';
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
import { StaffRequest } from './Components/Pages/AcaStaff/StaffRequest';
import  TechAssign  from './Components/Pages/TechAssign';
import {UserProfiles} from './Components/Pages/UserProfileView';
import {ViewLabs} from './Components/Pages/ViewLabs';
import SendRequest from './Components/Pages/SendRequest';
import Testpage from './Components/Pages/Testpage';

function App() {
  return (
    <div className="App">
      <Routes>
        
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/sign-out' element={<SignUp/>}/>
            <Route path='/student' element={<StudentDashboard/>}/>
            <Route path='/student-select' element={<StudentSelect/>}/>
            <Route path='/assign-technicians' element={<TechAssign/>}/>
            <Route path='/labTechnician' element={<LabTechDash/>}/>
            <Route path='/user' element={<UserProfile/>}/>
            <Route path='/staff' element={<StaffDashboard/>}/>
            <Route path='/admin' element={<AdminDashboard/>}/>
            <Route path='/officeclerk' element={<OfficeClerkDashboard/>}/>
            <Route path='/aprove-list-request' element={<AproveLisTRequest/>}/>
            <Route path='/staff-profile' element={<StaffProfile/>}/>
            <Route path='/admin-profile' element={<AdminProfile/>}/>
            <Route path='/officeclerk-profile' element={<OfficeClerkProfile/>}/>
            <Route path='/staff-request' element={<StaffRequest/>}/>
            <Route path='/user-profiles' element={<UserProfiles/>}/>
            <Route path='/view-labs' element={<ViewLabs/>}/>
            <Route path='/request' element={<SendRequest/>}/>
            <Route path='/test' element={<Testpage/>}/>

          </Route>
          
        </Routes>
    </div>
  );
}

export default App;
