// function getHistory() {
//     return document.getElementById('history-value').innerText;
    
// }


// function printHistory(num) {
//     document.getElementById('history-value').innerText = num;
    


// }

// function getOutput() {
//     return document.getElementById('output-value').innerText;

// }

// function printOutput(num) {
//     if (num === "") {
//         document.getElementById('output-value').innerText = num;
//         // getHistory(num)
//     } else {
//         document.getElementById('output-value').innerText = getFormattedNumber(num);
//     }

// }
// // console.log()
// function getFormattedNumber(num) {
//     var n = Number(num);
//     var value = n.toLocaleString('en');
//     return value;
// }

// // printOutput('357788865567');
// function reverseNumberFormat(num) {
//     return Number(num.replace(/ /g, ''));
// }
// // var name = 'i am raimi'
// // let res = name.match('raimi','michael')
// // console.log(res)
// // alert(reverseNumberFormat(getOutput()))
// var operator = document.getElementsByClassName('operator');

// for (var i = 0; i < operator.length; i++) {
//     operator[i].addEventListener('click', function () {
//         // alert('the operator clicked:'+ this.id);
//         if (this.id == 'clear') {
//             printHistory('');
//             printOutput('');
//         } else if (this.id == "backspace") {
//             var output = reverseNumberFormat(getOutput()).toString();

//             if (output) { //if output has value
//                 output = output.substr(0, output.length - 1);
//                 printOutput(output);
//             }
//         } 
//         else {
//             var output = getOutput();
//             var history = getHistory();
//             if(output !=""){
//                 output = reverseNumberFormat(output);
                
//             }
            
            
//         }
//     })
//     // console.log(arr)

// }

// var number = document.getElementsByClassName('number');
// for (var i = 0; i < number.length; i++) {
//     number[i].addEventListener('click', function () {
//         // alert('the number clicked:'+this.id);\
//         var output = reverseNumberFormat(getOutput());
//         if (output != NaN) { //if output is a number
//             output = output + this.id;
//             console.log(output)
//             printOutput(output);
//         }
//     })


// }
// function gethistory(){
//     return document.getElementById('history-value').innerText;
    
// }
// function printHistory(num){
//     document.getElementById('history-value').innerText = num;
   
// }

// function getOutput(){
//    return document.getElementById('output-value').innerText;
// }
// function  printOutput(num){
//     document.getElementById('output-value').innerText = getFormattedNumber(num);

// }
// function getFormattedNumber(num){
//     var n = number(num);
//     var value = n.toLocaleString('en');
//     return value;
// }
// printOutput('')








//  SECOND TRIAL

//   function getHistory(){
// return document.getElementById('history-value').innerText;

// }

// function printHistory(num) {
//     document.getElementById('history-value').innerText = num;


// }

// function getOutput() {
//     return document.getElementById('output-value').innerText;

// }

// function printOutput(num) {
//     if (num == "") {
//         document.getElementById('output-value').innerText = num;
//     } 
//     else {
//         document.getElementById('output-value').innerText = getFormattedNumber(num);
//     }

// }

// function getFormattedNumber(num) {
//     var n = Number(num);
//     var value = n.toLocaleString('en');
//     return value;
// }

// // printOutput('357788865567');
// function reverseNumberFormat(num) {
//     return Number(num.replace(/,/g, ''));


// }

// // alert(reverseNumberFormat(getOutput()))
// var operator = document.getElementsByClassName('operator');
// for (var i = 0; i < operator.length; i++) {
//     operator[i].addEventListener('click', function () {
//         if (this.id == "clear") {
//             printHistory('');
//             printOutput('');
//         } else if (this.id == "backspace") {
//             var
//                 output = reverseNumberFormat(getOutput()).toString();
//             if (output) { //if output has value
//                 output = output.substr(0, output.length - 1);
//                 printOutput(output);
//             }
//         } 
//         else {
//             var output = getOutput();
//             var history = getHistory();
//             if(output !=""){
//                 output = reverseNumberFormat(output);
              
//                 history = history + output;
//                 if(this.id == "=")
//                 var result = eval(history);
//                 printOutput(result);
//                 printHistory('');
               
//             }
          


//         }
//     })

// }

// var number = document.getElementsByClassName('number');
// for (var i = 0; i < number.length; i++) {
//     number[i].addEventListener('click', function () {

//         var output = reverseNumberFormat(getOutput());
//         if (output != NaN) { //if output is a number
//             output = output + this.id;
//             printOutput(output);
//         }
//     })


// }
function getHistory(){
    return document.getElementById('history-value').innerText;
  
  }
  function printHistory(num){
    document.getElementById('history-value').innerText = num;
  
  }
//   printHistory('9*9+8');
function getOutput(){
    return document.getElementById('output-value').innerText;

}
function printOutput(num){
    if(num = ""){
    document.getElementById('output-value').innerText = num;
} 
else{
    document.getElementById("output-value").innerText = getFormattedNumber(num);
}  
}
function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
printOutput("44444");
