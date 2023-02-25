import useState from "react";

export const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");
  return (
    <div>
      <input onClick={(event) => setNewUsername(event.target.value)} />
      <button>Change Username</button>
    </div>
  );
};

export default ChangeProfile;
