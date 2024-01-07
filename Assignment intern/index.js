let skills = [
    {
        name: "HTML",
    },
    {
        name: "CSS",
    },
    {
        name: "JavaScript",
    },
    {
        name: "Java",
    },
    {
        name: "Reactjs",
    },
    {
        name: "Nodejs",
    },
    {
        name: "Expressjs",
    },
    {
        name: "Mongodb",
    },
    {
        name: "Git&Github",
    },
    {
        name: "Mysql",
    },
    {
        name: "Rest API",
    }
]

let skill_section = document.getElementsByClassName("skills_section")[0];
for (let i = 0; i < skills.length; i++) {
    skill_section.innerHTML += `<div class="cards">
    <img src="./assets/${skills[i].name}.svg" /><p>${skills[i].name}</p></div>`
}

let menu = document.getElementById("menu");
let ul=document.getElementById("ul");
let li=document.getElementsByClassName("lst");

menu.addEventListener("click",()=>{
    if(ul.classList.contains("open")){
        ul.className = "close ";
        li.className = "lst li"
    }else{
        ul.className = "open";
        li.className = "lst li_open li"
    }
})


// footer
// let year = new Date().getFullYear();
// let footer = document.getElementById("footer");


// footer.innerText = `© Copyright   - All Right Reserve.`;