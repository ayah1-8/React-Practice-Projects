import { AppContext } from "../App";
import { useContext } from "react";

export const Home = () => {
  const { username } = useContext(AppContext);
  return <h1>this is home page for user named {username}</h1>;
};
