var toggle = document.getElementById("toggle");
var container = document.getElementById("container");

toggle.onclick = function () {
    container.classList.toggle('active');
}
let me = document.querySelector('.me')
let Coding = document.querySelector('.Coding')
let Certification = document.querySelector('.Certification')
let Projects = document.querySelector('.Projects')
let Resume = document.querySelector('.Resume')
let ResResumeDownume = document.querySelector('.ResumeDown')
let MessageBox = document.querySelector('.MessageBox')
let Git = document.querySelector('.Git')
let contact = document.querySelector('.contact')
let close1 = document.querySelector('.close')




me.addEventListener('click',function(){
    window.open("https://manjunathgoudar404.github.io/AboutMe/")
})
Coding.addEventListener('click',function(){
    window.open("https://manjunathgoudar404.github.io/Skills/")
})
Certification.addEventListener('click',function(){
    window.open("https://manjunathgoudar404.github.io/Certification/")
})
Projects.addEventListener('click',function(){
    window.open("https://manjunathgoudar404.github.io/Pojects/")
})
Resume.addEventListener('click',function(){
    
    window.open("https://www.canva.com/design/DAGNblc5zv8/G7LDaCtrtzjxgxcrit4uBQ/view?utm_content=DAGNblc5zv8&utm_campaign=designshare&utm_medium=link&utm_source=editor")
})
// ResResumeDownume.addEventListener('click',function(){
//     window.open("")
// })
MessageBox.addEventListener('click',function(){
    window.open("https://manjunathgoudar404.github.io/MessageBox/")
})
Git.addEventListener('click',function(){
    window.open("https://github.com/ManjunathGoudar404/")
})
contact.addEventListener('click',function(){
    window.open("https://manjunathgoudar404.github.io/Contacts/")
})
close1.addEventListener('click',function(){
    window.open("https://manjunathgoudar404.github.io/FirstPage/")
})