var skillsProgress=document.querySelector(".skills-progress");

var skills=['JAVASCRIPT','REACTJS','C++','PYTHON'];
var values=['40','15','40','10']

for(let i=0;i<skills.length;i++)
{
   var progressBox = document.createElement('div');
   progressBox.classList.add('progress-box');
   progressBox.innerHTML = `<div class="progress-text">
   <p>${skills[i]}</p>
   <p>${values[i]}%</p>
   </div>
   <div class="progress-bar-outer">
    <div class="progress-bar-inner" style="width:${values[i]}%;"></div>
   </div>`;

    skillsProgress.append(progressBox);
}

// hamburger

var hamButton=document.querySelector('.ham-btn')
var span1=document.querySelector('.span1')
var span2=document.querySelector('.span2')
var span3=document.querySelector('.span3')
var hamItems=document.querySelector('.ham-items')
function toggleButton()
{
    span1.classList.toggle('t1')
    span2.classList.toggle('remove')
    span3.classList.toggle('t2')
    hamItems.classList.toggle('ham-display')
}

hamButton.addEventListener('click',toggleButton)

function widthCheck(){
    if(window.innerWidth>1110)
    {
        span1.classList.remove('t1')
        span2.classList.remove('remove')
        span3.classList.remove('t2')
        hamItems.classList.remove('ham-display')
    }
}

window.addEventListener('resize',widthCheck)