let pinValue;
let secretKey;

function generateSecretKey() {
    secretKey =  Math.floor(100000 + Math.random() * 900000);
    document.getElementById("btn_display_key").innerHTML = secretKey;
}

function displayResult() {
    let x = document.getElementById("pin").value;
    console.log("value "+x);
    if(x && secretKey && x==secretKey) {
            console.log("value equal ");
            document.getElementById("success-msg").style.visibility = "visible";
            document.getElementById("wrong-msg").style.visibility = "hidden";
    } else {
        console.log("value are not equal ");
        document.getElementById("success-msg").style.visibility = "hidden";
        document.getElementById("wrong-msg").style.visibility = "visible";
    }
}
function processInput(val){
    let x = document.getElementById("pin").value;
    if(pinValue){
        pinValue = pinValue+val;
    } else {
        pinValue = val;
    }
    if(x){
        pinValue = x + val;
    }
  
     console.log(val);
     console.log(pinValue);
     document.getElementById("pin").value = pinValue;
}

function resetInput() {
    document.getElementById("pin").value = "";
    pinValue = "";
}

function deleteSingleInput() {
    pinValue = document.getElementById("pin").value;
    if(pinValue) {
        pinValue.toString();
        let x = pinValue.slice(0,-1);
        pinValue = x;
        document.getElementById("pin").value = pinValue;
    }
}