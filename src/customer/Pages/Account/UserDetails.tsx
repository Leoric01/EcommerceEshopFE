import ProfileFieldCard from "../../../Component/ProfileFieldCard";
import Divider from "@mui/material/Divider";
import { userApi } from "../../../State/interceptors/userApi";
import { useEffect, useState } from "react";

const UserDetails = () => {
  const [userProfile, setUserProfile] = useState<any>(null);
  const fetchUserProfile = async () => {
    try {
      const response = await userApi.getUserProfile();
      const profile = response?.data?.data || [];
      setUserProfile(profile);
      console.log("User profile fetched successfully:", profile);
    } catch (err) {
      console.error("Failed to fetch user profile:", err);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
        </div>
        <div className="">
          <ProfileFieldCard keys="Name" value={userProfile?.name || "N/A"} />
          <Divider />
          <ProfileFieldCard keys="Email" value={userProfile?.email || "N/A"} />
          <Divider />
          <ProfileFieldCard
            keys="Mobile"
            value={userProfile?.addresses?.mobile || "N/A"}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
