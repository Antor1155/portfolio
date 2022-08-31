
// design to table circle animation for hovering over the file 

document.getElementById("file").addEventListener("mouseover", function () {
    document.querySelectorAll('.floatingCircle').forEach(circle => {
        circle.style.opacity = "1";


        // this part solve the bug : if mouse out of file and comes back before 500ms then it add active section then remove it before the removing function was waiting for 500 ms to remove any active classname add 
        if (!circle.matches(".active")) {
            circle.classList.add("active");
        }
        else {
            setTimeout(() => {
                circle.classList.add("active");
            }, 500);
        }
    });
})


document.getElementById("file").addEventListener("mouseout", function () {
    document.querySelectorAll('.floatingCircle').forEach(circle => {
        circle.style.opacity = "0";
        setTimeout(() => {
            circle.classList.remove("active");
        }, 500);

    });
})

