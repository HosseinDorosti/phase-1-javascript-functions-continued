// code your solution here

function saturdayFun(fun = 'roller-skate') {
    return (`This Saturday, I want to ${fun}!`);
}

const mondayWork = function (work = 'go to the office') {
    return (`This Monday, I will ${work}.`);
}

const wrapAdjective = function (st = '*') {
    return function (str = 'special') { return (`You are ${st}${str}${st}!`) };
}

