function sicheng_getDirection(grid,snake,apple,direction){
    if (direction == "l") {
        return "d";
    }else if (direction == "d") {
        return "r";
    }else if (direction == "r") {
        return "u";
    }else if (direction == "u") {
        return "l";
    }
}

ais['sicheng'] = sicheng_getDirection;