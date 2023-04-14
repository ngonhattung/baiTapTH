function sign(){
    var arr = document.getElementsByTagName('input');
    var username = arr[0].value;
    var password = arr[1].value;
    var xnpassword = arr[2].value;

    var email = arr[9].value;
    var regexusername = new RegExp('^[0-9]{9,10}$');
    var regexemail = new RegExp('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$','g');
    //  if(regexusername.test(username))
    //  {
    //      alert('true');
    //  }
    //  else
    //  {
    //      alert('fasle');
    //  }

    if(regexemail.test(password))
    {
        alert('true');
    }
    else
    {
        alert('false');
    }
}