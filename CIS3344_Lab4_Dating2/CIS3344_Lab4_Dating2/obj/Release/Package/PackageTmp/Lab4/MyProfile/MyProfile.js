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


window.onload = function () {

    var member = JSON.parse(localStorage.getItem('member'));
    var profile = JSON.parse(localStorage.getItem('profile'));

    var div = document.getElementById("profile");

    Name.innerHTML = localStorage.getItem("name");

    /* Create Image */
    var image = document.createElement("img");
    image.src = this.localStorage.getItem("pic");
    div.appendChild(image);


    /* Create paragraph */
    var par = document.createElement("p");
    par.innerHTML =
        "Title: " + profile.Title +
        "<br/>Age: " + profile.Age +
        "<br/>Description: " + localStorage.getItem("desc") +
        "<br/>City: " + localStorage.getItem("city") +
        "<br/>State: " + localStorage.getItem("state") +
        "<br/>Status: " + localStorage.getItem("Status") +
        "<br/>Has Kids: " + localStorage.getItem("hasKids") +
        "<br/>Wants Kids: " + localStorage.getItem("wantKids") +
        "<br/>Religion: " + localStorage.getItem("religion") +
        "<br/>Relationship Type: " + localStorage.getItem("relationship");
    div.appendChild(par);

}


function editProfile() {
    window.location.href = "../Edit/Edit.html";
}