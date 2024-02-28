
const pi = 3.14159;
 let radius;
 radius = Number(radius);

 let circumference;

document.getElementById("button").onclick = function(){
    radius = document.getElementById("input").value;
    circumference = 2*pi*radius;
    console.log(circumference);

    document.getElementById("result").textContent = "Area of Circumference  "+ circumference + "cm";
}