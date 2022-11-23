import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics'
import user from "../data/user";
import data from "../data/data";

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={data} title="Upload stats"/>
    </>
  );
};
