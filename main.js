let totalValue;

function generateSecretKey() {
    let text =  Math.floor(100000 + Math.random() * 900000);
    document.getElementById("btn_display_key").innerHTML = text;
}

function displayResult() {
    let x = document.getElementById("pin").value;
    console.log("value "+x);
}
function processInput(val){
    let x = document.getElementById("pin").value;
    if(totalValue){
        totalValue = totalValue+val;
    } else {
        totalValue = val;
    }
    if(x){
        totalValue = x + val;
    }
  
     console.log(val);
     console.log(totalValue);
     document.getElementById("pin").value = totalValue;
}

function resetInput() {
    document.getElementById("pin").value = "";
    totalValue = "";
}

function deleteSingleInput() {
    totalValue = document.getElementById("pin").value;
    if(totalValue) {
        totalValue.toString();
        let x = totalValue.slice(0,-1);
        totalValue = x;
        document.getElementById("pin").value = totalValue;
    }
}