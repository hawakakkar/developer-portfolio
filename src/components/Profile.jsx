import profileImage from "../assets/profile.jpeg";

function Profile({ name, title, bio }) {
  return (
    <section className="profile">
      <img src={profileImage} alt={name} />

      <div>
        <h2>{name}</h2>
        <h3>{title}</h3>
        <p>{bio}</p>
      </div>
    </section>
  );
}

export default Profile;
