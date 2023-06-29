var userid = localStorage.getItem("userid");
var playeridweb = localStorage.getItem("playeridweb");

if (userid == playeridweb){
    console.log("Pass")
}
else {
    console.log("Fail")
    window.location.href = "https://derjacklive.github.io/SongRaten/error.html";
}