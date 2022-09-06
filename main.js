
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

// closing the file 
document.getElementById("closeBtn").addEventListener("click", e=>{
    fileElement.classList.remove("open");
    e.stopImmediatePropagation();
    
    // giving focus back to all other elements 
    document.querySelectorAll("div").forEach(element =>{
        if(!element.closest("#file")){
            element.style.filter = "none"
        }
    })

    // bringing all the previous pages to basic state 
    document.querySelectorAll(".seenPage").forEach(element => element.classList.remove("seenPage"));

})

// changing the file pages from unseen to seen side 
document.getElementById("nextBtn").addEventListener("click", function(){
    filePages = document.querySelectorAll("#filePages > div");
 
    unseenPages = Array.from(filePages).filter(element => !element.matches(".seenPage"));

    if(unseenPages.length > 0){
        unseenPages[unseenPages.length-1].classList.add("seenPage");
    }
})

// changing the file pages from seen to unseen side 
document.getElementById("previousBtn").addEventListener("click", function(){
    filePages = document.querySelectorAll(".seenPage");
 
    seenPages = Array.from(filePages)

    if(seenPages.length > 0){
        seenPages[0].classList.remove("seenPage");
    }
})


// eye Animation 
document.querySelector('body').addEventListener('mousemove', function(){
    console.log("mouse moving")
    let eye = document.querySelectorAll(".eye");
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth/2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight/2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180/Math.PI)* -1) + 270;
        eye.style.transform = "rotate(" + rot +"deg)"
    })
})