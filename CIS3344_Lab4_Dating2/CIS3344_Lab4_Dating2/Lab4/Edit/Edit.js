class Profile {

    Constructor(id, Gender, Image, Title, Name, Age, Description, City, State, Status, hasKids, wantsKids, Religion, RelType) {
        this.id = id;
        this.Gender = Gender;
        this.Image = Image;
        this.Title = Title;
        this.Name = Name;
        this.Age = Age;
        this.Description = Description;
        this.City = City;
        this.State = State;
        this.Status = Status;
        this.hasKids = hasKids;
        this.wantsKids = wantsKids;
        this.Religion = Religion;
        this.RelType = RelType;
    }
}


/* Click event handler for finding profile picture */
function findPic() {
    var img = new Image();
    img.src = document.getElementById("ProfLink").value;
    var profilePic = document.getElementById("profilePic");
    profilePic.appendChild(img);
}

window.onload = function () {

    var profile = JSON.parse(localStorage.getItem('profile'));

    document.getElementById("ProfLink").value = profile.Image;
    document.getElementById("FullName").value = profile.Name;
    document.getElementById("Title").value = profile.Title;
    document.getElementById("Birthday").value = profile.Age;
    document.getElementById("Description").value = profile.Description;
    document.getElementById("City").value = profile.City;
    document.getElementById("States").value = profile.State;
    document.getElementById("Gender").value = profile.Gender;
    if (profile.Status == "Single") {
        document.getElementById("Single").checked = true;
    }
    else { document.getElementById("Taken").checked = true;}

    if (profile.hasKids == "Yes") {
        document.getElementById("YesHas").checked = true;
    }
    else { document.getElementById("NoHas").checked = true;}

    if (profile.wantKids == "Yes") {
        document.getElementById("YesWants").checked = true;
    }
    else { document.getElementById("NoWants").checked = true;}
    document.getElementById("Religion").value = profile.religion;
    document.getElementById("RelType").value = profile.relationship;
}


function finishClicked() {
    /* validate and add values to list */
    if (document.getElementById("ProfLink").value != "" &&
        document.getElementById("FullName").value != "" &&
        document.getElementById("Title").value != "" &&
        document.getElementById("Birthday").value != "" &&
        Date.parse(document.getElementById("Birthday").value) &&
        document.getElementById("Description").value != "" &&
        document.getElementById("City").value != "blank" &&
        document.getElementById("States").value != "blank" &&
        document.getElementById("Gender").value != "blank" &&
        document.getElementById("Religion").value != "blank" &&
        document.getElementById("RelType").value != "blank")
    {
        var age = calcDate(document.getElementById("Birthday").value);
        var newProfile = new Profile;
        newProfile.Image = document.getElementById("ProfLink").value;
        newProfile.Name = document.getElementById("FullName").value;
        newProfile.Title = document.getElementById("Title").value;
        newProfile.Age = age;
        newProfile.Description = document.getElementById("Description").value;
        newProfile.City = document.getElementById("City").value;
        newProfile.State = document.getElementById("States").value;
        newProfile.Gender = document.getElementById("Gender").value;
        if (document.getElementById("Single").checked) {
            newProfile.Status = "Single";
        }
        else { newProfile.Status = "Taken";}

        if (document.getElementById("YesHas").checked) {
            newProfile.hasKids ="Yes";
        }
        else { newProfile.hasKids = "No"; }

        if (document.getElementById("YesWants").checked) {
            newProfile.wantKids = "Yes";
        }
        else { newProfile.wantKids = "No"; }

        newProfile.religion = document.getElementById("Religion").value;
        newProfile.relationship = document.getElementById("RelType").value;

        // set to local storage 
        localStorage.setItem('profile', JSON.stringify(newProfile));

        // Get current profiles to determine ID
       /* var newId;
        var request = new XMLHttpRequest();
        request.open("GET", "https://localhost:44355/api/Profile/GetProfiles/", true);
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                for (var i = 0; i < request.responseText.length; i++) {
                    var profile = new Profile;
                    alert(JSON.parse(request.responseText)[i].Name);
                    member = JSON.parse(request.responseText)[i];
                    members[i] = member;
                }
            }
            else if (request.readyState === 4) {
                alert("Error loading members, status code != 200 OK");
            }
        };
        request.send(); */

        // add to db
        $.ajax({
            type: "POST",
            url: "https://localhost:44355/api/Profile/addProfile/" + 50,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(newProfile),
            success: function (data) {
            },
            error: function (ajaxRequest, statusText, errorMessage) {
                alert("Error: " + ajaxRequest.responseText + "\n" + statusText + "\n" + errorMessage);
                alert("An error occured");
            }
        });

        /* Message on completion */
        window.location.href = "../MyProfile/MyProfile.html";
    }
    else {
        alert("nope");
    }
}


function calcDate(birthday) {
    var today = new Date();
    var birthDate = new Date(Date.parse(localStorage.getItem("birthday")));
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}