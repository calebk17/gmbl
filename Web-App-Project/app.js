function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");

    document.addEventListener('click', function(e) {
        choice = e.target.innerText;
        document.getElementById("bet-choice").innerHTML = choice;
    });
}

var list1 = [];
var list2 = [];
var n = 1;
var x = 0;
var choice = "";

function addBet() {
    document.getElementById("popup-1").classList.toggle("active");
    var Table = document.querySelector('.tbl-upcoming');
    var NewRow = Table.insertRow(n);
    var cell1 = NewRow.insertCell(x);
    choice = cell1.innerHTML;
}

