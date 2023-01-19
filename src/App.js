import './App.css';
import BarChart from './Components/BarChart';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/data", { method: "GET", redirect: "follow" })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      {/* <h4>Gas Performance</h4> */}
      <BarChart
        // labels={data.length === 0 ? ["pink"] : data[0].labels}
        // data1={data.length === 0 ? [0, 0, 0, 0, 0, 0] : data[0].data[0].values}
        // data2={data.length === 0 ? [0, 0, 0, 0, 0, 0] : data[0].data[1].values}
      />
      </div>
  );
}

export default App;
