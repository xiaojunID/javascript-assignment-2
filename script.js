// Select all HTML elements with a class of "box".
var boxes = document.querySelectorAll(".box");

// Variable to hold the current left margin.
var ChangeMargin = [0, 0, 0, 0, 0];

//variable for each box
var moveAmountArray = [5, 10, 15, 20, 25];
var color = ["yellow", "green", "purple", "orange", "pink","black","brown","blue"];
var min = [200,300,400,500,600,700,800]
var max = [301,401,501,601,701,801,901]

function boxClicked(index) {
    return function () {
        console.log("Hey, box " + index + " clicked!");
        console.log("my name is " + boxes[index].className);
        //change the css style for the box
        if(boxes[index].className == "box"){
            boxes[index].className = "clicked";
        }else{
            boxes[index].className = "box";
        }
        
        //put background color
        boxes[index].style.backgroundColor = color[color.length-1];
        for(var i=0; i < min.length; i++){
            if(index > min[i] && index < max[i]){
                boxes[index].style.backgroundColor = color[i];
                break;
            }
        }
        console.log("color is " + color[i]);
    };
}

function init() {
    for (var i = 0; i < boxes.length; i++) {
        //register click event to each box
        boxes[i].addEventListener("click", boxClicked(i));
    }
}

//start
init();
