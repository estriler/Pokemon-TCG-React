export default function HpBackgroundColor(pkmn){
    if(pkmn["types"][0]== "Fire"){
        return "lightsalmon";
    }else if(pkmn["types"][0]=="Lightning"){
        return "lemonchiffon";
    }
}