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


function textToAudio1() {
    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = "en-US";
    speech.text = "This is my Details Page.! You can explore it by hovering over the card elements.";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
}
function textToAudio2() {
    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = "en-US";
    speech.text = "This is my Coding Skills Page! You can simply read through the content and hover over the elements.";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
}
function textToAudio3() {
    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = "en-US";
    speech.text = "This is my  Certification Page! You can use the button to view other certifications. By clicking 'Show Credential,' you'll be directed to the official certification website.";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
}
function textToAudio4() {
    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = "en-US";
    speech.text = "These are my Projects Page! You can explore the code by clicking the 'Code' button, and for a demo of each project, use the 'Demo' button. Scroll to see all the projects.";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
}
function textToAudio5() {
    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = "en-US";
    speech.text = "These are my resumes! You can explore them by sliding through the options.";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
}
function textToAudio6() {
    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = "en-US";
    speech.text = "The resume was successfully downloaded";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
}
function textToAudio7() {
    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = "en-US";
    speech.text = "This is the Message Box Page! You can fill in all the details, and by clicking the 'Submit' button, you will send a message to my email.";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
}
function textToAudio8() {
    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = "en-US";
    speech.text = " This is my Git repository! You can explore all the code and resources.";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
}
function textToAudio9() {
    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = "en-US";
    speech.text = " This is my Contacts Page! You can simply click the icons to connect with! on different social media platforms.";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
}
function textToAudio10() {
    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = "en-US";
    speech.text = " Thank you for visiting my portfolio!";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
}