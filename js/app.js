console.log("aasanhai");

const prev = document.querySelectorAll("#slider img")[0]
const next = document.querySelectorAll("#slider img")[1]
const slider = document.getElementById("slider")
const para = document.querySelector(".para p")
const testName = document.querySelector(".info span")
const pro = document.querySelector(".info p")
const bg = document.querySelector(".img-avtar img")

next.addEventListener("click", () => {
    para.innerHTML = `  “ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`;
    pro.innerHTML = `<span> John Tarkpor</span> Junior Front-end Developer`
    bg.src = "/images/image-john.jpg"
    console.log('aman');

})


prev.addEventListener("click", () => {
    para.innerHTML = `  “ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`;
    pro.innerHTML = `<span>  Tanya Sinclair</span>   UX Engineer`
    bg.src = "/images/image-tanya.jpg"
    console.log('aman');


})
