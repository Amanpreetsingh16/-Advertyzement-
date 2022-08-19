import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import User from "./Components/User";

function App() {
  const [users, setUsers] = useState({});
  const [loader, setLoader] = useState(false);
  return (
    <>
      <Navbar setUsers={setUsers} setLoader={setLoader} />
      <User users={users} loader={loader} />
    </>
  );
}

export default App;
