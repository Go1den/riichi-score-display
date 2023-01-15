function repeat() {
    let elem = document.getElementById("repeat");
    if (elem.innerHTML.length < 1) {
        elem.innerHTML = 'Repeat 1';
    } else {
        elem.innerHTML = 'Repeat ' + (Number(elem.innerHTML.charAt(7)) + 1);
    }
}

function reset() {
    document.getElementById("repeat").innerHTML = '';
    document.getElementById("round").innerHTML = 'East 1';
    document.getElementById("1Name").innerHTML = 'East';
    document.getElementById("2Name").innerHTML = 'South';
    document.getElementById("3Name").innerHTML = 'West';
    document.getElementById("4Name").innerHTML = 'North';
    document.getElementById("1Score").innerHTML = '25000';
    document.getElementById("2Score").innerHTML = '25000';
    document.getElementById("3Score").innerHTML = '25000';
    document.getElementById("4Score").innerHTML = '25000';
    updateDealerInd();
}

function nextDealer() {
    let elem = document.getElementById("round");
    let roundArray = elem.innerHTML.split(" ");
    if (Number(roundArray[1]) < 4) {
        let result = roundArray[0] + ' ' + (Number(roundArray[1]) + 1);
        console.log(result)
        elem.innerHTML = result;
    } else {
        elem.innerHTML = getNextWind(roundArray[0]) + ' 1';
    }
    document.getElementById("repeat").innerHTML = '';
    updateDealerInd();
}

function updateDealerInd() {
    let elem = document.getElementById("round");
    let roundArray = elem.innerHTML.split(" ");

    let dealerElems = document.getElementsByClassName("dealerInd");
    console.log(dealerElems.length);
    for (let i=0; i < dealerElems.length; i++) {
        console.log('clear it up');
        dealerElems[i].innerHTML = '';
    }
    document.getElementById(roundArray[1] + 'Dealer').innerHTML = 'YES';
}

function getNextWind(currentWind) {
    if (currentWind == 'East') {
        return 'South';
    } else if (currentWind == 'South') {
        return 'West';
    } else if (currentWind == 'West') {
        return 'North';
    } else {
        return 'East';
    }
}

function updateField() {
    let data = document.getElementById("data");
    let selectField = document.getElementById("selectField").value;
    let selectPlayer = document.getElementById("selectPlayer").value;
    console.log(data.value);
    console.log(selectField);
    console.log(selectPlayer);
    let updateField = document.getElementById(selectPlayer + selectField);
    updateField.innerHTML = data.value;
    data.value = '';
}