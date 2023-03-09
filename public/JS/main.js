
const WEEK_DAYS=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MALE_NAMES=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const FEMALE_NAMES=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let akanName = null;
let gender = document.getElementById("gender");

let form = document.getElementById("form");
form.addEventListener('submit', function(event){
    event.preventDefault();

    // let yearOfBirth = document.getElementById("date");
    let century = 19;
    let year = 20;
    let monthOfBirth = 6;
    let dateOfBirth = 6;  

    let dayOfTheWeek = Math.floor( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(monthOfBirth+1)/10)) + dateOfBirth ) % 7;
    return dayOfTheWeek;
    
    console.log(dayOfTheWeek);


function getAkanName() { 
    let dayOfTheWeek = userInfo();
    
    if (gender =='Female'){
    let akanName=FEMALE_NAMES[dayOfTheWeek];
    console.log (akanName);
        
    }else if (gender =='Male'){
    let akanName=MALE_NAMES[dayOfTheWeek];
    console.log (akanName);
        }
        else{
        console.log("Name uknown");
        }
    return akanName;
}
