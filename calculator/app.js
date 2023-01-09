
function add(){
    var num1 = Number(document.getElementById('input1').value)
    var num2 = Number(document.getElementById('input2').value)
    // console.log(num1+num2)
    document.getElementById("result").innerHTML=
    `<h3>Result: `+String((num1+num2))+`</h3>`
}
function subtract(){
    var num1 = Number(document.getElementById('input1').value)
    var num2 = Number(document.getElementById('input2').value)
    // console.log(num1-num2)
    document.getElementById("result").innerHTML=
    `<h3>Result: `+String((num1-num2))+`</h3>`
}
function multiply(){
    var num1 = Number(document.getElementById('input1').value)
    var num2 = Number(document.getElementById('input2').value)
    // console.log(num1*num2)
    document.getElementById("result").innerHTML=
    `<h3>Result: `+String((num1*num2))+`</h3>`
}
function divide(){
    var num1 = Number(document.getElementById('input1').value)
    var num2 = Number(document.getElementById('input2').value)
    // console.log((num1/num2).toFixed(2))
    document.getElementById("result").innerHTML=
    `<h3>Result: `+String((num1/num2).toFixed(2))+`</h3>`
}