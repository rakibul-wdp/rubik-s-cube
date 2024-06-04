import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://rubik-s-cube-api.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  return (
    <div>
      <div className="flex justify-between mb-7">
        <h1 className="text-3xl ">Profile Information</h1>
        <Link
          to={`/dashboard/profile/edit/${userInfo?._id}`}
          className="btn btn-neutral btn-md"
        >
          Edit Profile
        </Link>
      </div>
      <div>
        <h1>{userInfo?.name}</h1>
        <h1>{userInfo?.email}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
