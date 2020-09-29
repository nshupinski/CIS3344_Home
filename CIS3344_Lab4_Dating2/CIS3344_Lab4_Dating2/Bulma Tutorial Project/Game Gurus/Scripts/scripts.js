var gameArray;
var reviewArray;
var reviewList;
var APIConnect;
var favoriteReviewArray;
var currentUser;

// Comment out when using database connection
/*
if ($("html").attr("id") === "index") {
    gameArray = new Array();
    gameArray.push(new Game(1, "Doom Eternal", "M (Mature)", "First Person Shooter", "https://asset.msi.com/sam/gamelaunch/191/cover.jpg", "March 20, 2020", "id Software", "Developed by id Software, DOOM Eternal delivers the ultimate combination of speed and power, along with the next leap in push-forward, first-person combat."));
    gameArray.push(new Game(2, "Call of Duty: Modern Warfare", "M (Mature)", "First Person Shooter", "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/72874023_113155743441597_4654493356171198464_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=tr7g-03RdrUAX8Ood-T&_nc_ht=scontent-lga3-1.xx&oh=4cd2bd475fcd7fde2993fa17454f4029&oe=5EB72CFA", "September 12, 2019", "Infinity Ward", "Modern Warfare® engulfs fans in an incredibly raw, gritty, provocative narrative that brings unrivaled intensity and shines a light on the changing nature of modern war."));
    gameArray.push(new Game(3, "Assassin's Creed Odyssey", "M (Mature)", "Action Role-Playing", "https://kbimages1-a.akamaihd.net/6ea15929-5917-436e-8dd5-09b8c51e5104/1200/1200/False/assassin-s-creed-odyssey-1.jpg", "October 2, 2018", "Ubisoft Montreal", "Write your own epic odyssey and become a legendary Spartan hero. Forge your destiny in a world on the brink of tearing itself apart. Influence how history unfolds in an ever-changing world shaped by your choices."));
    gameArray.push(new Game(4, "Red Dead Redemption 2", "M (Mature)", "Action Adventure", "https://www.digiseller.ru/preview/812415/p1_2764235_d8cb3aa3.jpg", "October 26, 2018", "Rockstar Games", "Developed by the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America’s unforgiving heartland."));
    gameArray.push(new Game(5, "Super Smash Bros. Ultimate", "E10+ (Everyone 10+)", "Fighting", "https://www.mobygames.com/images/covers/l/548925-super-smash-bros-ultimate-nintendo-switch-front-cover.jpg", "December 7, 2018", "Nintendo", "Inklings from the Splatoon series, as well as returning Smash characters like Mario and Link will be making appearances in this classic Nintendo franchise's Switch debut."));
    gameArray.push(new Game(6, "The Elder Scrolls V: Skyrim", "M (Mature)", "Action Role-Playing", "https://www.mobygames.com/images/covers/l/473949-the-elder-scrolls-v-skyrim-special-edition-playstation-4-manual.jpg", "November 10, 2011", "Bethesda Game Studios", "Skyrim reimagines the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose."));
}
*/
// End comment out

