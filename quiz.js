var count="";

function clickfun() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("quizpage").style.display = "block";
    document.getElementById("form").style.display = "none";
    document.getElementById("main").style.display = "none";
}
function ans(){
    count++;
}
function result(){
    alert("YOUR SCORE IS : "+count);
}