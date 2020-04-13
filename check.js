// import Swal from 'sweetallert'


var  century , year , month, day,gender;
var week = ['Sunday','Monday',"Tuseday",'Wednesday','Thursday','Friday',];
var maleName=['kwasi','Kwadwo','Kwabena','Kawaku','Yaw',"kofi",'Kwame'];
var femaleName= ['Akosua','Adwoa','Abenaa','Akua','yaa','Afua','Ama'];

function getdata(){
    this.century = document.getElementById("century").value ;
    this.year =document.getElementById("year").value;
    this.month = document.getElementById("month").value;
    this.day = document.getElementById("day").value;
    this.gender = document.getElementById("gender").value;
    this.validateData();
}
function validateData(){
    if (this.month <= 0  || this.month > 12) {
        alert("Invalid Month");
        return;
    }
    if(this.day <= 0 || this.day  > 31){
        alert("Invalid Day");
        return;
    }
    this.finalResult();
}
function finalResult(){
    var result = parseInt(this.calculateAkaName());
    if(this.gender == 0){
        alert("Your akaname is" + this.maleName[result] + ", and you are born in"   +  this.week[result]);
    
    }
    else{
        alert("your akaname is" + this.femaleName[result] + " , And you are born in" + this.week[result]);
    }
}
function calculateAkaName(){
    return (((this.century / 4) - 2 * this.century - 1) + ((5 * this.year / 4)) + ((26 * (this.month + 1) / 10)) + this.day) % 7;
}