$(window).ready(function () {
    document.getElementById("colorPicked").addEventListener('change', colorChanged);
});

function colorChanged() {
    var colorPicked = $("#colorPicked").val();
    document.getElementById("displayHeader").className = "hero " + colorPicked;
}
