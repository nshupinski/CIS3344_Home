
var signedIn;
var members = [];
var profiles = [];

$(window).ready(function () {
    if (signedIn = true) {
        /*isSignedIn();*/
    }

    // my profile button click event
    $("#myProfileBtn").on("click", function () {});


    // sign in click event
    $("#signIn").on("click", function () {
        $("#signIn-modal").toggleClass("is-active");
    });

    $("#verify").on("click", function () {
        var username = $("#verifyUsername").val();
        var password = $("#verifyPassword").val();
        var verifyMember = new Member;
        if (username != null) {
            var request = new XMLHttpRequest();
            request.open("GET", "https://localhost:44355/api/Member/Verify/" + username, false);
            request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            request.onreadystatechange = function () {
                if (request.readyState == 4 && request.status == 200) {
                    verifyMember = JSON.parse(request.responseText);
                    // successfully signed in
                    if (verifyMember.Password == password) {
                        signedIn = true;
                        alert("Successfully signed in as " + verifyMember.Username);
                        $("#signIn-modal").removeClass("is-active");
                        $("#signIn").addClass("is-hidden");
                        isSignedIn(verifyMember);
                        localStorage.setItem('member', JSON.stringify(verifyMember));
                    }
                    else {
                        alert("Username or password were incorrect. Try again");
                    }
                }
                else if (request.readyState === 4) {
                    alert("Error loading your login, status code != 200 OK");
                }
            };
            request.send();
        }
    });


    // sign up click event
    $("#signUp").on("click", function () {
        $("#add-modal").toggleClass("is-active");
    });

    // cancel click events
    $("#cancel").on("click", function () {
        $("#add-modal").removeClass("is-active");
    });
    $("#cancel-signIn").on("click", function () {
        $("#signIn-modal").removeClass("is-active");
    });

    // create account click event
    $("#createAccount").on("click", function () {
        // Get current members to determine ID
        var request = new XMLHttpRequest();
        request.open("GET", "https://localhost:44355/api/Member/GetMembers/", true);
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                for (var i = 0; i < request.responseText.length; i++) {
                    var member = new Member;
                    alert(JSON.parse(request.responseText)[i].Name);
                    member = JSON.parse(request.responseText)[i];
                    members[i] = member;
                }
            }
            else if (request.readyState === 4) {
                alert("Error loading members, status code != 200 OK");
            }
        };
        request.send();


        var newMember = new Member;
        if (members != null) {
            newMember.Id = members[members.length-1].Id + 1;
        }
        else {
            newMember.Id = 0
        }
        newMember.Name = $("#memberName").val();
        newMember.Address = $("#memberAddress").val();
        newMember.Phone = $("#memberPhone").val();
        newMember.Email = $("#memberEmail").val();
        newMember.Username = $("#memberUsername").val();
        newMember.Password = $("#memberPassword").val();

        $.ajax({
            type: "POST",
            url: "https://localhost:44355/api/Member/addMember/",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(newMember),
            success: function (data) {
                if (data === true) {
                    $("#add-modal").toggleClass("is-active");
                    alert("Account successfully created. Welcome " + memberName.value + "!");
                } else {
                    alert("Something went wrong");
                }
            },
            error: function (ajaxRequest, statusText, errorMessage) {
                alert("Error: " + ajaxRequest.responseText + "\n" + statusText + "\n" + errorMessage);
                alert("An error occured");
            }
        });
    });
});

function gender_Changed() {

    // Get all profiles from database
    APIConnect = new XMLHttpRequest();
    APIConnect.open("GET", "https://localhost:44355/api/Profile/GetProfiles", true);
    APIConnect.onreadystatechange = loadProfilesFromAPI;
    APIConnect.send();


    /* Get the gender selected from the drop-down list */
    var gender = document.getElementById("gender").value;
    var div = document.getElementById("profilesDiv");
    var state = document.getElementById("stateSelectText").value;

    div.innerHTML = "";

    if(state == "") {
        if (gender == "male") {
            for(var i = 0; i < profiles.length; i++) {
                if (profiles[i].Gender == "male") {
                    var newDiv = createDiv(profiles[i], profiles[i].Id);
                    div.appendChild(newDiv);
                }
            }
        }
        else if (gender == "female") {
            for(var i = 0; i < profiles.length; i++) {
                if (profiles[i].Gender == "female") {
                    var newDiv = createDiv(profiles[i], profiles[i].Id);
                    div.appendChild(newDiv);
                }
            }
        }
    }

    else {
        if (gender == "male") {
            for(var i = 0; i < profiles.length; i++) {
                if ((profilesArray[i].Gender == "male") && (profiles[i].State == state) ) {
                    var newDiv = createDiv(profiles[i], profiles[i].Id);
                    div.appendChild(newDiv);
                }
            }
        }
        else if (gender == "female") {
            for (var i = 0; i < profiles.length; i++) {
                if ((profilesArray[i].Gender == "female") && (profiles[i].State == state) ){
                    var newDiv = createDiv(profiles[i], profiles[i].Id);
                    div.appendChild(newDiv);
                }
            }
        }
    }
}

