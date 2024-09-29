import { useLocation, useSearchParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Profile() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id_token = queryParams.get("id_token");
  const access_token = queryParams.get("access_token");
  const refresh_token = queryParams.get("refresh_token");
  const userDecoded = jwtDecode(id_token);
  return (
    <div className="Profile">
      <h3>user email: {userDecoded.email}</h3>
      <h3>
        user full name: {userDecoded.firstName} {userDecoded.lastName}
      </h3>
      <h3>user contact number: {userDecoded.contactNumber}</h3>
      <h5>ID TOKEN : {id_token}</h5>
      <h5>ACCESS TOKEN : {access_token}</h5>
      <h5>REFRESH TOKEN : {refresh_token}</h5>
      <h5>USER ROLE : {userDecoded.role}</h5>
    </div>
  );
}

export default Profile;
