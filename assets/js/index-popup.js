window.onload = function () {
    showPopup();
};

function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function goToLink() {
    window.location.href = "https://yapyap-ver2.netlify.app";
}