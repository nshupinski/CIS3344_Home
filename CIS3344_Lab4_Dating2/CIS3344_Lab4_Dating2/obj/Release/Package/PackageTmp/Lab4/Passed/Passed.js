
var passedProfiles;

$(window).ready(function () {

    var div = document.getElementById("profiles");

    var request = new XMLHttpRequest();
    request.open("GET", "https://localhost:44355/api/Profile/GetPassedProfiles/", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            passedProfiles = JSON.parse(request.responseText);
            for (var p = 0; p < passedProfiles.length; p++) {
                var newDiv = createDiv(passedProfiles[p], passedProfiles[p].Id);
                div.appendChild(newDiv);
            }
        }
        else if (request.readyState === 4) {
            alert("Error loading profiles, status code != 200 OK");
        }
    };
    request.send();

    /*for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key("btnP" + i) != undefined) {
            passedProfiles.push(JSON.parse(localStorage.getItem("btnP" + i)));
        }
    }*/
});

function createDiv(profile, number) {

    /* Create a div element dynamically */
    var newDiv = document.createElement("div");
    newDiv.className = "profile" + number;


    /* Create header */
    var header = document.createElement("h2");
    header.innerHTML = profile.Name;
    newDiv.appendChild(header);


    /* Create Image */
    var image = document.createElement("img");
    image.src = "/Lab3/images/" + profile.Image + ".jpg";
    newDiv.appendChild(image);


    /* Create paragraph */
    var par = document.createElement("p");
    par.innerHTML =
        "Title: " + profile.Title +
        "<br/>Age: " + profile.Age +
        "<br/>Description: " + profile.Description +
        "<br/>City: " + profile.City +
        "<br/>State: " + profile.State +
        "<br/>Status: " + profile.Status +
        "<br/>Has Kids: " + profile.hasKids +
        "<br/>Wants Kids: " + profile.wantsKids +
        "<br/>Religion: " + profile.Religion +
        "<br/>Relationship Type: " + profile.RelType;
    newDiv.appendChild(par);


    /* Create buttons */
    var btnRemove = document.createElement("input");
    btnRemove.setAttribute("id", "btnP" + number);
    btnRemove.setAttribute("name", "btnP" + number);
    btnRemove.setAttribute("type", "button");
    btnRemove.addEventListener("click", function () {
        remove_Click(profile, number);
    });


    var btnLike = document.createElement("input");
    btnLike.setAttribute("id", "btnL" + number);
    btnLike.setAttribute("name", "btnL" + number);
    btnLike.setAttribute("type", "button");
    btnLike.addEventListener("click", function () {
        like_Click(profile, number);
    });


    /* Style new div */
    newDiv.style.float = "left";
    newDiv.style.margin = "5%";
    newDiv.style.marginBottom = "2%";
    newDiv.style.width = "40%";
    newDiv.style.backgroundColor = "#b30000";
    newDiv.style.borderRadius = "30px";


    /* Style header */
    header.style.width = "100%";
    header.style.backgroundColor = "black";
    header.style.color = "white";
    header.style.textAlign = "center";
    header.style.borderTopLeftRadius = "50px 100px";
    header.style.borderTopRightRadius = "50px 100px";


    /* Style Image */
    image.style.width = "40%";
    image.style.margin = "5%";


    /* Style paragraph */
    par.style.float = "right";
    par.style.width = "50%";
    par.style.marginTop = "2%";
    par.style.marginBottom = "2%";


    /* Style Buttons */
    btnLike.value = "Like";
    btnLike.style.padding = "2%";
    btnLike.style.paddingLeft = "6%";
    btnLike.style.paddingRight = "6%";
    btnLike.style.borderRadius = "30px";
    btnLike.style.margin = "2%";
    btnLike.style.backgroundColor = "#00cc66";
    btnLike.style.fontSize = "large";
    newDiv.appendChild(btnLike);

    btnRemove.value = "Remove";
    btnRemove.style.padding = "2%";
    btnRemove.style.paddingLeft = "5%";
    btnRemove.style.paddingRight = "5%";
    btnRemove.style.borderRadius = "30px";
    btnRemove.style.margin = "2%";
    btnRemove.style.backgroundColor = "#0099ff";
    btnRemove.style.fontSize = "large";
    newDiv.appendChild(btnRemove);

    return newDiv;
}

function remove_Click(profile, number) {
    passedProfiles.splice(number, 1);

    // remove from passed db
    $.ajax({
        type: "DELETE",
        url: "https://localhost:44355/api/Profile/DeleteProfileFromPassed/" + number,
        success: function (data) {
            if (data === true) {
                alert("Removed from passed list");
            }
        },
        error: function () {
            alert("Error removing from passed");
        }
    });

    for (var i = 0; i < passedProfiles.length; i++) {
        if (passedProfiles[i].Id == number) {
            var profile = profiles[i];
        }
    }
    // add back to profiles list
    $.ajax({
        type: "POST",
        url: "https://localhost:44355/api/Profile/addProfile/",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(profile),
        success: function (data) {
        },
        error: function (ajaxRequest, statusText, errorMessage) {
            alert("Error: " + ajaxRequest.responseText + "\n" + statusText + "\n" + errorMessage);
            alert("An error occured");
        }
    });
}

function like_Click(profile, number) {
    passedProfiles.splice(number, 1);

    // remove from passed db
    $.ajax({
        type: "DELETE",
        url: "https://localhost:44355/api/Profile/DeleteProfileFromPassed/" + number,
        success: function (data) {
            if (data === true) {
                alert("Removed from passed list");
            }
        },
        error: function () {
            alert("Error removing from passed");
        }
    });

    // add to liked db
    $.ajax({
        type: "POST",
        url: "https://localhost:44355/api/Profile/addLikedProfile/",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(profile),
        success: function (data) {
            if (data === true) {
                alert("Liked!");
            } else {
                alert("Couldnt like");
                alert(data);
            }
        },
        error: function (ajaxRequest, statusText, errorMessage) {
            alert("Error: " + ajaxRequest.responseText + "\n" + statusText + "\n" + errorMessage);
            alert("An error occured");
        }
    });
}

