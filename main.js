
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
fileElement.addEventListener("click", function () {
    fileElement.classList.add("open");

    // when file opended, making blur all other section except the file 
    document.querySelectorAll("div").forEach(element => {
        if (!element.closest("#file")) {
            element.style.filter = "blur(5px)"
        }
    })

})

// closing the file 
document.getElementById("closeBtn").addEventListener("click", e => {
    fileElement.classList.remove("open");
    e.stopImmediatePropagation();

    // giving focus back to all other elements 
    document.querySelectorAll("div").forEach(element => {
        if (!element.closest("#file")) {
            element.style.filter = "none"
        }
    })

    // bringing all the previous pages to basic state 
    document.querySelectorAll(".seenPage").forEach(element => element.classList.remove("seenPage"));

})

// changing the file pages from unseen to seen side 
document.getElementById("nextBtn").addEventListener("click", function () {
    filePages = document.querySelectorAll("#filePages > div");

    unseenPages = Array.from(filePages).filter(element => !element.matches(".seenPage"));

    if (unseenPages.length > 0) {
        unseenPages[unseenPages.length - 1].classList.add("seenPage");
    }
})

// changing the file pages from seen to unseen side 
document.getElementById("previousBtn").addEventListener("click", function () {
    filePages = document.querySelectorAll(".seenPage");

    seenPages = Array.from(filePages)

    if (seenPages.length > 0) {
        seenPages[0].classList.remove("seenPage");
    }
})


// eye Animation 
document.querySelector('body').addEventListener('mousemove', function () {
    console.log("mouse moving")
    let eye = document.querySelectorAll(".eye");
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rot + "deg)"
    })
})






// from here the welcome section works 
// from here the welcome section works 
// from here the welcome section works 


document.getElementById("codedImg").addEventListener("click", function () {
    this.style.transform = "scale(100%)";
    this.style.boxShadow = "none";

    document.getElementById("codedImgAlert").style.opacity = 1;

    navigator.clipboard.writeText("MD Antor : Hoop we meet soon !!");
})


// disabeling all pointer events, so after animation finish, it can be rutned on
function DisablePointerEvents(e) {
    document.getElementById(e).style.pointerEvents = "none";
}
DisablePointerEvents("file");
DisablePointerEvents("backgroundWall");
DisablePointerEvents("momHoveringDiv");
DisablePointerEvents("sisImg");

// disabelignt the welcome section part when animation is done 
// and doing animation part of the room section 
const timedWelcomeSection = window.setInterval(function () {
    if (getComputedStyle(document.getElementById("welcomeSection")).opacity == 0) {

        //making that part display none : when animation finished of welcome section
        document.getElementById("welcomeSection").style.display = "none";

        clearInterval(timedWelcomeSection);

        // doing animation part of the room seciton 
        // ********************************************

        // manipulating backwall elements 
        function DisplayNone(element) {
            element.style.display = "none";
        }
        function FilterNone(id) {
            element = document.querySelector(id);
            element.style.filter = "none";
        }

        const ms = 700;
        const backWallElements = document.querySelectorAll(".sectionFilter");

        setTimeout(function () {
            backWallElements.forEach(e => {
                e.style.backgroundColor = "black";
                e.style.width = "105%";
            })

            setTimeout(function () { DisplayNone(backWallElements[2]) }, ms);
            setTimeout(function () { DisplayNone(backWallElements[1]) }, ms * 2);
            setTimeout(function () { DisplayNone(backWallElements[0]) }, ms * 3);

            setTimeout(function () { FilterNone("#file") }, ms * 4);
            setTimeout(function () { FilterNone("#character") }, ms * 5);
            setTimeout(function () { FilterNone("#chair") }, ms * 5);

            setTimeout(function () { FilterNone("#floor") }, 4500);
            setTimeout(function () { FilterNone("#table") }, 4500);
            setTimeout(function () { FilterNone("#tableBottom") }, 4500);
            setTimeout(function () { FilterNone("#tableLegs") }, 4500);
            setTimeout(function () { FilterNone(".middleRow") }, 4500);

            // pointer event to auto after animation of room section is done 
            setTimeout(function () {
                function EnablePointerEvents(e) {
                    document.getElementById(e).style.pointerEvents = "auto";
                }
                EnablePointerEvents("file");
                EnablePointerEvents("backgroundWall");
                EnablePointerEvents("momHoveringDiv");
                EnablePointerEvents("sisImg");

            }, 4500)

        }, 2000);
    }
}, 200)

