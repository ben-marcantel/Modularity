'use strict'

module.exports = {
    randomInt: (lowerbound,upperbound)=>{
        return (Math.floor(Math.random()*upperbound)+1)*lowerbound;
    }
};