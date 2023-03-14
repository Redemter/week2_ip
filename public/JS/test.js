const MALE_NAMES=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const FEMALE_NAMES=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let dayOfTheWeek = 3;
let akanName= null;
let form = document.getElementById("form");

form.addEventListener('submit', function(event){
    event.preventDefault();
    birthday = document.getElementById("birthday").value;
    genderValue = document.getElementById("gender").value;
  
    // alert ("Your birthday is : " + birthday);
    // alert ("Your gender is : " + genderValue);
  
              
    if (genderValue == "female"){
        var akanName=FEMALE_NAMES[dayOfTheWeek];
        console.log (akanName);
            
    }else if (genderValue == "male"){
        var akanName=MALE_NAMES[dayOfTheWeek];
        console.log (akanName);
            }
            else{
            console.log("Name uknown");
            }
        
            alert ("Hello, Your Akan name is : " + akanName);
 });



