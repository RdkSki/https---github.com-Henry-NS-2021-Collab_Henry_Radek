/*function timeConverter(min){
let hh = Math.floor(min/60);
let mm = min - (hh*60);
return `${min} minutes = ${hh}  hour(s) and ${mm} minute(s).`;
}

console.log(timeConverter(560)); 
*/

//var x = prompt("are you ready?");   pop up window for var x !
// console.log(functionName(insert arguments for parameters here));


/*  const x = () => {

}; */

const timeCon = min => {
    let hh = Math.floor(min/60);
    let mm = min - (hh*60);
    return `${min} minutes = ${hh}  hour(s) and ${mm} minute(s).`
    };
console.log(timeCon(2890));
   