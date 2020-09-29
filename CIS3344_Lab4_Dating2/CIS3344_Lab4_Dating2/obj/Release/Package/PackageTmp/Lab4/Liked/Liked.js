
var likedProfiles;

$(window).ready(function () {
    var div = document.getElementById("profiles");

    var request = new XMLHttpRequest();
    request.open("GET", "https://localhost:44355/api/Profile/GetLikedProfiles/", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            likedProfiles = JSON.parse(request.responseText);
            for (var p = 0; p < likedProfiles.length; p++) {
                var newDiv = createDiv(likedProfiles[p], likedProfiles[p].Id);
                div.appendChild(newDiv);
            }
        }
        else if (request.readyState === 4) {
            alert("Error loading profiles, status code != 200 OK");
        }
    };
    request.send();
    /*
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key("btnL" + i) != undefined) {
            likedProfiles.push(JSON.parse(localStorage.getItem("btnL" + i)));
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


    var btnPass = document.createElement("input");
    btnPass.setAttribute("id", "btnL" + number);
    btnPass.setAttribute("name", "btnL" + number);
    btnPass.setAttribute("type", "button");
    btnPass.addEventListener("click", function () {
        addToPassed_Click(profile, number);
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
    btnPass.value = "Like";
    btnPass.style.padding = "2%";
    btnPass.style.paddingLeft = "6%";
    btnPass.style.paddingRight = "6%";
    btnPass.style.borderRadius = "30px";
    btnPass.style.margin = "2%";
    btnPass.style.backgroundColor = "#00cc66";
    btnPass.style.fontSize = "large";
    newDiv.appendChild(btnPass);

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
    likedProfiles.splice(number, 1);

    // Remove from liked db
    $.ajax({
        type: "DELETE",
        url: "https://localhost:44355/api/Profile/DeleteProfileFromLiked/" + number,
        success: function (data) {
            if (data === true) {
                alert("Removed from liked list");
            }
        },
        error: function () {
            alert("Error removing from liked");
        }
    });
}

function addToPassed_Click(profile, number) {

    // Remove from liked db
    $.ajax({
        type: "DELETE",
        url: "https://localhost:44355/api/Profile/DeleteProfileFromLiked/" + number,
        success: function (data) {
            if (data === true) {
                alert("Removed from liked list");
            }
        },
        error: function () {
            alert("Error removing from liked");
        }
    });


    // add profile to passed db
    $.ajax({
        type: "POST",
        url: "https://localhost:44355/api/Profile/addPassedProfile/",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(profile),
        success: function (data) {
            if (data === true) {
                alert("Passed");
            } else {
                alert("couldnt pass");
                alert(data);
            }
        },
        error: function (ajaxRequest, statusText, errorMessage) {
            alert("Error: " + ajaxRequest.responseText + "\n" + statusText + "\n" + errorMessage);
            alert("An error occured");
        }
    });
}
