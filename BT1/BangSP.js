var id = 0;

function sell() {
    id++;
    var sp = document.getElementById('sp').value;
    var sl = document.getElementById('sl').value;
    var pri = document.getElementById('pri').value;
    var dis = document.getElementById('dis').value;
    var sub = sl * pri * (1 - dis / 100);
    var row = "<tr>";

    row += "<td>" + id + "</td>";
    row += "<td>" + sp + "</td>";
    row += "<td>" + sl + "</td>";
    row += "<td>" + pri + "</td>";
    row += "<td>" + dis + "</td>";
    row += "<td>" + sub + "</td>";
    row += "</td>";
    document.getElementById('tbl').innerHTML += row;

}


function clearFrm() {
    document.getElementById('sp').value = '';
    document.getElementById('sl').value = '';
    document.getElementById('pri').value = '';
    document.getElementById('dis').value = '';
}

function cancel() {
    clearFrm();
}