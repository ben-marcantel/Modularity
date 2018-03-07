'use strict'

module.exports = ()=>{
    let {argv: [,,...args]} = process;
    if (args.length<2){
        args.push(1);
        args.sort();
        return args;
    } else{
        return args;
    }
    
}
