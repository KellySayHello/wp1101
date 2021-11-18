let number;

const getNumber =()=>number;
const genNumber =()=>{
    if(!number){
        number=Math.floor(Math.random()*100)+1;
    }
    return number;
};

const reset=()=>{
    number=0;
}

function roughScale(x, base) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0; }
    return parsed;
};

module.exports= {getNumber, genNumber,roughScale,reset}