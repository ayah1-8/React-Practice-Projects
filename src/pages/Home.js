import { AppContext } from "../App";
import { useContext } from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
  const {
    data: catFact,
    isLoading,
    refetch,
  } = useQuery(["catFact"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  const { username } = useContext(AppContext);

  if (isLoading) {
    return <h1>LOOOADINNNGGG......</h1>;
  }
  return (
    <div>
      <h1>this is home page for user named {username} </h1>
      <p>{catFact?.fact}</p>
      <button onClick={refetch}>Get New Fact</button>
    </div>
  );
};
