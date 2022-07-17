import logo from "../logo.svg";
import { useState, useEffect } from "react";
import axios from "axios";
export default function User() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/getuser").then((res) => setData(res.data.message));
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}
