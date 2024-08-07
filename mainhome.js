
let userSelectd = null;

function reAd() {
    let data = {};
    data["textname"] = document.getElementById("textname").value
    data["yourage"] = document.getElementById("yourage").value
    data["address"] = document.getElementById("address").value
    data["phonenumber"] = document.getElementById("phonenumber").value
    return data;
}

function creAte(data) {
    let table = document.getElementById("tblcontact") .getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.textname;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.yourage;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.phonenumber;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="edit(this)">Edit</a>`;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="deLete(this)">Delete</a>`;

}

function eDit(td) {
    userSelectd = td.parentElement.parentElement;
    document.getElementById("textname").value = userSelectd.cells[0].innerHTML;
    document.getElementById("yourage").value = userSelectd.cells[1].innerHTML;
    document.getElementById("address").value = userSelectd.cells[2].innerHTML;
    document.getElementById("phonenumber").value = userSelectd.cells[3].innerHTML;
}

function upDate(myForm) {
    userSelectd.cells[0].innerHTML = myForm.textname;
    userSelectd.cells[1].innerHTML = myForm.yourage;
    userSelectd.cells[2].innerHTML = myForm.address;
    userSelectd.cells[3].innerHTML = myForm.phonenumber;
}

function deLete(td) {
    if (confirm('You Want To Delete Data?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tblcontact").deleteRow(row.rowIndex);

        ClearForm();
    }
}

function ClearForm() {
    document.getElementById("textname").value = "";
    document.getElementById("yourage").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phonenumber").value = "";

    userSelectd = null;

}

localStorage.setItem("name", "Nerd Frank");
document.getElementById("name").innerHTML = localStorage.getItem("name");

localStorage.setItem("age", "10");
document.getElementById("age").innerHTML = localStorage.getItem("age");

localStorage.setItem("addr", "9999/9999");
document.getElementById("addr").innerHTML = localStorage.getItem("addr");

localStorage.setItem("tel", "0000000000");
document.getElementById("tel").innerHTML = localStorage.getItem("tel");

localStorage.setItem("edit", "Edit");
document.getElementById("edit").innerHTML = localStorage.getItem("edit");

localStorage.setItem("del", "Delete");
document.getElementById("del").innerHTML = localStorage.getItem("del");

function forMsubmit() {
    let myForm = reAd();

    if (userSelectd === null) {
        creAte(myForm);
    } else {
        upDate(myForm);
    }
}





