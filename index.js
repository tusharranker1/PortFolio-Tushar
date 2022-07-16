

// ======Target Element============
const openButton1 = document.getElementById("openBtn1")
const openButton2 = document.getElementById("openBtn2")
const openButton3 = document.getElementById("openBtn3")
const contactContent = document.getElementById("contact-content")
const closeBtnId = document.getElementById("closeBtnId")
const projectHeading = document.getElementsByClassName("project-heading")[0]
const projectImg = document.getElementById("project-img")
const projectContent = document.getElementsByClassName("project-content")[0]
const showSkillBtn = document.getElementById("show-skill")
const laptopScreen = document.getElementById("laptop-screen")
const rightClick = document.getElementsByClassName("image2")[0]
const leftClick = document.getElementsByClassName("image1")[0]
const linkNavigation1 = document.getElementById("link-navigation1")
const linkNavigation2 = document.getElementById("link-navigation2")
const projectNavigation1 = document.getElementById("project-btn1")
const projectNavigation2 = document.getElementById("project-btn2")
const closeProject = document.getElementsByClassName("closing-project")[0]

// ======variables=================
let checkProjectClick = false
let checkScreenOpen = false
let screenPosition = 1
let projectPosition = 1
// ======Event Listner=============

openButton1.addEventListener("click",openDivision);
openButton2.addEventListener("click",openDivision);
openButton3.addEventListener("click",openDivision);
closeBtnId.addEventListener("click",closeDivision);
projectHeading.addEventListener("mouseover",()=>{
    projectImg.style.opacity="1"
})
projectHeading.addEventListener("mouseout",()=>{
    if(checkProjectClick==true)return
    projectImg.style.opacity="0.5"
})
projectHeading.addEventListener("click",projectClick)
showSkillBtn.addEventListener("click" , openLatop);

rightClick.addEventListener("click",moveScreenRight)
leftClick.addEventListener("click",moveScreenLeft)

projectNavigation1.addEventListener("click",moveUp)
projectNavigation2.addEventListener("click",moveDown)
closeProject.addEventListener("click",closeProjectFunction)

//====== function==================

function openDivision()
{
    contactContent.classList.remove("contactAnimation2")
    contactContent.classList.add("contactAnimation1")
    contactContent.style.display="flex"
    setTimeout(()=>{
    contactContent.style.height="35%"
    },1000)
}
function closeDivision(){ 
    contactContent.classList.remove("contactAnimation1")
    contactContent.classList.add("contactAnimation2")   
    setTimeout(()=>{
        contactContent.style.display="none"
    },1100)
    setTimeout(()=>{
        contactContent.style.height="0%"
    },1000)
}
function projectClick(){
    checkProjectClick = true;
    projectImg.style.opacity="1"
    projectHeading.style.fontSize="0rem"
    projectHeading.style.height="0%"
    projectHeading.style.padding="0%"
    projectContent.style.width="60%"
    projectContent.style.fontSize="1rem"
}

function openLatop()
{
    console.log(showSkillBtn.innerHTML)
    if(showSkillBtn.innerHTML=="Close"){
        laptopScreen.style.transform="rotateX(90deg)"
        showSkillBtn.innerHTML="open"
        checkScreenOpen = false
    }
    else{
        laptopScreen.style.transform="rotateX(10deg)"
        showSkillBtn.innerHTML="Close"
        checkScreenOpen = true
    }
}

function moveScreenRight()
{
    if(screenPosition>=7)return
    if(checkScreenOpen)
    {
        screenPosition++;
        var position = "#skill"+screenPosition;
        linkNavigation2.setAttribute("href" , position)
    }
}
function moveScreenLeft(){
    if(screenPosition<=1)return
    else{
        screenPosition--;
        var position = "#skill"+screenPosition;
        linkNavigation1.setAttribute("href" , position)
    }
}
function moveDown()
{
    if(projectPosition>=8 || projectClick==false)return;
    else{
        projectPosition++;
        var position = "#pb"+projectPosition
        document.getElementById("project-link2").setAttribute("href",position)
    }
}
function moveUp()
{
    if(projectPosition<=1 || projectClick==false)return;
    else{
        projectPosition--;
        var position = "#pb"+projectPosition
        document.getElementById("project-link1").setAttribute("href",position)
    }
}

function closeProjectFunction()
{
    projectContent.style.width="0%"
    projectContent.style.fontSize="0rem"
    projectHeading.style.fontSize="3rem"
    projectHeading.style.height="7%"
    projectHeading.style.padding="10px"
    checkProjectClick=false
}