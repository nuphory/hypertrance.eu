let root = document.documentElement;

const videos = {
    blue: {
        path: "mp4/blue.mp4",
    },
    // green: {
    //     path: "mp4/green.mp4"
    // }
};

generateButtons();
generateSections();

let height = window.innerHeight;
let contentHeight = document.querySelector(".capture").clientHeight;
let margin = height * 0.5 - contentHeight * 0.5;

root.style.setProperty("--center-margin", margin + "px");

window.addEventListener("resize", (event) => {
    if (window.innerHeight === height) return;

    height = window.innerHeight;
    contentHeight = document.querySelector(".capture").clientHeight;

    margin = height * 0.5 - contentHeight * 0.5;

    root.style.setProperty("--center-margin", margin + "px");
});

loadBackgroundImage("img/background.jpg");
fadeIn("fadein");

/**
 * button generator
 */
function generateButtons() {
    console.log("ajax");
    $.getJSON("content/buttons.json", (json) => {
        console.log(json);
        Object.keys(json).forEach((id) => {
            let button = document.createElement("div");
            button.setAttribute("id", id + "-button");
            button.setAttribute("class", "button");
            button.innerHTML = "<p>" + json[id].text.toUpperCase() + "</p>";

            let anchor = document.createElement("a");
            anchor.setAttribute("id", id + "-anchor");
            anchor.setAttribute("href", json[id].url);
            anchor.setAttribute("target", "_blank");
            anchor.appendChild(button);

            document.getElementById("buttons").appendChild(anchor);
        });

        contentHeight = document.querySelector(".capture").clientHeight;
        margin = height * 0.5 - contentHeight * 0.5;

        root.style.setProperty("--center-margin", margin + "px");
    });
}

/**
 * section generator
 */
function generateSections() {
    console.log("ajax");
    $.getJSON("content/sections.json", (json) => {
        console.log(json);
        Object.keys(json).forEach((id) => {
            let sectionElement = document.createElement("div");
            sectionElement.setAttribute("id", id + "-section");
            sectionElement.setAttribute("class", "section fadein");
            document.getElementById("sections").appendChild(sectionElement);

            let headerElement = document.createElement("h2");
            headerElement.setAttribute("id", id + "-header");
            headerElement.setAttribute("class", "section-header");
            headerElement.innerText = json[id].header.toUpperCase();
            document.getElementById(id + "-section").appendChild(headerElement);

            let contentElement = document.createElement("span");
            contentElement.setAttribute("id", id + "-content");
            contentElement.setAttribute("class", "section-content");
            document
                .getElementById(id + "-section")
                .appendChild(contentElement);

            let content = json[id].content;

            if (id === "artists") {
                Object.values(content).forEach((obj) => {
                    let paragraph = document.createElement("div");
                    paragraph.setAttribute("class", "artist-link credit");
                    paragraph.innerHTML =
                        '<a target="_blank" href="' +
                        obj.url +
                        '">' +
                        obj.name +
                        "</div>";

                    document
                        .getElementById(id + "-content")
                        .appendChild(paragraph);
                });
            } else {
                Object.values(content).forEach((obj) => {
                    let paragraph = document.createElement("p");
                    paragraph.setAttribute("class", "section-paragraph");
                    paragraph.innerText = obj;

                    document
                        .getElementById(id + "-content")
                        .appendChild(paragraph);
                });
            }

            let divider = document.createElement("div");
            divider.setAttribute("class", "divider");
            document.getElementById(id + "-content").appendChild(divider);
        });
    });
}

async function loadBackgroundImage(path) {
    document.getElementById("background").innerHTML =
        '<img src="' + path + '"></img>';
}

async function loadBackgroundVideo(path) {
    let video = document.createElement("video");

    video.autoplay = true;
    video.muted = true;
    video.loop = true;

    video.setAttribute("id", "background-video-video");
    video.setAttribute("class", "fadein");

    video.innerHTML =
        '<source src="' +
        Object.values(videos)[~~(Math.random() * Object.values(videos).length)]
            .path +
        '" type="video/mp4">';

    document.getElementById("background").appendChild(video);

    await new Promise((resolve) => setTimeout(resolve, 100));
    fadeInElement(video);
}

/**
 * iterates through all elements with provided className
 * @param className className to look for
 */
async function fadeIn(className) {
    let elements = document.getElementsByClassName(className);
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        console.log(element);
        fadeInElement(element);
        await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    loadBackgroundVideo("mp4/background.mp4");
}

/**
 * fades in provided element
 * @param {Element} element element to apply class to
 */
function fadeInElement(element) {
    let originalClass = element.getAttribute("class");

    element.setAttribute("class", originalClass + " startFade");
}
