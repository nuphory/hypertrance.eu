import * as $ from "jquery";

let root = document.documentElement;
let modal = document.getElementById("modal") as HTMLElement;

let keyStream: string[] = [];
let konamiCode: string[] = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
  "Enter",
];

let glaceon = false;

window.addEventListener("keydown", (e) => {
  if (keyStream.length == 11) keyStream.shift();
  keyStream.push(e.code);

  if (glaceon) {
    if (e.code === "Escape" || e.code === "KeyQ") {
      removeGlaceon();
    }
  } else {
    if (compare(keyStream, konamiCode)) {
      addGlaceon();
    }
  }
});

const videos = {
  blue: {
    path: "./static/mp4/blue.mp4",
  },
  // green: {
  //     path: "./static/mp4/green.mp4"
  // }
};

generateButtons();
generateSections();

let height = window.innerHeight;
let contentHeight = (document.querySelector(".capture") as Element)
  .clientHeight;
let margin = height * 0.5 - contentHeight * 0.5;

window.addEventListener("resize", (event) => {
  if (window.innerHeight === height) return;

  height = window.innerHeight;
  contentHeight = (document.querySelector(".capture") as Element).clientHeight;

  margin = height * 0.5 - contentHeight * 0.5;

  root.style.setProperty("--center-margin", margin + "px");
  root.style.setProperty("--content-height", contentHeight + "px");
});

loadBackgroundImage("./static/img/background.jpg");
fadeIn("fadein");

/**
 * button generator
 */
function generateButtons() {
  // console.log("ajax");
  $.getJSON(
    "./static/buttons.json",
    (json: { [x: string]: { url: string; text: string } }) => {
      // console.log(json);
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

        (document.getElementById("buttons") as HTMLElement).appendChild(anchor);
      });

      contentHeight = (document.querySelector(".capture") as Element)
        .clientHeight;
      margin = height * 0.5 - contentHeight * 0.5;

      root.style.setProperty("--center-margin", margin + "px");
      root.style.setProperty("--content-height", contentHeight + "px");
    }
  );
}

/**
 * section generator
 */
function generateSections() {
  // console.log("ajax");
  $.getJSON(
    "./static/sections.json",
    (json: { [x: string]: { content: any; header: string } }) => {
      // console.log(json);
      Object.keys(json).forEach((id) => {
        let sectionElement = document.createElement("div");
        sectionElement.setAttribute("id", id + "-section");
        sectionElement.setAttribute("class", "section fadein");
        (document.getElementById("sections") as HTMLElement).appendChild(
          sectionElement
        );

        let headerElement = document.createElement("h2");
        headerElement.setAttribute("id", id + "-header");
        headerElement.setAttribute("class", "section-header");
        headerElement.innerText = json[id].header.toUpperCase();
        (document.getElementById(id + "-section") as HTMLElement).appendChild(
          headerElement
        );

        let contentElement = document.createElement("span");
        contentElement.setAttribute("id", id + "-content");
        contentElement.setAttribute("class", "section-content");
        (document.getElementById(id + "-section") as HTMLElement).appendChild(
          contentElement
        );

        let content = json[id].content;

        if (id === "artists") {
          // iterate through object keys with for of loop
          for (let key of Object.keys(content)) {
            let obj = content[key];

            let paragraph = document.createElement("div");
            paragraph.setAttribute("class", "artist-link credit");
            paragraph.innerHTML =
              '<a target="_blank" href="' +
              obj.url +
              '">' +
              obj.name +
              "</div>";

            (
              document.getElementById(id + "-content") as HTMLElement
            ).appendChild(paragraph);
          }
        } else {
          Object.values(content).forEach((obj) => {
            let paragraph = document.createElement("p");
            paragraph.setAttribute("class", "section-paragraph");
            paragraph.innerText = obj as string;

            (
              document.getElementById(id + "-content") as HTMLElement
            ).appendChild(paragraph);
          });
        }

        let divider = document.createElement("div");
        divider.setAttribute("class", "divider");
        (document.getElementById(id + "-content") as HTMLElement).appendChild(
          divider
        );
      });
    }
  );
}

async function loadBackgroundImage(path: string) {
  (document.getElementById("background") as HTMLElement).innerHTML =
    '<img src="' + path + '"></img>';
}

async function loadBackgroundVideo(path: string) {
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

  (document.getElementById("background") as HTMLElement).appendChild(video);

  await new Promise((resolve) => setTimeout(resolve, 100));
  fadeInElement(video);
}

/**
 * iterates through all elements with provided className
 * @param className className to look for
 */
async function fadeIn(className: string) {
  let elements = document.getElementsByClassName(className);
  // console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    // console.log(element);
    fadeInElement(element);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  loadBackgroundVideo("mp4/background.mp4");
}

/**
 * fades in provided element
 * @param {Element} element element to apply class to
 */
function fadeInElement(element: Element) {
  let originalClass = element.getAttribute("class");

  element.setAttribute("class", originalClass + " startFade");
}

async function addGlaceon() {
  // modal.style.visibility = "visible";
  modal.style.setProperty("pointer-events", "auto");

  console.log("wow! you found the glaceon!");
  glaceon = true;
  modal.style.setProperty("opacity", "1");
  (modal.childNodes[1] as HTMLElement).style.setProperty(
    "transform",
    "translateY(0px)"
  );
}
async function removeGlaceon() {
  // modal.style.visibility = "hidden";
  modal.style.setProperty("pointer-events", "none");

  console.log("ok bye :(");
  glaceon = false;
  modal.style.setProperty("opacity", "0");
  (modal.childNodes[1] as HTMLElement).style.setProperty(
    "transform",
    "translateY(32px)"
  );
}

let compare = function (a: string | any[], b: string | any[]) {
  // if any array is a falsy value, return
  if (!a) return false;
  if (!b) return false;

  // compare lengths - can save a lot of time
  if (a.length != b.length) return false;

  for (var i = 0, l = a.length; i < l; i++) {
    // Check if we have nested arrays
    if (a[i] instanceof Array && b[i] instanceof Array) {
      // recurse into the nested arrays
      if (!a[i].equals(b[i])) return false;
    } else if (a[i] != b[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", { enumerable: false });

window.onclick = function (event) {
  if (!glaceon) return;
  if (event.target == modal) {
    removeGlaceon();
  }
};
