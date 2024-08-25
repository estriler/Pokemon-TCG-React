import coinFlip from "./CoinFlip";

export default function ifHeadsSelfDmg(dmg){
    let selfHarm = 0;
    if(coinFlip === "tails"){
        selfHarm = dmg;
    }
    return selfHarm;
}