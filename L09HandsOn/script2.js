

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    document.getElementById("einstein").innerHTML = myObj.name;
    document.getElementById("dob").innerHTML = myObj.birthday;
  
  }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

function getBio(){
    let myObj = JSON.parse(newRequest.responseText);
    console.log(myObj);
    document.getElementById("bio").innerHTML = myObj.bio;

}
