let isDoorLocked = true;

let isWindowClosed = false;

let isAlaramOn = true;

let isOwnerInside = true;

if(isDoorLocked && isWindowClosed && isAlaramOn && isOwnerInside){
    console.log("Safe");
}
else if(isDoorLocked && !isWindowClosed && !isOwnerInside){
    console.log("Unsafe");
}
else{
    console.log("Unsafe");
}