

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


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Action to be performed when the document is read;
    }
};
var url = "https://api.sendgrid.com/v3/mail/send";
// function sendMail(){
//     $.ajax(url, {
//         type:"POST",
//         dataType:"application/x-www-form-urlencoded",
//         data: {"personalizations": [{"to": [{"email": "riley.m.joseph1@gmail.com"}]}],"from": {"email": "example@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]}, 
//         success:function(data, textStatus, jqXHR) {alert("success");},
//         error: function(jqXHR, textStatus, errorThrown) {alert("failure");}
//     });
// }

function sendMail() {
    var http = new XMLHttpRequest();
    var data = {"personalizations": [{"to": [{"email": "riley.m.joseph1@gmail.com"}]}],"from": {"email": "example@example.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!"}]};
    http.open("POST", url, true);

    var options = ("Access-Control-Request-Method","Access-Control-Request-Headers")

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded", "Authorization", "Bearer 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", "origin","http://localhost:8000", "Access-Control-Allow-Origin");

    http.send(data);
}

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

