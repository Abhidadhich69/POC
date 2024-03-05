let profile_title = document.getElementById("profile_title");
let name1 = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let image = document.getElementById("image");
let dob = document.getElementById("dob");
let phone = document.getElementById("phone");
let bio = document.getElementById("bio");

let count = 0;

submit.onclick = function (e) {
    count++;
    let arr = [];
    let obj = {
        profile_title: profile_title.value,
        Name: name1.value,
        Email: email.value,
        password: password.value,
        image: image.value,
        dob: dob.value,
        bio: bio.value,
        phone: phone.value,
    };
    arr.push(obj);
    console.log(arr);
    localStorage.setItem("Records", JSON.stringify(arr));
    e.preventDefault();
    document.getElementById("userForm").reset();
    if (count > 1) {
        let d = localStorage.getItem("Records");
        let d1 = JSON.parse(d);
        d1.push(obj);
        localStorage.setItem("Records", JSON.stringify(d1));
        e.preventDefault();
    }
};

USER.onclick = function (e) {
    e.preventDefault();
    let a = JSON.parse(localStorage.getItem("Records"));
    console.log(a);
};

function toggleUserTable() {
    document.getElementById("userinfo").style.display = "block";
    document.getElementById("userForm").style.display = "none";
    document.getElementById("userTable").style.display = "block";
    showData();
}

function toggleUserForm(event) {
    event.preventDefault()
    document.getElementById("userinfo").style.display = "block";
    document.getElementById("userForm").style.display = "block";
    document.getElementById("userTable").style.display = "none";
}

function showData() {
    let records = JSON.parse(localStorage.getItem("Records")) || [];
    let html = "";
    records.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.image + "</td>";
        html += "<td>" + element.Name + "</td>";
        html += "<td>" + element.Email + "</td>";
        html += "<td>" + element.dob + "</td>";
        html +=
            "<td><button onclick='editUser(" +
            index +
            ")'>Edit</button> <button onclick='deleteUser(" +
            index +
            ")'>Delete</button></td>";
        html += "</tr>";
    });
    document.querySelector("#userTable tbody").innerHTML = html;
}

function editUser(index, event) {
    let records = JSON.parse(localStorage.getItem("Records")) || [];
    let userData = records[index];
    document.getElementById("profile_title").value = userData.profile_title;
    document.getElementById("name").value = userData.Name;
    document.getElementById("email").value = userData.Email;
    document.getElementById("dob").value = userData.dob;
    document.getElementById("userIndex").value = index;
    toggleUserForm(event);
}

function deleteUser(index) {
    let records = JSON.parse(localStorage.getItem("Records")) || [];
    records.splice(index, 1);
    localStorage.setItem("Records", JSON.stringify(records));
    showData();
}

document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let index = document.getElementById("userIndex").value;
    let records = JSON.parse(localStorage.getItem("Records")) || [];
    let userData = {
        profile_title: document.getElementById("profile_title").value,
        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
        dob: document.getElementById("dob").value,
    };
    records[index] = userData;
    localStorage.setItem("Records", JSON.stringify(records));
    toggleUserTable();
});



function addToCart() {
    var truck = document.getElementById('truck');
    truck.style.animation = 'moveTruck 2s ease-in-out';
    setTimeout(function() {
        truck.style.animation = '';
    }, 2000); // 2000 milliseconds = 2 seconds (duration of the animation)
}