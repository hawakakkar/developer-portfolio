import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import profileImage from "../assets/profile.jpeg";

function Profile() {
  const { user } = useContext(PortfolioContext);

  if (!user) return <p>Loading profile...</p>;

  return (
    <section className="profile">
      <img src={profileImage} alt={user.name || "Profile"} />

      <div>
        <h2>{user.name}</h2>
        <h3>{user.title}</h3>
        <p>{user.bio}</p>
      </div>
    </section>
  );
}

export default Profile;
