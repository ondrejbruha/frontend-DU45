import {useState} from "react";
function Modal(props){
    const [price, setPrice] = useState({
        min: 0,
        max: 1000000
    });
    const [km, setKm] = useState({
        min: 0,
        max: 1000000
    });
    let setRanges = ()=>{
        setPrice({
            min: document.getElementById("minPrice").value ? document.getElementById("minPrice").value : 0,
            max: document.getElementById("maxPrice").value ? document.getElementById("maxPrice").value : 1000000,
        });
        setKm({
            min: document.getElementById("minKm").value ? document.getElementById("minKm").value : 0,
            max: document.getElementById("maxKm").value ? document.getElementById("maxKm").value: 1000000,
        });
        props.handleKm(km);
        props.handlePrice(price);
    };
    let setOptions = (opt)=>{
        let output = [];
        for(let o of opt){
            output.push(o.value);
        }
        return output;
    };
    let map = props.map;
    let make = [];
    for(let e of map.make) {
        make.push(
            <option value={e}>{e}</option>
        );
    }
    let fuel = [];
    for(let e of map.fuel) {
        fuel.push(
            <option value={e}>{e}</option>
        );
    }
    let model = [];
    for(let e of map.model) {
        model.push(
            <option value={e}>{e}</option>
        );
    }
    return(
        <div className={"modal"}>
            <button onClick={()=>{props.handleOpen(false)}}>Close</button>
            <button onClick={()=>{props.handleReset()}}>Reset</button>
            <button onClick={()=>{setRanges()}}>Confirm ranges</button>
            <select multiple onChange={(e)=>{props.handleMake(setOptions(e.target.selectedOptions))}}>
                {make}
            </select>
            <select multiple onChange={(e)=>{props.handleFuel(setOptions(e.target.selectedOptions))}}>
                {fuel}
            </select>
            <select multiple onChange={(e)=>{props.handleModel(setOptions(e.target.selectedOptions))}}>
                {model}
            </select>
            <lable>Min Price</lable><input id={"minPrice"} type={"number"}/>
            <lable>Max Price</lable><input id={"maxPrice"} type={"number"}/>
            <lable>Min KM</lable><input id={"minKm"} type={"number"}/>
            <lable>Max KM</lable><input id={"maxKm"} type={"number"}/>
        </div>
    );
}
export default Modal;