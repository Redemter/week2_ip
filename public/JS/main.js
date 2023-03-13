
const WEEK_DAYS=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MALE_NAMES=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const FEMALE_NAMES=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let akanName = null;
let dayOfTheWeek= null;
let gender = document.getElementsByName("gender");

let form = document.getElementById("form");

form.addEventListener('submit', function(event){
    event.preventDefault();

    let yearOfBirth = document.getElementById("date");
    let century = 18;
    let year = 20;
    let monthOfBirth = 6;
    let dateOfBirth = 6;  

    let dayOfTheWeek = Math.floor( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(monthOfBirth+1)/10)) + dateOfBirth ) % 7;

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
    
    })

