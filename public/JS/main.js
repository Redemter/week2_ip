
const WEEK_DAYS=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MALE_NAMES=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const FEMALE_NAMES=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let akanName = null;
let gender = null;


function userInfo(){
    let yearOfBirth = prompt("Enter your year of birth:");
    let century = parseInt(yearOfBirth.slice(0, 2));
    let year = parseInt(yearOfBirth.slice(2, ));
    let monthOfBirth = parseInt(prompt("Enter your month of birth:"));
    let dateOfBirth = parseInt(prompt("Enter the date of birth:"));
    let gender = prompt("Enter your gender: f or m ");
    let dayOfTheWeek = Math.floor( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(monthOfBirth+1)/10)) + dateOfBirth ) % 7;
    return dayOfTheWeek;
    
    console.log(dayOfTheWeek);
}

function calculateWeekDay(){ 
    let dayOfTheWeek = Math.floor( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(monthOfBirth+1)/10)) + dateOfBirth ) % 7;
    return dayOfTheWeek;  
}

function getAkanName() { 
    let dayOfTheWeek = userInfo();
    
    if (gender =='f'){
    let akanName=FEMALE_NAMES[dayOfTheWeek];
    console.log (akanName);
        
    }else if (gender =='m'){
    let akanName=MALE_NAMES[dayOfTheWeek];
    console.log (akanName);
        }
        else{
        console.log("Wrong date")
        }
    return akanName;
}

function main(){
    let akanName = getAkanName();
    userInfo();
    console.log("Your name is " + akanName);
  
}
main();



