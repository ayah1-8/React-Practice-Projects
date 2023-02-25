import { ChangeProfile2 } from "./Change.js";
import { AppContext } from "../App";
import { useContext } from "react";

export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      Profile!!!! for user {username}
      <ChangeProfile2 />
    </div>
  );
};
