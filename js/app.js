const API_URL =
"https://script.google.com/macros/s/AKfycbxT1YvD5gFZjsKPlANVNF8acUP61jicdphoDvdvyAAW36G3P9CyYX3PH32VRZ00pC-eTA/exec";

document
.getElementById("playerForm")
.addEventListener("submit",async(e)=>{

e.preventDefault();

const payload = {

action:"registerPlayer",

fullName:
document.getElementById("fullName").value,

nickName:
document.getElementById("nickName").value,

mobile:
document.getElementById("mobile").value,

email:
document.getElementById("email").value,

playerType:
document.getElementById("playerType").value,

jerseyName:
document.getElementById("jerseyName").value,

jerseyNumber:
document.getElementById("jerseyNumber").value,

jerseySize:
document.getElementById("jerseySize").value,

sleeveType:
document.getElementById("sleeveType").value,

availability:
document.getElementById("availability").value,

pantSize:
document.getElementById("pantSize").value,

capSize:
document.getElementById("capSize").value

};

await fetch(API_URL,{
method:"POST",
body:JSON.stringify(payload)
});

alert("Registration Submitted");

});

document
.getElementById("suggestBtn")
.addEventListener("click",async()=>{

const payload = {

action:"saveSuggestion",

category:"General",

suggestion:
document.getElementById("suggestion").value

};

await fetch(API_URL,{
method:"POST",
body:JSON.stringify(payload)
});

alert("Suggestion Submitted");

});
