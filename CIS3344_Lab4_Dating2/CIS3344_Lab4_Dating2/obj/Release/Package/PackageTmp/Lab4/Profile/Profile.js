/* Click event handler for finding profile picture */
function findPic() {
    var img = new Image();
    img.src = document.getElementById("ProfLink").value;
    var profilePic = document.getElementById("profilePic");
    profilePic.appendChild(img);
}


/* Click event handler for btnSubmit */
function submit() {
    var pic = document.getElementById("ProfLink").value;
    var name = document.getElementById("FullName").value;
    var title = document.getElementById("Title").value;
    var birthday = document.getElementById("Birthday").value;
    var desc = document.getElementById("Description").value;
    var city = document.getElementById("City").value;
    var state = document.getElementById("States").value;
    var gender = document.getElementById("Gender").value;

    var status;
    if ((document.getElementById("Single").checked) || (document.getElementById("Taken").checked)) {
        if (document.getElementById("Single").checked) {
            status = "Single";
        }
        else {
            status = "Taken";
        }
    }
    else {
        status = "blank";
    }


    var hasKids;
    if ((document.getElementById("YesHas").checked) || (document.getElementById("NoHas").checked)) {
        if (document.getElementById("YesHas").checked) {
            hasKids = "Yes";
        }
        else {
            hasKids = "No";
        }
    }
    else {
        hasKids = "blank";
    }

    var wantKids;
    if ((document.getElementById("YesWants").checked) || (document.getElementById("NoWants").checked)) {
        if (document.getElementById("YesWants").checked) {
            wantKids = "Yes";
        }
        else {
            wantKids = "No";
        }
    }
    else {
        wantKids = "blank";
    }


    var religion = document.getElementById("Religion").value;
    var relationship = document.getElementById("RelType").value;

    /* validate and add values to list */
    if (pic != "" &&
        name != "" &&
        title != "" &&
        birthday != "" &&
        Date.parse(birthday) &&
        desc != "" &&
        city != "blank" &&
        state != "blank" &&
        gender != "blank" &&
        status != "blank" &&
        hasKids != "blank" &&
        wantKids != "blank" &&
        religion != "blank" &&
        relationship != "blank")
    {
        localStorage.setItem("pic", pic);
        localStorage.setItem("name", name);
        localStorage.setItem("title", title);
        localStorage.setItem("birthday", birthday);
        localStorage.setItem("desc", desc);
        localStorage.setItem("city", city);
        localStorage.setItem("state", state);
        localStorage.setItem("gender", gender);
        localStorage.setItem("Status", status);
        localStorage.setItem("hasKids", hasKids);
        localStorage.setItem("wantKids", wantKids);
        localStorage.setItem("religion", religion);
        localStorage.setItem("relationship", relationship);

        /* Message on completion */
        var firstName = name.substr(0, name.indexOf(' '));
        alert("Congratulations, " + firstName + "! You've made a new Hot Ones Dating profile!");
        window.location.href = "/Lab4/MyProfile/MyProfile.html";

    }
    else {
        alert("Please make sure you've filled out all information and have done so correctly.");
    }


}
