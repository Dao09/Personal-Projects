
function validation(){
   var uname = document.getElementById("uname").value;//targeting the usernam input field 
   var pwd = document.getElementById("pwd").value;//targeting the password input field 
   var email = document.getElementById("email").value;//targeting the email input field 
   var phone = document.getElementById("phone").value;//targeting the phone input field 
   var adrs = document.getElementById("adrs").value;//targeting the address input field 

   //keep in mind to add onsubmit="return function_name();" inside the form element as an attribute


   console.log("uname");


   if(uname==""){
       document.getElementById("user").innerHTML="Please enter your user id ";//targeting the span element 
       return false;
   }

   if(pwd==""){
    document.getElementById("pass").innerHTML="Please enter your password ";//targeting the span element 
    return false;
   }


    if(email==""){
        document.getElementById("mail").innerHTML="Please enter your  email id";//targeting the span element 
        return false;
    }


    if(phone==""){
        document.getElementById("number").innerHTML="Please enter your phone number";//targeting the span element 
        return false;
    }


    if(adrs==""){
        document.getElementById("address").innerHTML="Please enter your permanent/temporary address ";//targeting the span element 
        return false;
    }


   else {
       document.write("Congratulations your data has been successfully submitted")
   }
}
















// fetch name starts here
function get_name(){
   var name = document.getElementById("E_name").value; 

   console.log(name);

   document.write("<br>You entered your name as.. " + name + "<br>");
}

document.getElementById("mod").innerHTML = "javaScript";

console.log(document.getElementById("mod").innerHTML);
document.write("<br>First test for javascript");

var srs = "<br>Working with all the effort";
document.write(srs);

document.getElementById("mod").innerHTML = "This is just a demo"
console.log(document.getElementById("mod").innerHTML);

var car = "10";
var num = 10;

console.log(car!==num);

var y= ["<br>test1", "test2", "test3", "test4", "test5"];
document.write(y[0]);


for(var x=0; x<5;x++){
    document.write(y[x]);
}


function srs_09(a,b){
    var a=1;
    var b=2;
    var c=a+b;
   document.write(c);
}

srs_09(12,13);

