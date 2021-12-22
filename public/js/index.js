let root = document.documentElement;

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

let sectionsOffset = 30 * Object.keys(buttons).length;
root.style.setProperty("--sections-offset", 238 + sectionsOffset + "px");

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

Object.values(sections).forEach((section) => {
    console.log(section);
});

loadBackgroundImage("img/background.jpg");
setTimeout(() => loadBackgroundVideo("mp4/background.mp4"), 2000);

async function loadBackgroundImage(path) {
    console.debug("adding background");
    document.getElementById("background").innerHTML =
        '<img src="' + path + '"></img>';
}

async function loadBackgroundVideo(path) {
    console.debug(document.getElementById("background"));

    let video = document.createElement("video");

    video.autoplay = true;
    video.muted = true;
    video.loop = true;

    video.setAttribute("id", "background-video-video");

    video.innerHTML = '<source src="' + path + '" type="video/mp4">';

    document.getElementById("background").appendChild(video);
}
