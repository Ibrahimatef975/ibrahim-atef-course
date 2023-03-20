

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
}, 0.2);

let print= function print() {
    return 10;

}
console.log(print());

let prin = (numbe1,numbe2 )=> numbe1+numbe2;

console.log(prin(100, 50));

let y = _ => 1;
console.log(y());
// scope ...global scope
var a = 1;
var b = 2;
function showtext() {
    var a = 10;
    var b = 20;
    console.log(`function global ${a}`)
     
    console.log(`function global ${ b}`)
}

showtext();


// nested fnction
let z = 10;

function parent() {
    let z= 50
    let f=10 ;
    function child() {
        function grand() {
            console.log(z)
        }
        grand();
        console.log(f +z);
    }
    child();
}
parent();
    
// object

let user = {
    nam: "ibrahim",
    age: 23,
    skils: ["html", "css", "js"],
    
   
    sayhello: function () {
        return'hello';
    },
    
}
console.log(user.nam );
console.log(user.age );
console.log(user.sayhello());
console.log(user.skils);
let car = {
    price: 500000,
    model: 2022,
    color:"white",
}
console.log(car.color);
console.log(car.model);
console.log(car.price);



// dot notation
// nested object

let use = new Object({
    omr: 23,
    
    
    
});

let phone=  {
    id: "01589",
    
    addr: {
        egy: "alex",
        usa: "washonton",
        china:"unb"
    }
        
} 
console.log(phone.id);
console.log(phone.addr.egy)
let person = {
    nameperson:"peter"
}
console.log(person.nameperson);
nameperson = "michel"
console.log(nameperson);

// this keyword

let l = this;
console.log(l);


// object with new key word
// this.alert(" hi my baby");
"use strict"; 
let personew = {
    nameofper: "bert",
    
    get() {
        return this.nameofper
    }

}
 console.log(personew.get())
for ( var k=0;k<5;k++)
{
    console.log(k);
}
for ( let k=0;k<5;k++)
{
    console.log(k);
}


// assign object

let a1 = {
    nm1:1
}
let a2 = {
    nm2:2
}
let a3 = {
    nm3:3
}
let a4 = Object.assign(a1, a2, a3);
a4.r = 100; 
a4.nm1=112;  
console.log(a4);

// DOM 
Document 

let head = document.getElementsByClassName('head')[1]; 
head.style.color='red'
console.log(head);

let hea = document.getElementsByTagName('h1')[2];
// let hea = document.queryselctor('h1')[2];
// queryselctor
hea.style.color = 'blue';

let q = document.querySelector('.query');
// class start with dot
q.style.color = 'red';

// id start with #

let body = document.body;
// body.style.background = '#489'


     


let myqueryElment = document.querySelector(" .special");
console.log(myqueryElment);
    
console.log(document.body);
; 

// atribute
 let im=document.getElementById('img');

console.log(im);
console.log(im.hasAttributes());

console.log(im.attributes[0]);
im.setAttribute('alt','ahmed')
// img.removeAttribute('alt')
// img.removeAttribute('img')
// img.removeAttribute('id')

let contain = document.getElementById('container');
// container.outerHTML = '<P> test</P>';

container.innerText = '<P> test</P>'; 
container.style.backgroundColor = '#444'
container.style.borderLeft = '20px solid yellow'
// write to words use camal case such as borderLeft or backgroundColor
// container is id
container.style.color = '#fff'
container.style.padding = '10px';

// container.style.removeProperty('border')
// container.style.removeProperty('background')
// container.style.setProperty('color','red')

// 1 creat elment

// var containerm = document.createElement('div');

// var headm = document.createElement('h5');

// var img = document.createElement('img');
// // 2- adding element
// let content = document.createTextNode('ibrahim atef');
// headm.appendChild(content);

// img.src = 'img/ibrahim.jpg';

// img.style.width='200px'

// // 3 - adding element in wanted place 
// containerm.appendChild(headm);
// containerm.appendChild(img);



// document.body.appendChild(containerm)

// containerm.style.background = '#555';
// containerm.style.color = '#fff';

// containerm.style.padding = '10px'
// containerm.style.fontSize = '20px'
// containerm.style.height = '400px'
// containerm.style.width= '300px'

let containe= document.createElement( 'DIV');
document.body.appendChild( containe);
containe.style.textAlign = 'center';
function element() {
    let card = document.createElement('divm');
let titlecard=document.createElement('h4');
    var age = document.createElement('p');
    var img = document.createElement('img');
    let he = document.createTextNode('ibrahim atef');
    let agecard = document.createTextNode('25');
    img.src = 'img/ibrahim.jpg';
    img.style.width='100%'
    titlecard.appendChild(he);
    age.appendChild(agecard);
    
    card.appendChild(titlecard);
    card.appendChild(age);
    card.appendChild(img);
    containe.appendChild(card)

}


let nam=['ahmed', 'ali', 'sobhy', 'magdy', 'adel'];

containe.style.width = '200px';
containe.style.backgroundColor='#444'
containe.style.color = '#fff';
containe.style.padding = '10px';
containe.style.padding = '10px';
containe.style.margin = '30px';
containe.style.display = 'inline-block';

for (let i = 0; i < 4; i++)
{
    element ();

}
// let btn = document.getElementById('btn');


btn.addEventListener('click', function () {
    btn.style.background = 'orange';
    btn.style.color = 'white';
    document.body.style.background = 'black';
    
     document.body.style.color= 'white'
    
})

show.onmousedown = function () {
    console.log('clicked');
}
// btn.addEventListener('click', function () {
   
    
// })
light.addEventListener('click', function () {
    document.body.style.background = 'white';
     document.body.style.color= 'black'
})

// let dollar=document. getElementById('dollar');

// let pound= document. getElementById('pound');
dollar.onkeyup = function () {
      pound.value = dollar.value *30  ;
} 
pound.onkeyup = function () {
    dollar.value = pound.value /30  ;
} 