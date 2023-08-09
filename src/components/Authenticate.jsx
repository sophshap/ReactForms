import { useState } from "react";

export default function Authenticate({ token, setToken }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
      // setUserData(result.data.username);
      // console.log(result.data.username);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div>
        <h2>Authenticate!</h2>
        {successMessage && <p>{successMessage}</p>}
        {userData && <p>{userData}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token</button>
      </div>
    </>
  );
}
