
// design to table circle animation for hovering over the file 
fileElement = document.getElementById("file");

fileElement.addEventListener("mouseout", function () {
    document.querySelectorAll('.floatingCircle').forEach(circle => {
        circle.style.opacity = "0";
        setTimeout(() => {
            circle.classList.remove("active");
        }, 500);

    });
})

fileElement.addEventListener("mouseover", function () {
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


// design on file when clicked on the file 
fileElement.addEventListener("click", function(){
    fileElement.classList.add("open");

    // when file opended, making blur all other section except the file 
    document.querySelectorAll("div").forEach(element =>{
        if(!element.closest("#file")){
            element.style.filter = "blur(5px)"
        }
    })

})