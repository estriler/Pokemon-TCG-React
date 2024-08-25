export default function coinFlip(){
    let result = Math.floor(Math.random()*2)
    if(result===0){
        return "tails"
    }else{
        return "heads"
    }
}