

function g(start, end) {
    for (i = start; i <= end; i++)
    {
        console.log(i)
        
    }
}
g(10, 20);

function numbers(...numbers) {
    for (let m = 0; m < numbers.length; m++)
    {
        console.log(numbers[m])

    }
}
numbers(10, 15, 12, 19, 55, 96);
function showinfo(username = "unknown", age = "unknown", rate = 0, show = "yes", ...skils) {
    document.write(`<div>`);
    document.write(`<p> welcome, ${ username} </p>`);
    document.write(` <p> age is ,${age} </p>  `);
    
    document.write(`<p> hour rate ,${rate} </p> `);

    document.write(`</div>`);
    if (show === "yes")
    {
        console.log("show skils");
       
    }
    else {
            console.log(" dont show skils");

        }

}
showinfo("ibrahim", 23, 15, "n", "html");


//  anonymous function
     
     
let calc = function (num1, num2) {
    return num1+num2;
}
console.log(calc(10, 20));

document.getElementById("show").onclick  = function osama() {
    console.log("show");

}
setTimeout(function() {
    console.log("good") ;
}, 20);