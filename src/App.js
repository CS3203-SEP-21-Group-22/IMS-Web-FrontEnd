import { Home } from './Components/Home';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Components/Layout';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import { UserProfile } from './Components/Pages/UserProfile';
import StudentDashboard from './Components/Pages/Student/StudentDashboard';
import { StudentSelect } from './Components/Pages/Student/StudentSelect';
import StaffDashboard  from './Components/Pages/AcaStaff/StaffDash';
import AdminDashboard from './Components/Pages/Admin/AdminDash';
import  OfficeClerkDashboard  from './Components/Pages/OfficeClerk/OfficeClerkDashboard';

import LabTechDash2 from './Components/Pages/LabTechnician/LabTechDash2';
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
import TechnicianReq from './Components/Pages/LabTechnician/TechnicianReq';
import Profile from './Components/Pages/Profile';
import AuthCallback from './Components/Pages/AuthCallback';
import { SamplePage } from './Components/Pages/SamplePage';
import { ClerkEquipment } from './Components/Pages/OfficeClerk/ClerkEquipment';
import { ViewClerkLabs } from './Components/Pages/OfficeClerk/ViewClerkLabs';
import { ClerkItems } from './Components/Pages/OfficeClerk/ClerkItems';
import ClerkMaintenance from './Components/Pages/OfficeClerk/ClerkMaintenance';
import PendingMaintain from './Components/Pages/OfficeClerk/PendingMaintain';
import OngoingMaintain from './Components/Pages/OfficeClerk/OngoingMaintain';
import CompletedMaintain from './Components/Pages/OfficeClerk/CompletedMaintain';
import StudentEquipment from './Components/Pages/Student/StudentEquipment';
import { Assigned } from './Components/Pages/LabTechnician/Assigned';
import { Completed } from './Components/Pages/LabTechnician/Completed';
import StudentReservations from './Components/Pages/Student/StudentReservations';
import StudentBorrowed from './Components/Pages/Student/StudentBorrowed';
import ClerkReserve from './Components/Pages/OfficeClerk/ClerkReserve';
import ClerkViewReserved from './Components/Pages/OfficeClerk/ClerkViewReserved';
import ClerkRequest from './Components/Pages/OfficeClerk/ClerkRequest';
import AdminAnalytics from './Components/Pages/Admin/AdminAnalytics';

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
          
            <Route path='/labTechnician2' element={<LabTechDash2/>}/>
            <Route path='/user' element={<UserProfile/>}/>
            <Route path='/staff' element={<StaffDashboard/>}/>
            
            <Route path='/officeclerk' element={<OfficeClerkDashboard/>}/>
            <Route path='/aprove-list-request' element={<AproveLisTRequest/>}/>
            <Route path='/staff-profile' element={<StaffProfile/>}/>

            <Route path='/admin' element={<AdminDashboard/>}/>
            <Route path='/admin-profile' element={<AdminProfile/>}/>
            <Route path='/admin-analytics' element={<AdminAnalytics/>}/>

            <Route path='/officeclerk-profile' element={<OfficeClerkProfile/>}/>
            <Route path='/staff-request' element={<StaffRequest/>}/>
            <Route path='/user-profiles' element={<UserProfiles/>}/>
            <Route path='/view-labs' element={<ViewLabs/>}/>
            <Route path='/request' element={<SendRequest/>}/>
            <Route path='/test' element={<Testpage/>}/>
            <Route path='/techreq' element={<TechnicianReq/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/callback' element={<AuthCallback/>}/>
            <Route path='/loading' element={<SamplePage/>}/>
            
            <Route path='/clerk-equipment' element={<ClerkEquipment/>}/>
            <Route path='/clerk-labs' element={<ViewClerkLabs/>}/>
            <Route path='/clerk-items' element={<ClerkItems/>}/>
            <Route path='/clerk-maintenance' element={<PendingMaintain/>}/>
            <Route path='/clerk-maintenance/ongoing' element={<OngoingMaintain/>}/>
            <Route path='/clerk-maintenance/completed' element={<CompletedMaintain/>}/>
            <Route path='/clerk-reserve' element={<ClerkReserve/>}/>
            <Route path='/clerk-reserve-view' element={<ClerkViewReserved/>}/>
            <Route path='/clerk-request' element={<ClerkRequest/>}/>

            <Route path='/student-equipment' element={<StudentEquipment/>}/>
            <Route path='/student-reservation' element={<StudentReservations/>}/>
            <Route path='/student-borrowed' element={<StudentBorrowed/>}/>
            
            <Route path='/tech' element={<Assigned/>}/>
            <Route path='/tech/completed' element={<Completed/>}/>

          </Route>
          
        </Routes>
    </div>
  );
}

export default App;
