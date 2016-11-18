

$('.gallery-item').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

$('.filter1').click(function(){
    $('.menu-restaurant').show()
});
$('.filter2').click(function(){
    $('.menu-restaurant').show().filter(':not(.category-1)').hide();
});
$('.filter3').click(function(){
    $('.menu-restaurant').show().filter(':not(.category-2)').hide();
});
$('.filter4').click(function(){
    $('.menu-restaurant').show().filter(':not(.category-3)').hide();
});

var drinks = function(){
  location.replace("layouts/menu.html");
  drinks2();
}

var drinks2 = function(){
  $(document).ready(function(){
  console.log('here')
  })
  $( window ).load(function() {
    console.log( "window loaded" );
  });
  $('.menu-restaurant').show().filter(':not(.category-2)').hide();
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Action to be performed when the document is read;
    }
};
// var url = "https://api.sendgrid.com/v3/mail/send";
// function sendMail(){
//     $.ajax(url, {
//         type:"POST",
//         dataType:"application/x-www-form-urlencoded",
//         data: {"personalizations": [{"to": [{"email": "riley.m.joseph1@gmail.com"}]}],"from": {"email": "example@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]}, 
//         success:function(data, textStatus, jqXHR) {alert("success");},
//         error: function(jqXHR, textStatus, errorThrown) {alert("failure");}
//     });
// }

// function sendMail() {
//     var http = new XMLHttpRequest();
//     var data = {"personalizations": [{"to": [{"email": "riley.m.joseph1@gmail.com"}]}],"from": {"email": "example@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]};
//     http.open("POST", url, true);
//     var options = ("Access-Control-Request-Method","Access-Control-Request-Headers")

//     //Send the proper header information along with the request
//     http.setRequestHeader("Content-type", "application/jsonp", "Access-Control-Allow-Origin", "*", "Authorization", "Bearer ", "origin","http://localhost:8000");

//     http.send(data);
// }
// var http = new XMLHttpRequest();
// var body = {"personalizations": [{"to": [{"email": "riley.m.joseph1@gmail.com"}]}],"from": {"email": "example@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]};
// function callOtherDomain(){
//     if(http) {
//         http.open('POST', url, true);
//         http.setRequestHeader('X-PINGOTHER', 'pingpong');
//         http.setRequestHeader('Content-Type', 'application/xml');
//         // http.onreadystatechange = handler;
//         http.send(body);
//     }
// }
// function sendMail2(){ 
//     var request = new XMLHttpRequest();
//     var params = {"personalizations": [{"to": [{"email": "riley.m.joseph1@gmail.com"}]}],"from": {"email": "example@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]};
//     request.open('POST', url, true);
//     request.onreadystatechange = function() {if (request.readyState==4) alert("It worked!");};
//     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     // request.setRequestHeader("Content-length", params.length);
//     // request.setRequestHeader("Connection", "close");
//     request.send(params);
// }
    // ^^^^^^ http.onreadystatechange = function() {//Call a function when the state changes.
    //     if(http.readyState == 4 && http.status == 200) {
    //         alert(http.responseText);
    //     }
    // }


// function sendMail() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("demo").innerHTML =
//       this.responseText;
//     }
//   };
//   xhttp.open("GET", "xmlhttp_info.txt", true);
//   xhttp.send();
// }
// xhttp.open("GET", "filename", true);
// xhttp.send();
var url = "https://api.sendgrid.com/v3/templates/"
function getMail(){   
    var xhr = createCORSRequest('GET', url);
    xhr.send();
}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  if ("withCredentials" in xhr) {
    // Access-Control-Allow-Credentials: true

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

var xhr = createCORSRequest('GET', url);
if (!xhr) {
  throw new Error('CORS not supported');
}

