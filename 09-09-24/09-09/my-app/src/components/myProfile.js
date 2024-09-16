import React from "react";
import "./myProfile.css";

const MyProfile = ({ name, hobbies }) => {
  return (
    <div className="profile-container">
      <h1>{name}</h1>

      <h2>Minu hobid:</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      <h2>Kontaktivorm</h2>
      <form>
        <label>
          E-mail:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Sõnum:
          <textarea name="message" />
        </label>
        <br />
        <button type="button">Edasta</button>
      </form>
    </div>
  );
};

export default MyProfile;