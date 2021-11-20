function checkCreds(){
    console.log("checkCreds is running");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    if(fullName.length > 20 || fullName.length < 2){
        document.getElementById("loginStatus").innerHTML = "Invalid full name.";
    } //if the first and last name combined is less than 2 characters or more than 20 character it will bw marked invalid 

    else if(badgeNumb > 999 || badgeNumb < 0){
        document.getElementById("loginStatus").innerHTML = "Invalid badge number.";
    }//if the full name length matches the requirements the badge number will be checked.
    // if the badge number is less than 0 or more than 999 it will be marked as invalid

    else{
        alert("Hello, " + fullName + "!");
        location.replace("uatspace.html");
    }//if the badge number and full name are valid an alert will pop up and you'll be redirected to uatspace.html
}