function loadProfilesFromAPI() {
    if (APIConnect.readyState === 4 && APIConnect.status === 200) {
        profiles = JSON.parse(APIConnect.responseText);
    }
}

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
    image.src = "images/" + profile.Image + ".jpg";
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
    var btnPass = document.createElement("input");
            btnPass.setAttribute("id", "btnP" + profile.id);
            btnPass.setAttribute("name", "btnP" + number);
            btnPass.setAttribute("type", "button");
            btnPass.addEventListener("click", removeProfile_Click);
        
         

    var btnLike = document.createElement("input");
            btnLike.setAttribute("id", "btnL" + profile.id);
            btnLike.setAttribute("name", "btnL" + number);
            btnLike.setAttribute("type", "button");
            btnLike.addEventListener("click", addToFavorites_Click);
                


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

    btnPass.value = "Pass";
    btnPass.style.padding = "2%";
    btnPass.style.paddingLeft = "6%";
    btnPass.style.paddingRight = "6%";
    btnPass.style.borderRadius = "30px";
    btnPass.style.margin = "2%";
    btnPass.style.backgroundColor = "#0099ff";
    btnPass.style.fontSize = "large";
    newDiv.appendChild(btnPass);

    return newDiv;
} 

function removeProfile_Click() {
    /* Remove "btn" from the button's id to get the index of the product. */
    var id = this.id.replace("btnP", "");
    for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].id == id) {
            var profile = profiles[i];
        }
    }
    //localStorage.setItem("btnP" + localStorage.length, JSON.stringify(profiles[index]));

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

    //remove profile from profiles db
    $.ajax({
        type: "DELETE",
        url: "https://localhost:44355/api/Profile/DeleteProfile/" + id,
        success: function (data) {
        },
        error: function () {
            alert("Error removing");
        }
    });

    profiles.splice(id, 1);

    gender_Changed();
}


function addToFavorites_Click() {

    /* hyperlink button */
    window.location.href = "#favoritesAnch";

    var id = this.id.replace("btnL", "");
    for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].id == id) {
            var profile = profiles[i];
        }
    }
    //localStorage.setItem("btnL" + localStorage.length, JSON.stringify(profiles[id]));

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

    /* Check to see if person is already in favorites */
    if(favoritesArray.indexOf(profile) == -1) {

        favoritesArray.push(profile);
        var favDiv = document.getElementById("favorites");

        /* Create Div */
        var favProf = document.createElement("div");
        favProf.className = "favProf" + id;
        favDiv.appendChild(favProf);

        /* Style Div */
        favProf.style.backgroundColor = "#b30000";
        favProf.style.width = "20%";
        favProf.style.float = "left";
        favProf.style.borderRadius = "30px";
        favProf.style.margin = "5%";


        /* Create Image */
        var image = document.createElement("img");
        image.src = "images/" + profile.Image + ".jpg";
        favProf.appendChild(image);

        /* Style Image */
        image.style.width = "90%";
        image.style.margin = "5%";
        image.style.borderRadius = "30px";


        /* Create paragraph */
        var par = document.createElement("p");
        par.innerHTML =
                "Name: " + profile.Name + 
                "<br/>Age: " + profile.Age +
                "<br/>Description: " + profile.Description;
            favProf.appendChild(par);

        /* Style paragraph */
        par.style.margin = "5%";


        return favProf;
    }
}

function isSignedIn(verifyMember) {
    $("#signIn").addClass("is-hidden");
    $("#myProfileBtn").removeClass("is-hidden");
    $("#myProfileBtn").html(verifyMember.Name);
}





