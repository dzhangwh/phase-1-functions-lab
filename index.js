
function distanceFromHqInBlocks(blocks) {
return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {  
return Math.abs(distanceFromHqInBlocks(blocks) * 264);
}

function distanceTravelledInFeet(start, destination) {
return Math.abs((start - destination) * 264);
}

const calculatesFarePrice = function(start, destination) {
    let freeSample = start - destination
    if (freeSample === 0) {
        return 'gives customers a free sample'
    }
    
}

calculatesFarePrice()

    

    
    //if ((start - destination) > 2500) {
    //let tooFar = 'cannot travel that far'
   // return tooFar
//}
//else if (())



    







