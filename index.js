
function distanceFromHqInBlocks(blocks) {
return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {  
return Math.abs(distanceFromHqInBlocks(blocks) * 264);
}

function distanceTravelledInFeet(start, destination) {
return Math.abs((start - destination) * 264);
}

function calculatesFarePrice(start, destination) {
if ((start - destination) > 2500) {
    return 'cannot travel that far';
}


}
    







