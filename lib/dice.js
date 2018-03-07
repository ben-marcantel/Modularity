'use strict'

const {randomInt} = require('./math');


module.exports= {
    
    toDiceNotation: ({count,sides})=>{
        return `${count}d${sides}`    
    },

    roll:(dice)=>{
     let [count,sides] = dice.split("d");
       return randomInt(count,sides);
    }
}