
const WEEK_DAYS=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MALE_NAMES=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const FEMALE_NAMES=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

let form = document.getElementById("form");

function getDayOfTheWeek(birthday){
    const dateArray = birthday.split("-");
    let monthOfBirth = parseInt(dateArray[1]);
    let dateOfBirth = parseInt(dateArray[2]);
    let yearOfBirth = parseInt(dateArray[0]);
    let century = Math.floor(yearOfBirth/100);
    let year = yearOfBirth-(century*100);

    var dayOfTheWeek = (Math.floor( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(monthOfBirth+1)/10)) + dateOfBirth ) % 7) - 1;
    return dayOfTheWeek;
}

function generateAkanName(dayOfTheWeek,genderValue){
    var akanName= "Unknown";
    if (genderValue == "female"){
        akanName=FEMALE_NAMES[dayOfTheWeek];
        console.log (akanName);
            
    }else if (genderValue == "male"){
        akanName=MALE_NAMES[dayOfTheWeek];
        console.log (akanName);    
    }
    return akanName;
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    birthday = document.getElementById("birthday").value;
    genderValue = document.getElementById("gender").value;
    
    const dayOfTheWeek = getDayOfTheWeek(birthday);
    const akanName = generateAkanName(dayOfTheWeek, genderValue);

    var message = "Hello, <br>Your birth date is: <b>" + birthday +
                  ".</b><br> You were born on a <b>" + WEEK_DAYS[dayOfTheWeek]+ 
                  ".</b><br>Your Akan name is: <b>" + akanName +"</b>";

    var akanNameMessage = document.getElementById('akanNameMessage');

    akanNameMessage.innerHTML +=message;
             
})