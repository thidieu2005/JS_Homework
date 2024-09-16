var no = 0;
var total = 0;

function add() {
    no++;
    var name = document.getElementById('name').value;
    var qua = parseFloat(document.getElementById('qua').value);
    var pri = parseFloat(document.getElementById('pri').value);
    var sub = qua * pri;

    var row = "<tr>";
    row += "<td>" + no + "</td>";
    row += "<td>" + name + "</td>";
    row += "<td>" + qua + "</td>";
    row += "<td>$" + pri.toFixed(2) + "</td>";
    row += "<td>$" + sub.toFixed(2) + "</td>";
    row += "</tr>";
    document.getElementById('tbl').getElementsByTagName('tbody')[0].innerHTML += row;
    total += sub;
    document.getElementById('totalBill').innerText = '$' + total.toFixed(2);

    clearForm();
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('qua').value = '';
    document.getElementById('pri').value = '';
}