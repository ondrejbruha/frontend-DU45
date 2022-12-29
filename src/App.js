import './App.css';
import data from "./data/data"
import {useContext, useState} from "react";
import makeMap from "./data/makeMap";
import makeFilter from "./data/makeFilter";
import Modal from "./components/modal";
import {themes, ThemeContext} from "./data/theme";

function App() {

    const [theme, setTheme] = useState(themes.light);
    const value = {theme, setTheme};
    const ChangeTheme = () => {
        const {theme, setTheme} = useContext(ThemeContext);
        return (
            <div>
                <button onClick={() => {
                    setTheme(themes.dark);
                    document.body.style.backgroundColor = theme.backgroundColor;
                    document.body.style.color = theme.color;
                    console.log(theme);
                }}>Dark Theme
                </button>
                <button onClick={() => {
                    setTheme(themes.light);
                    document.body.style.backgroundColor = theme.backgroundColor;
                    document.body.style.color = theme.color;
                    console.log(theme);
                }}>Light
                </button>
            </div>
        );
    };
    let map = makeMap(data);
    const [open, setOpen] = useState(false);
    const [make, setMake] = useState(map.make);
    const [model, setModel] = useState(map.model);
    const [fuel, setFuel] = useState(map.fuel);
    const [kmRange, setKmRange] = useState({min: 0, max: 1000000});
    const [priceRange, setPriceRange] = useState({min: 0, max: 1000000});
    let filteredData = makeFilter(data, kmRange, priceRange, make, model, fuel);
    let reset = () => {
        setMake(map.make);
        setModel(map.model);
        setFuel(map.fuel);
        setKmRange({min: 0, max: 1000000});
        setPriceRange({min: 0, max: 1000000});
    };
    let table = [];
    for (let d of filteredData) {
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
        <ThemeContext.Provider value={value}>
            <div className="App">
                <ChangeTheme/>
                <button onClick={() => {
                    setOpen(true)
                }}>Open settings
                </button>
                {open ? <Modal map={map} handleOpen={setOpen} handleMake={setMake} handleModel={setModel}
                               handleFuel={setFuel} handleKm={setKmRange} handlePrice={setPriceRange}
                               handleReset={reset}/> : <></>}
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
        </ThemeContext.Provider>
    );
}

export default App;
