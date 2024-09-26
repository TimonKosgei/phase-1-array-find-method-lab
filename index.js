
function superbowlWin(records){
    let won= records.find(obj => obj.result === "W")
    if(won !== undefined){
        return won.year;
    }else{
        return undefined;
    }
}
