import React from "react"; 

const foot = {
    backgroundColor: "blue",
    color: "white"
};
function add(num1,num2){
    let sum = num1+num2;
    return sum
}
function sub(num1,num2){
    let minus = num1 - num2;
    return minus
}
function multi(num1,num2){
    let mul = num1*num2;
    return mul
}
function div(num1,num2){
    let divide = num1/num2;
    return divide
}
function Footer(){
    return <p style={foot}>created by @poojarinikhil</p>
}
export {add,Footer,div,multi,sub};