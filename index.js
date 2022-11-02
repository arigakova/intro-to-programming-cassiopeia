gsap.to(".header", { y: 10, ease: "bounce", duration: 0.5 })
gsap.from(".link-animated", { opacity: 0, duration: 0.5, stagger: 1 })

var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector("footer");
var copyright = document.createElement("p");
copyright.innerHTML = `Anna Ryzhakova © ${thisYear}`;
footer.appendChild(copyright);
var skills = ["HTML", "CSS", "JavaScript"];
var skillsSection = document.getElementById("skills");
var skillsList = skillsSection.querySelector("ul");
skillsList.classList.add("my-skill-list")
for (let i = 0; i < 3; i++) {
    var skill = document.createElement("li");
    skill.innerText = skills[i];
    skill.classList.add("my-skill-list-item")
    skillsList.appendChild(skill);
}

var messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    var name = event.target.name.value;
    var email = event.target.elements.email.value;
    var message = event.target.elements.message.value;
    console.log(`${name} ${email} ${message}`);
    var messageSection = document.getElementById("messages");
    var messageList = messageSection.getElementsByTagName("ul")[0];
    var newMessage = document.createElement("li");
    newMessage.innerHTML =
        '<a href="mailto:' +
        email +
        '">' +
        name +
        "</a>" +
        "<span>" +
        message +
        "</span>";
    var removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", (event) => {
        var entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    event.target.reset();
});


function githubRequestCallback() {
    var repositories = JSON.parse(this.response)
    console.log(repositories)
    var projectSection = document.getElementById("projects")
    var projectList = projectSection.querySelector("ul")
    projectList.classList.add("my-project-list")
    for (let i = 0; i < repositories.length; i++) {
        var project = document.createElement("li")
        // project.classList.add("my-project-list-item")
        project.innerHTML = `
            <a href="${repositories[i].html_url}" target="_blank" title="${repositories[i].name}" class="link">
            ${repositories[i].name}
            </a>
        `
        projectList.appendChild(project)
    }
}

var githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/arigakova/repos")
githubRequest.addEventListener("load", githubRequestCallback)
githubRequest.send()






