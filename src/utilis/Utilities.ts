
const setModStats = (arr:any[]) => {
    debugger
    let newData = [];
    
    for(let i = 0; i < arr.length; i++) {
        let elePosition:number = `${arr[i]}` ? parseInt(arr[i]) : 0;
        if(elePosition == 10) {
            newData[i] = 0; 
        }
        if(elePosition >= 10) {
            newData[i] = setPositive(elePosition);
        } else  {
            newData[i] = setNegative(elePosition);
        } 
    }
    return newData;
}

const setPositive = (value:number) => {
    let countPositive:number = 0;
    for (let i = 0 ; i < value; i ++) {
        if (i >= 11 && i % 2 === 1) {
            countPositive += 1;
        }
    }
    return countPositive;
}

const setNegative = (value:number) => {
    let countNegative:number = -5;
    for (let i = 0 ; i < value; i++) {
        if (i <= 10 && i % 2 === 1) {
            countNegative += 1;
        }
    }
    return countNegative;
}

export default setModStats;