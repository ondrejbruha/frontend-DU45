function makeFilter(data, kmRange, priceRange, makeList, modelList, fuelList){
    let newData = [];
    for(let d of data){
        if((d.km < kmRange.max || d.km > kmRange.min) && (d.price < priceRange.max || d.price > priceRange.min)){
            if(makeList.includes(d.make) && modelList.includes(d.model) && fuelList.includes(d.fuel)){
                newData.push(d);
            }
        }
    }
    return newData;
}
export default makeFilter;