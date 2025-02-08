document.addEventListener("DOMContentLoaded", function() {
    const btn2 = document.querySelector(".btn2");
    
    btn2.addEventListener("mouseover", function() {
        const randomX = Math.random() * (window.innerWidth - btn2.clientWidth);
        const randomY = Math.random() * (window.innerHeight - btn2.clientHeight);
        btn2.style.left = randomX + "px";
        btn2.style.top = randomY + "px";
    });
});