var screen = document.querySelector("#screen");
var numbersButton = document.querySelectorAll(".numbers");
var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var times = document.querySelector("#times");
var divide = document.querySelector("#divide");
var equal = document.querySelector("#equal");
var sign = document.querySelector("#sign");
var percent = document.querySelector("#percent");
var clear = document.querySelector("#clear");
var dot = document.querySelector("#dot");

var numbersOrder = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

var firstNum = 0;
var secondNum = 0;
var whichNum = 1;
var result = 0;
var signal = "";
var afterEqual = false;
var clickDot = false;

for(var i = 0; i < numbersButton.length; i++) {
    numbersButton[i].addEventListener("click", function() {
        var num = Number(this.textContent);
        if(whichNum === 1) {
            if(afterEqual) {
                firstNum = 0;
                afterEqual = false;
            }

            //判斷是否是小數
            if(screen.textContent.indexOf(".") !== -1) {
                //判斷小數幾位
                var Decimal = screen.textContent.split(".")[1].length;

                if(firstNum >= 0)
                    firstNum = firstNum + num * Math.pow(0.1, Decimal + 1);
                else
                    firstNum = firstNum - num * Math.pow(0.1, Decimal + 1);
                screen.textContent = firstNum; 

            }else {
                if(firstNum >= 0)
                    firstNum = firstNum * 10 + num;
                else
                    firstNum = firstNum * 10 - num;
                screen.textContent = firstNum; 
            }
            
        }else {

            if(screen.textContent.indexOf(".") !== -1) {
                //判斷小數幾位
                var Decimal = screen.textContent.split(".")[1].length;

                if(secondNum >= 0)
                    secondNum = secondNum + num * Math.pow(0.1, Decimal + 1);
                else
                    secondNum = secondNum - num * Math.pow(0.1, Decimal + 1);
                screen.textContent = secondNum; 
            }else {
                if(secondNum >= 0)
                    secondNum = secondNum * 10 + num;
                else    
                    secondNum = secondNum * 10 - num;
                screen.textContent = secondNum;  
            }
            
        }
    });
}





clear.addEventListener("click", function() {
    firstNum = 0;
    secondNum = 0;
    result = 0;
    whichNum = 1;
    screen.textContent = 0; 
});

plus.addEventListener("click", function() {
    secondNum = 0;
    signal = "plus";
    whichNum = 2;
    screen.textContent = "+"; 
});

minus.addEventListener("click", function() {
    secondNum = 0;
    signal = "minus";
    whichNum = 2;
    screen.textContent = "-"; 
});

times.addEventListener("click", function() {
    secondNum = 0;
    signal = "times";
    whichNum = 2;
    screen.textContent = "x"; 
});

divide.addEventListener("click", function() {
    secondNum = 0;
    signal = "divide";
    whichNum = 2;
    screen.textContent = "/"; 
});

equal.addEventListener("click", function() {
    if(signal === "plus") {
        result = firstNum + secondNum;
        firstNum = result;
    }else if(signal === "minus") {
        result = firstNum - secondNum;
        firstNum = result;
    }else if(signal === "times") {
        result = firstNum * secondNum;
        firstNum = result;
    }else if(signal === "divide") {
        result = firstNum / secondNum;
        firstNum = result;
    }
    whichNum = 1;
    afterEqual = true;
    screen.textContent = result;
});

sign.addEventListener("click", function() {
    if(whichNum === 1) {
        firstNum = -firstNum;
        screen.textContent = firstNum;
    }else {
        secondNum = -secondNum;
        screen.textContent = secondNum;
    }
});

percent.addEventListener("click", function() {
    if(whichNum === 1) {
        firstNum = firstNum / 100;
        screen.textContent = firstNum;
    }else {
        secondNum = secondNum / 100;
        screen.textContent = secondNum;
    }
});

dot.addEventListener("click", function() {
    if(screen.textContent.indexOf(".") === -1){
        if(whichNum === 1) {
            screen.textContent = firstNum + ".";
        }else {
            screen.textContent = secondNum + ".";
        }
    }
    
    clickDot = true;
});