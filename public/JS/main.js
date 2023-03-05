
const WEEK_DAYS=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MALE_NAMES=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const FEMALE_NAMES=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let AkanName = null;
let dayOfTheWeek= null;

function userInfor(){
    let yearOfBirth = prompt("Enter your year of birth:");
    let century = parseInt(yearOfBirth.slice(0, 2));
    let year = parseInt(yearOfBirth.slice(2, ));
    let monthOfBirth = parseInt(prompt("Enter your month of birth:"));
    let dateOfBirth = parseInt(prompt("Enter the date of birth:"));
    let gender = prompt("Enter your gender: m or f");  
}
function calculateWeekDay() {
 
    let dayOfTheWeek = Math.floor( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(monthOfBirth+1)/10)) + dateOfBirth ) % 7;
    
    return dayOfTheWeek;
 }
 function getAkanName() {
    
    if (gender =='f'){
    let fAkanName=FEMALE_NAMES[dayOfTheWeek];
    console.log (fAkanName);
        
    }else if (gender =='m'){
    let mAkanName=MALE_NAMES[dayOfTheWeek];
    console.log (mAkanName);
        }
        else{
        console.log("Wrong date")
        }
}
function main() {
    getAkanName();
}