$(window).ready(function () {
    $(".navbar-burger").on("click", function () {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
     
    // CHRIS'S DATABASE CONNECTION CODE FOR GAMES, FULLY FUNCTIONING
    // /*
    APIConnect = new XMLHttpRequest();
    APIConnect.open("GET", "https://localhost:44355/api/Game/GetGames", true);
    APIConnect.onreadystatechange = loadGamesFromAPI;
    APIConnect.send();
        // */

        // Comment out when using database connection
        /*
        for (var i = 0; i < gameArray.length; i++) {
            createGameCard(gameArray[i], i);
        }
        $(".button-reviews").on("click", createGameReviews);
        $(".button-add-new").on("click", createReviewForm);
        */
        // End comment out

    if ($("html").attr("id") === "index") {
        $(".game-filter").on("change", gameFilterOnChange);
        $("#review-rating").on("change", reviewRatingOnChange);
        $("#cancel").on("click", removeReviewForm);
        $("#add-review").on("click", addGameReview);
        $("#suggest-submit").on("click", submitSuggestion);
        document.getElementById("review-rating").value = "";
    }

    if ($("html").attr("id") === "myReviews") {
        $("#button-go").on("click", btnGoClickHandler);
    }
});

// Calls API to retrieve games from db
function loadGamesFromAPI() {
    if (APIConnect.readyState === 4 && APIConnect.status === 200) {
        gameArray = JSON.parse(APIConnect.responseText);
        if ($("html").attr("id") === "index") {
            for (var i = 0; i < gameArray.length; i++) {
                createGameCard(gameArray[i], i);
            }

            $(".button-reviews").on("click", createGameReviews);
            $(".button-add-new").on("click", createReviewForm);
        }
    }
    else if (APIConnect.readyState === 4) {
        $("#gameContainer").html("<p class='title has-text-centered' id='games-help'> Error loading games from API :/</p>");
    }
}

function submitSuggestion() {
    $("#suggestion-help").text("");
    var gameTitle = $("#suggestion-title").val();
    var gameDate = $("#suggestion-date").val();
    var gameAdditional = $("#suggestion-additional").val();
    if (gameTitle === "") {
        $("#suggestion-help").text("Enter a title");
        return;
    }
    if (gameDate === "") {
        $("#suggestion-help").text("Enter a date");
        return;
    }
    if (!moment(gameDate, 'MM/DD/YYYY', true).isValid()) {
        $("#suggestion-help").text("Invalid date format");
        return;
    }

    var suggestion = {
        "gameTitle": gameTitle,
        "gameReleaseDate": gameDate,
        "additionalInfo": gameAdditional
    };

    $.ajax({
        type: "POST",
        url: "https://localhost:44320/api/Suggestion/AddSuggestion",
        contentType: "application/json",
        data: JSON.stringify(suggestion),
        success: function (data) {
            if (data === true) {
                alert("Thank you for your input!");
                $("#suggestion-title").val("");
                $("#suggestion-date").val("");
                $("#suggestion-additional").val("");
            }
        },
        error: function () {
            $("#suggestion-help").text("Error connecting to API");
        }
    });

}

function btnGoClickHandler() {
    $("#go-help").text("");
    $("#review-section").html("");

    var username = $("#username-input").val();
    if (username === "") {
        $("#go-help").text("Enter a username silly");
        return;
    }

    $.ajax({
        type: "PUT",
        url: "https://localhost:44320/api/Review/ValidateUser/" + username,
        success: function(data) {
            if (data === false) {
                $("#go-help").text("Username doesn't exist");
            }
            else {
                currentUser = username;
                $.ajax({
                    url: "https://localhost:44320/api/Review/GetReviewsByUser/" + username,
                    dataType: "json",
                    success: function (data) {
                        reviewArray = data;
                        if (reviewArray.length !== 0) {
                            for (var i = 0; i < reviewArray.length; i++) {
                                createReviewCard(reviewArray[i], i, false);
                            }
                        }
                        $.ajax({
                            url: "https://localhost:44320/api/Favorite/GetFavorites/" + username,
                            dataType: "json",
                            success: function (data) {
                                favoriteReviewArray = data;
                                for (var j = 0 ; j < favoriteReviewArray.length; j++) {
                                    createReviewCard(favoriteReviewArray[j], j, true);
                                }
                            },
                            error: function () {
                                $("#go-help").text("Error retrieving favorites from API");
                            }
                        });
                    },
                    error: function () {
                        $("#go-help").text("Error retrieving from API");
                    }
                });
            }
        },
        error: function () {
            $("#go-help").text("Error connecting to API");
        }
    });
}

function createReviewCard(review, index, favorite) {
    var gamePic;
    var gameTitle;
    var color;
    for (var i = 0; i < gameArray.length; i++) {
        if (review.gameId === gameArray[i].id) {
            gamePic = gameArray[i].image;
            gameTitle = gameArray[i].title;
        }
    }
    if (index === 0 && !favorite || index === 0 && reviewArray.length === 0) {
        $("#review-section").append("<section class='section' id='all-reviews'></section>");
    }
    if (favorite && reviewArray.length === 0 && document.getElementById("my-reviews-placeholder") === null) {
        $("#all-reviews").css("padding-top", "0");
        $("#favorites-title").css("margin-top", "0");
    }
    if (favorite && index === 0) {
        $("#all-reviews").append("<h1 class='title has-text-centered' id='favorites-title'>Here's some of your favorite reviews from your favorite amateur critics!</h1>");
    }
    var id = review.reviewId;
    if (index % 3 === 0) {
        $("#all-reviews").append("<div class='columns review-container'></div>");
    }
    if (review.rating <= 3) {
        color = " is-danger";
    }
    else if (review.rating <= 7) {
        color = " is-warning";
    }
    else {
        color = " is-success";
    }
    var columns = document.getElementsByClassName("columns");
    var parent = columns[columns.length - 1];

    var column = document.createElement("div");
    column.setAttribute("class", "column review-column");
    column.setAttribute("id", "review-" + id);
    parent.appendChild(column);

    $("#review-" + id).append("<div class='card review-card' id='review-card-" + id + "'>" +
        "<button class='button delete-review' id='delete-review-" + review.reviewId +"'>X</button>" +
        "<div class='card-content' style='padding-top:1%;'>" +
            "<div class='media'>" +
                "<div class='media-left'>" +
                    "<figure class='image is-96x96 is-square'><img src='" + gamePic + "'></figure>" +
                "</div>" +
                "<div class='media-content' style='height:100%;margin:auto;'>" +
                    "<p class='title is-4' style='width:100%;margin-bottom:0;'>" + review.userId + "</p>" +
                    "<p><span class='subtitle is-6'>" + review.date + "</span></p>" + 
                    
                "</div>" +
            "</div>" + 
        "</div > " +
        "<div class='card-content' style='padding-top:0;'>" +
            "<p class='title is-6' style='margin-top:0.5rem;width:78%;float:left;'>" + gameTitle + "</p>" +
            "<button class='button" + color + " review-rating' style='margin:0;'>" + review.rating + "</button>" +
            "<p style='clear:both;'>" + "\"" + review.description + "\"" + "</p>" +
        "</div>" +
        
        "</div > ");
    if (!favorite) {
        $("#delete-review-" + review.reviewId).on("click", deleteReview);
    }
    else {
        $("#delete-review-" + review.reviewId).on("click", deleteFavorite);
    }
}

function deleteFavorite() {
    var idArray = this.id.split('-');
    var id = idArray[idArray.length - 1];
    var reviewId = parseInt(id);
    var username = currentUser;
    $.ajax({
        type: "DELETE",
        url: "https://localhost:44320/api/Favorite/DeleteFavorite/" + username + "/" + reviewId,
        success: function (data) {
            if (data === true) {
                alert("Favorite deleted");
            }
            else {
                alert("Favorite already deleted");
            }
        },
        error: function () {
            alert("Error deleting review");
        }
    });
    $("#review-" + reviewId).html("");
}

function deleteReview() {
    var idArray = this.id.split('-');
    var id = idArray[idArray.length - 1];
    var reviewId = parseInt(id);
    $.ajax({
        type: "DELETE",
        url: "https://localhost:44320/api/Review/DeleteReview/" + reviewId,
        success: function (data) {
            if (data === true) {
                alert("Review deleted");
            }
            else {
                alert("Review already deleted");
            }
        },
        error: function () {
            alert("Error deleting review");
        }
    });
    $("#review-" + reviewId).html("");
}

// Creates and arranges visible game cards on page
function createGameCard(game, index) {
    var id = game.id;
    var averageRating;
    var color;

    $.ajax({
        type: "GET",
        url: "https://localhost:44320/api/Review/AverageRating/" + id,
        success: function (data) {
            averageRating = data;
            if (averageRating <= 3) {
                color = " is-danger";
                if (averageRating === 0) {
                    averageRating = "N/A";
                }
            }
            else if (averageRating <= 7) {
                color = " is-warning";
            }
            else {
                color = " is-success";
            }
            $("#title-" + id).after("<button class='button rating-button" + color + "'>" + averageRating + "</button>");
        },
        error: function () {
            averageRating = "N/A";
            $("#title-" + id).after("<button class='button rating-button is-danger'>" + averageRating + "</button>");
        }
    });

    
    if (index % 3 === 0) {
        $("#gameContainer").append("<div class='columns games-container'></div>");
        $("#gameContainer").append("<div class='columns review-container'></div>");
    }
    var columns = document.getElementsByClassName("columns");
    var parent = columns[columns.length - 2];

    var column = document.createElement("div");
    column.setAttribute("class", "column game-column");
    column.setAttribute("id", "column-" + id);

    var card = document.createElement("div");
    card.setAttribute("class", "card game-card");
    card.setAttribute("id", "card-" + id);
    var cardImage = document.createElement("div");
    cardImage.setAttribute("class", "card-image");
    cardImage.setAttribute("id", "card-image-" + id);
    var figure = document.createElement("figure");
    figure.setAttribute("class", "image is-square");
    var gamePic = document.createElement("img");
    gamePic.setAttribute("class", "gameImage");
    gamePic.setAttribute("src", game.image);

    var cardContent = document.createElement("div");
    cardContent.setAttribute("class", "card-content");
    cardContent.setAttribute("id", "card-content-" + id);
    var title = document.createElement("p");
    title.setAttribute("class", "title is-5");
    title.setAttribute("id", "title-" + id);
    title.appendChild(document.createTextNode(game.title));

    cardContent.appendChild(title);
    figure.appendChild(gamePic);
    cardImage.appendChild(figure);
    card.appendChild(cardImage);
    card.appendChild(cardContent);
    column.appendChild(card);
    
    parent.appendChild(column);

    var addList = $("#card-content-" + id);
    var test = document.createElement("div");
    test.setAttribute("class", "content");
    test.setAttribute("id", "content-" + id);
    addList.append(test);
    var list = "<p class='card-list-item'><strong>Released - </strong>" + game.releaseDate + "</p >"
        + "<p class='card-list-item'><strong>Genre - </strong>" + game.genre + "</p>"
        + "<p class='card-list-item'><strong>Developer - </strong>" + game.developer +"</p>"
        + "<p class='card-list-item'><strong>Rating -  </strong>" + game.rating + "</p>"
        + "<p class='card-list-item'><strong>Description - </strong>" + game.description + "</p>";
    $("#content-" + id).html(list);

    var card1 = document.getElementById("card-" + id);
    var tabs = document.createElement("div");
    tabs.setAttribute("class", "tabs is-centered is-fullwidth");

    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var li2 = document.createElement("li");
    var a = document.createElement("a");
    var a2 = document.createElement("a");
    a.setAttribute("class", "button-reviews");
    a.setAttribute("id", "reviews-" + id);
    a2.setAttribute("class", "button-add-new");
    a2.setAttribute("id", "add-new-" + id);
    a.appendChild(document.createTextNode("Reviews"));
    a2.appendChild(document.createTextNode("Add New"));
    li.appendChild(a);
    li2.appendChild(a2);
    ul.appendChild(li);
    ul.appendChild(li2);
    tabs.appendChild(ul);
    card1.appendChild(tabs);
}

// Click handler Add New button on game card
// Displays pop up window for adding a new review
function createReviewForm() {
    $("#add-modal").toggleClass("is-active");
    var idArray = this.id.split('-');
    var id = parseInt(idArray[idArray.length - 1]);
    var game = getGame(id, gameArray);
    $("#modal-foot").children(".is-primary").attr("id", "add-review-" + id);
    $("#titleText").html("<font color='#00d1b2'>" + game.title + "</font>"); 
}

// Click handler for Add Review button in add new review pop up window
// Validates form inputs and creates new review, sends review to db
function addGameReview() {
    var rating = $("#review-rating").val();
    if (rating === null) {
        $("#add-review-help").text("Select a rating");
        $("#add-review-help").removeClass("is-hidden");
        return;
    }
    var userId = $("#review-user").val();
    if (userId === "") {
        $("#add-review-help").text("Enter a username");
        $("#add-review-help").removeClass("is-hidden");
        return;
    }
    var review = $("#review-content").val();
    if (review === "") {
        $("#add-review-help").text("Enter a review");
        $("#add-review-help").removeClass("is-hidden");
        return;
    }

    var idArray = this.id.split('-');
    var id = parseInt(idArray[idArray.length - 1]);
    var today = moment().format('MMMM D, YYYY');
    var newReview = new Review(0, id, userId, rating, review, today);

    // Database connection for Chris's db, adds new review to his db
    $.ajax({
        type: "POST",
        url: "https://localhost:44320/api/Review/WriteReview",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(newReview),
        success: function (data) {
            if (data === true) {
                alert("Review added");
            }
        },
        error: function () {
            alert("Error, try again later");
        }
    });

    $("#add-review-help").addClass("is-hidden");
    $("#add-modal").toggleClass("is-active");
    $("#div-rating").attr("class", "select");
    $("#review-content").val("");
    $("#review-rating").val("");
    $("#review-user").val("");
}

// Click handler for Cancel button in add new review pop up window
// Hides pop up and resets some classes for styling pop up
function removeReviewForm() {
    $("#add-modal").toggleClass("is-active");
    $("#add-review-help").addClass("is-hidden");
    $("#div-rating").attr("class", "select");
    $("#review-content").val("");
    $("#review-rating").val("");
    $("#review-user").val("");
}

// Change event handler for rating select element in add review pop up
// Changes color of select box depending on what rating is selected
function reviewRatingOnChange() {
    var div = this.parentNode;
    var value = parseInt(this.value);
    if (value === 1 || value === 2 || value === 3 || value === 4) {
        div.setAttribute("class", "select is-danger");
    }
    else if (value === 5 || value === 6 || value === 7) {
        div.setAttribute("class", "select is-warning");
    }
    else {
        div.setAttribute("class", "select is-success");
    }
}

function createGameReviews() {
    var idArray = this.id.split('-');
    var gameId = parseInt(idArray[idArray.length - 1]);

    var request = new XMLHttpRequest();
    request.open("GET", "https://localhost:44320/api/Review/GetReviewsByGame/" + gameId, true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            reviewList = JSON.parse(request.responseText);

            showReviewsPopUp(reviewList, gameId);
            $("#btnClose").on("click", function () { $("#review-modal").removeClass("is-active"); });

        }
        else if (request.readyState === 4) {
            alert("Error loading reviews, status code != 200 OK");
        }
    };
    request.send();
}  

// Display reviews in modal
function showReviewsPopUp(reviewList, gameId) {
    var game = getGame(gameId, gameArray);
    $("#displayReviews").html("");
    $("#review-modal").toggleClass("is-active");
    $("#review-Image").attr("src", game.image);
    $("#review-titleText").html("<font color='#00d1b2'>" + game.title + "</font>");

    if (reviewList.length === 0) {
        $("#displayReviews").html("<p class=' subtitle has-text-centered' style='margin-top: 6%;'><strong>No reviews yet :/</strong></p>");
    }
    for (var i = 0; i < reviewList.length; i++) {
        var color;
        var description = "\"" + reviewList[i].description + "\"";
        var rating = reviewList[i].rating;
        if (rating <= 3) {
            color = " is-danger";
        }
        else if (rating <= 7) {
            color = " is-warning";
        }
        else {
            color = " is-success";
        }

        var displayReview = document.createElement("div");
        displayReview.className = "content";
        displayReview.setAttribute("id", "review-content-" + reviewList[i].reviewId);
        document.getElementById("displayReviews").appendChild(displayReview);
        $("#review-content-" + reviewList[i].reviewId).html("<p style='margin-bottom:2%;'><button type='button' class='button " + color + " review-popup-rating'>" + reviewList[i].rating + "</button><strong>" + reviewList[i].userId + "</strong><a class='icon favorite-icon' id='favorite-review-" + reviewList[i].reviewId + "'><i class='fas fa-heart has-text-danger'></i></a></p>");
        var review = document.createElement("p");
        // add user's review
        var x = document.createTextNode(description);
        review.appendChild(x);
        displayReview.appendChild(review);
        $("#displayReviews").append("<div class='container review-date-container'><p class='review-date has-text-right'style='margin-bottom:2%;'><small>" + reviewList[i].date + "</small></p></div><div class='container fav-container' id='fav-container-" + reviewList[i].reviewId +"'></div>");
        $("#favorite-review-" + reviewList[i].reviewId).on("click", addFavorite);
        $(".fav-container").html("");
    }
}

function addFavorite() {
    $(".fav-container").html("");
    var idArray = this.id.split('-');
    var id = idArray[idArray.length - 1];
    $("#fav-container-" + id).html("<div class='field has-addons has-text-right' id='field-add-favorite'>" +
        "<div class='control'><input class='input' id='fav-username' type='text' placeholder='Enter Username'></div>" +
        "<div class='control'><a class='button is-danger' id='btn-add-favorite-" + id + "' type='text'>Add Favorite</div>" +
        "</div>" + 
        "<p class='help is-danger' id='help-favorite'></p>");
    $("#btn-add-favorite-" + id).on("click", function () {
        var username = $("#fav-username").val();
        if (username === "") {
            $("#help-favorite").text("Enter a username");
            return;
        }

        var review = getReview(id, reviewList);
        if (username === review.userId) {
            $("#help-favorite").text("Can't favorite your own review!");
            return;
        }

        $.ajax({
            type: "PUT",
            url: "https://localhost:44320/api/Favorite/ValidateUnique/" + username + "/" + id,
            success: function (data) {
                if (!data) {
                    $("#help-favorite").text("Review already favorited");
                    return;
                }
                else {
                    $.ajax({
                        type: "POST",
                        url: "https://localhost:44320/api/Favorite/AddFavorite/" + username + "/" + id,
                        success: function (data) {
                            if (data === true) {
                                $("#help-favorite").text("Favorite added!");
                                $("#fav-username").val("");
                            }
                        },
                        error: function () {
                            $("#help-favorite").text("Error connecting to API :/");
                        }
                    });
                }
            },
            error: function () {
                $("#help-favorite").text("Error connecting to API :/");
            }
        });
        
    });
}

function getGame(gameId, gameArray) {
    for (var i = 0; i < gameArray.length; i++) {
        if (gameArray[i].id === gameId) {
            return gameArray[i];
        }
    }
    return undefined;
}

function getReview(reviewId, reviewList) {
    for (var i = 0; i < reviewList.length; i++) {
        if (reviewList[i].reviewId === parseInt(reviewId)) {
            return reviewList[i];
        }
    }
    return undefined;
}

// Change event handler for game filtering select elements
// Updates visible games depending on selected filters
function gameFilterOnChange() {
    var genre = $("#filter-genre").val();
    var year = $("#filter-year").val();
    var rating = $("#filter-rating").val();
    var index = 0;
    var created = false;
    $("#gameContainer").empty();
    if (gameArray === undefined) {
        $("#gameContainer").html("<p class='title has-text-centered' id='games-help'> No Matches Found :/</p>");
        return;
    }
    for (var i = 0; i < gameArray.length; i++) {
        var releaseDate = gameArray[i].releaseDate;
        var releaseYear = releaseDate.slice(releaseDate.length - 4, releaseDate.length);
        if (gameArray[i].genre !== genre && genre !== "All") {
            continue;
        }
        else if (releaseYear !== year && year !== "All") {
            continue;
        }
        else if (gameArray[i].rating !== rating && rating !== "All") {
            continue;
        }
        else {
            createGameCard(gameArray[i], index);
            created = true;
            index++;
        }
    }
    if (!created) {
        $("#gameContainer").html("<p class='title has-text-centered' id='games-help'> No Matches Found :/</p>");
    }
    else {
        $(".button-reviews").on("click", createGameReviews);
        $(".button-add-new").on("click", createReviewForm);
    }
}