var validPeople = [
    {
        username: "Ash",
        password: "Ketchum"
    }
]

var button = document.getElementById('btn');
button.onclick = function(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i=0; i<validPeople.length; i++){
        if(username == validPeople[i].username && password == validPeople[i].password){
            alert("flag{N1C3_S6R1PT1N6}")
        }else{
            alert("Invalid username or password")
        }
    }
}

var brute = document.getElementById('btn2');
var path = document.getElementById('btn3');
var dev = document.getElementById('btn4');

brute.onclick = function(){
    alert("After attempting over 500 usernames and passwords we found an account that exists!\nUsername: Ash\nPassword: Ketchum");
}

path.onclick= function(){
    alert("Wrong! Remember that path traversals are used in order to find hidden folders and files, not to breach logins.");
}

dev.onclick = function(){
    alert("Wrong! Remember that devoloper tools are used mainly to find hidden information on a web page.");
}