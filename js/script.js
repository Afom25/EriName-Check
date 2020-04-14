$(document).ready(function(){
    // $("#guy-image").click(function(){
    //     $("#boy-head").show();
    //     $("#guy-image").hide();


       
    })



var century, month , year,day,gender,firstName,lastName

var week = ['ዓርቢ','ሓሙስ','ሰንበት','ሰኑይ','ረቡዕ','ሰሉስ','ቀዳም'];
var guyName = ['ንፉዕ','በሊሕ','ሕጉስ','ኣንበሳ','ፈቃር','ጻዕራም','ዓቃል'];
var ladyName = ['ለዋህ','ጽብቅቲ','ትሕቲ','ጅግና','ሕጉስቲ','ፈቃር','ዓቃል'];

function getdata(){
    this.firstName = document.getElementById("firstName").value;
    this.lastName = document.getElementById("lastName").value;
    this.century = document.getElementById("century").value;
    this.month = document.getElementById("month").value;
    this.year=document.getElementById('year').value;
    this.day=document.getElementById("day").value;
    this.validateData();
}
function validateData(){
    if(this.month <= 0 || this.month > 12){
        alert("Invalid Month");
        return;
    }
    if(this.day <=0 || this.day > 31){
        alert("Invalid Day");
        return;
    }
    this.finalResult();
}
function finalResult(){
    var result = parseInt(calculateEriName());
    if (gender == 0){
        alert(   "ሽም ብመንጽር ጠባይ " + "..." + this.guyName[result] + "....  ዘተወደሉ መዓልቲ " +  "......" +   this.week[result])
    }
    else{
        alert( "ሽም ብመንጽር ጠባይ" + "...." + this.ladyName[result] + ",....  ዘተወደሉ መዓልቲ" +  "......" +this.week[result])
    }
}

function calculateEriName(){
    return (((this.century / 4) - 2 * this.century - 1) + ((5 * this.year / 4)) + ((26 * (this.month + 1) / 10)) + this.day) % 7;
}





































