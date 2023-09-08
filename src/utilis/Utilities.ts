
const setModStats = (arr:any[]) => {
    debugger
    let newData = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 10) {
            newData[i] = 0; 
        }
        if(arr[i] > 10) {
            newData[i] = setPositive(parseInt(arr[i]));
        } else {
            newData[i] = setNegative(parseInt(arr[i]));
        }
    }
    return newData;
}

const setPositive = (value:number) => {
    let countPositive:number = 0;
    for (let i = 0 ; i < value; i ++) {
        if (i >= 10 && i % 2 === 0) {
            countPositive += 1;
        }
    }
    return countPositive;
}

const setNegative = (value:number) => {
    let countNegative:number = -5;
    for (let i = 0 ; i < value; i++) {
        if (i <= 10 && i % 2 === 0) {
            countNegative += 1;
        }
    }
    return countNegative;
}

export default setModStats;