
const WEEK_DAYS=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MALE_NAMES=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const FEMALE_NAMES=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let form = document.getElementById("form");

form.addEventListener('submit', function(event){
    event.preventDefault();
    birthday = document.getElementById("birthday").value;
    genderValue = document.getElementById("gender").value;

    const dateArray = birthday.split("-");
    let monthOfBirth = parseInt(dateArray[1]);
    let dateOfBirth = parseInt(dateArray[2]);
    let yearOfBirth = parseInt(dateArray[0]);
    let century = Math.floor(yearOfBirth/100);
    let year = yearOfBirth-(century*100);


    let dayOfTheWeek = Math.floor( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(monthOfBirth+1)/10)) + dateOfBirth ) % 7;

    console.log(dayOfTheWeek);
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
        
            alert ("Hello, Your date is : " + birthday);
            alert ("Hello, Your Akan name is : " + akanName);
    
    })

