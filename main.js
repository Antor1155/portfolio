// design to table circle animation for hovering over the file 

document.getElementById("file").addEventListener("mouseover", function () {
    document.querySelectorAll('.floatingCircle').forEach(circle => circle.style.opacity="1");
})

document.getElementById("file").addEventListener("mouseout", function () {
    document.querySelectorAll('.floatingCircle').forEach(circle => circle.style.opacity="0");
})

