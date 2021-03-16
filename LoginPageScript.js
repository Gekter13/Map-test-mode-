  
function onlogin(success, data) {
    document.getElementById("content").innerHTML = "login status: " + success + ' ' + dc.User;
    if (success === true) {
       // alert("попали");
       GetListName();
        
    }
}

function loginClickHandler(ev) {
    var u = document.getElementById("userName").value;;
    var p = document.getElementById("userPassword").value;
     localStorage.setItem("Login", u);
   dc.logIn("http://dc.tdc.org.ua", "DC", u, p, onlogin);
    var q = document.getElementById("saver");
    if (q.checked) {
    localStorage.setItem("PassHash", dc.logIn("http://dc.tdc.org.ua", "DC", u, p, onlogin, false));
    };

  //  dc.logIn("", "DC", u, p, onlogin);
}


function logoutClickHandler() {
        localStorage.clear();
        window.location.reload();
	}; 
    
    
 var was_i_here = "";
    try {
      was_i_here = localStorage.getItem("Session"); 
    }catch{};
    
    if (was_i_here == "ok") {
         var click = document.querySelector('.buttonlog'); 
  if (localStorage.Login.length < 1) {
    
    } else{
      document.getElementById('userName').value = localStorage.Login;
      document.getElementById('userPassword').value = dc.logIn("http://dc.tdc.org.ua", "DC", localStorage.Login, localStorage.PassHash, onlogin, true); }

    




        
    click.addEventListener('click', function(){
	});
       setTimeout(function(){
		click.click();
	}, 500);

    } else {
        localStorage.setItem("Session","ok");
    };
    
    var click = document.querySelector('.buttonlog'); 
    
    click.addEventListener('click', function(){
	});