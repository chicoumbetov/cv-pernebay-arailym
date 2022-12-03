import Typical from "react-typical";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/arailympernebay/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://www.instagram.com/arailymbkz/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Arailym</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="highlighted-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Economist 💶",
                    1000,
                    "Marketing 📈",
                    1000,
                    "Business 💻",
                    1000,
                    "Developer 👩🏻‍🏫",
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Optimizing marketing, social media of your applications
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="Arailym_Pernebay__CV.pdf" download="Arailym_Pernebay__CV">
              <button className="btn highlighted-btn">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
