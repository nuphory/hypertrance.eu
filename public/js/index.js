let root = document.documentElement;

const videos = {
    blue: {
        path: "mp4/blue.mp4"
    },
    green: {
        path: "mp4/green.mp4"
    }
};

/**
 * button generator
 */
Object.keys(buttons).forEach((id) => {
    let button = document.createElement("div");
    button.setAttribute("id", id + "-button");
    button.setAttribute("class", "button");
    button.innerHTML = "<p>" + buttons[id].text.toUpperCase() + "</p>";

    let anchor = document.createElement("a");
    anchor.setAttribute("id", id + "-anchor");
    anchor.setAttribute("href", buttons[id].url);
    anchor.appendChild(button);

    document.getElementById("buttons").appendChild(anchor);
});

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

/**
 * section generator
 */
Object.keys(sections).forEach((id) => {
    let section = document.createElement("div");
    section.setAttribute("id", id + "-section");
    section.setAttribute("class", "section");
    document.getElementById("sections").appendChild(section);

    let header = document.createElement("h2");
    header.setAttribute("id", id + "-header");
    header.setAttribute("class", "section-header");
    header.innerText = sections[id].header.toUpperCase();

    let content = document.createElement("span");
    content.setAttribute("id", id + "-content");
    content.setAttribute("class", "section-content");

    document.getElementById(id + "-section").appendChild(header);
    document.getElementById(id + "-section").appendChild(content);

    Object.values(sections[id].content).forEach((p) => {
        let paragraph = document.createElement("p");
        paragraph.setAttribute("class", "section-paragraph");
        paragraph.innerText = p;

        document.getElementById(id + "-content").appendChild(paragraph);
    });

    let divider = document.createElement("div");
    divider.setAttribute("class", "divider");
    document.getElementById("sections").appendChild(divider);
});

Object.values(sections).forEach((section) => {});

loadBackgroundImage("img/background.jpg");
loadBackgroundVideo("mp4/background.mp4");
fadeIn("fadein");

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

    await new Promise((resolve) => setTimeout(resolve, 300));
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
        await new Promise((resolve) => setTimeout(resolve, 300));
    }
}

/**
 * fades in provided element
 * @param {Element} element element to apply class to
 */
function fadeInElement(element) {
    let originalClass = element.getAttribute("class");

    element.setAttribute("class", originalClass + " startFade");
}
