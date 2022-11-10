var today = new Date();
var thisYear = today.getFullYear();
var copyright = document.createElement("p");
copyright.innerHTML = `Anna Ryzhakova © ${thisYear}`;
var myContacts = document.getElementById("footer-elements");
myContacts.prepend(copyright);

var skills = ["HTML", "CSS", "JavaScript"];
var skillsSection = document.getElementById("skills");
var skillsList = skillsSection.querySelector("ul");
skillsList.classList.add("list")
for (let i = 0; i < 3; i++) {
    var skill = document.createElement("li");
    skill.innerText = skills[i];
    skill.classList.add("list--skill-item")
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
    newMessage.innerHTML = '<a href="mailto:' + email + '">' + name + "</a>" + "<span>" + message + "</span>";
    newMessage.classList.add("list--message-item")
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

var projectSection = document.getElementById("projects")
var projectList = projectSection.querySelector("ul")
projectList.classList.add("list")
projectList.classList.add("list--remove-bullets")

fetch("https://api.github.com/users/arigakova/repos")
    .then((response) => response.json())
    .then(renderMyRepos)
    .catch(errorHandler)

function errorHandler(error) { alert(error) }

function renderMyRepos(repositories) {
    for (let i = 0; i < repositories.length; i++) {
        var project = document.createElement("li")
        project.innerHTML = `
            <a href="${repositories[i].html_url}" target="_blank" title="${repositories[i].name}" class="link link-animated">
            ${repositories[i].name}
            </a>`
        projectList.appendChild(project)
    }
}
