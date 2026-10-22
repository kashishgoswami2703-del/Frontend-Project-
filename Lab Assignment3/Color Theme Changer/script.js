
function changeTheme(color) {
    document.getElementById("page").style.backgroundColor = color;

    if (color === "black") {
        document.getElementById("page").style.color = "white";
    } else {
        document.getElementById("page").style.color = "black";
    }
}
