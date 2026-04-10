var con=document.querySelector("#con");
var icon=document.querySelector('#icon');
var btn=document.querySelector('#btn');
btn.addEventListener('click',()=>{
    if (con.classList.contains('dark')){
        con.classList.remove('dark');
        con.classList.add('light')
        icon.classList.remove('ri-lightbulb-ai-line')
        icon.classList.add('ri-lightbulb-ai-fill')
        btn.innerHTML="OFF"
    }
    else{
        con.classList.remove('light');
        con.classList.add('dark')
        icon.classList.remove('ri-lightbulb-ai-fill')
        icon.classList.add('ri-lightbulb-ai-line')
        btn.innerHTML="ON"
    }
    
})
