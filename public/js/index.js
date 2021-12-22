document.getElementById("video-button").href = buttons.video.url
    ? buttons.video.url
    : "#";
document.getElementById("album-button").href = buttons.video.url
    ? buttons.album.url
    : "#";
document.getElementById("artbook-button").href = buttons.video.url
    ? buttons.artbook.url
    : "#";

document.getElementById("video-text").innerHTML =
    buttons.video.text.toUpperCase();
document.getElementById("album-text").innerHTML =
    buttons.album.text.toUpperCase();
document.getElementById("artbook-text").innerHTML =
    buttons.artbook.text.toUpperCase();
loadImage();

setTimeout(() => loadVideo(), 2000);

async function loadImage() {
    console.debug("adding background");
    document.getElementById("background").innerHTML =
        '<img src="img/background.jpg"></img>';
}

async function loadVideo() {
    console.debug(document.getElementById("background"));

    let video = document.createElement("video");

    video.autoplay = true;
    video.muted = true;
    video.loop = true;

    video.setAttribute("id", "background-video-video");

    video.innerHTML = '<source src="mp4/background.mp4" type="video/mp4">';

    document.getElementById("background").appendChild(video);
}
