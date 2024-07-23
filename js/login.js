function login_user(){


    debugger;
const username=document.getElementById('username').value;
const password=document.getElementById('password').value;


    if (username==='nani' && password==='123') {

        // console.log(username,password);
        alert('login user Sussessfully')


        window.location.assign("nani.html");


    }

}

function cancel(){

    alert("cancel");
    window.location.assign("login.html");

}




function signup(){
    debugger;
    alert('Account Successfully Created')
}