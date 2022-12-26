import './App.css';
import data from "./data/data"
import {useState} from "react";
import makeMap from "./data/makeMap";
import makeFilter from "./data/makeFilter";

function App() {
  let map = makeMap(data);
  const [make, setMake] = useState(map.make);
  const [model, setModel] = useState(map.model);
  const [fuel, setFuel] = useState(map.fuel);
  const [kmRange, setKmRange] = useState({min: 0, max: 1000000});
  const [priceRange, setPriceRange] = useState({min: 0, max: 1000000});
  let filteredData = makeFilter(data, kmRange,priceRange, make, model, fuel);
  let table = [];
  for(let d of filteredData){
    table.push(
        <tr>
          <td>{d.make}</td>
          <td>{d.model}</td>
          <td>{d.fuel}</td>
          <td>{d.price}</td>
          <td>{d.km}</td>
        </tr>
    );
  }

  return (
    <div className="App">
      <table>
          <thead>
          <tr>
              <td>Make</td>
              <td>Model</td>
              <td>Fuel</td>
              <td>Price</td>
              <td>Km</td>
          </tr>
          </thead>
        <tbody>
          {table}
        </tbody>
      </table>
    </div>
  );
}

export default App;
