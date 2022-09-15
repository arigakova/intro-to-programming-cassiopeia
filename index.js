var today = new Date()
var thisYear = today.getFullYear()
var footer = document.querySelector("footer")
var copyright = document.createElement("p")
copyright.innerHTML = `Anna ${thisYear}`
footer.appendChild(copyright)
var skills = ["HTML", "CSS", "JavaScript"]
var skillsSection = document.getElementById("skills")
var skillsList = skillsSection.querySelector("ul")
for(let i=0; i<3; i++) {
    var skill = document.createElement("li")
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
}


