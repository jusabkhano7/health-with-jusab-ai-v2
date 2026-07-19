function generateContent() {

let topic = document.getElementById("topic").value;

if(topic==""){
alert("Please enter a topic.");
return;
}

document.getElementById("output").innerHTML =
"You entered: " + topic;

}
