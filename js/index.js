//let bj = document.getElementById('main')
//main.style.background='blue'

function calculate(){
    let weight, height, result;
    height= document.getElementById("height").value;
    weight= document.getElementById("weight").value;
    bmi= document.getElementById("result")
    result= weight/((height/100)**2);
    bmi.value= result.toFixed(4);
    console.log(weight)

    if (bmi.value >10  && bmi.value <15) {
        document.querySelector(".message").value = "be careful";
        document.querySelector(".message").style.backgroundColor ="red"
        document.querySelector(".message").style.color="white"
    }
    else if(bmi.value <10 ){
        document.querySelector(".message").value = "you are healthy";
        document.querySelector(".message").style.backgroundColor ="purple"
        document.querySelector(".message").style.color="aqua"



    }
    else {
        document.querySelector(".message").value = "You are sick";
        document.querySelector(".message").style.backgroundColor ="blue"
    }



}


//let radius = document.getElementById("pep");
//console.log(radius)


//function calculate(){
   // let ps, area;
   // let rad=radius.value
    //console.log (radius)
    //ps = document.getElementById('pro')
    //area= Math.PI*radius **2
    //area=3.142*rad *rad
    //ps.value=area
   
    
    //console.log(area)
//}
