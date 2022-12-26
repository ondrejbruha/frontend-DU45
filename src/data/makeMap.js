function makeMap(data){
    let make = new Set();
    let model = new Set();
    let fuel = new Set();
    for(let d of data){
        make.add(d.make);
        model.add(d.model);
        fuel.add(d.fuel);
    }
    let output = {
        make: [...make],
        model: [...model],
        fuel: [...fuel]
    }
    return output;
}
export default makeMap;