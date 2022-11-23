
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



// ac on/off button and character section 
let acStatus = true;
document.getElementById("acLight").addEventListener("click", function () {

    acStatus = !acStatus;

    const hairElement = document.getElementById("hair");
    const woolElement = document.getElementById("wools");
    const ventPlates = Array.from(document.getElementsByClassName("ventPlate"));

    if (acStatus) {
        hairElement.classList.add("acOn");
        woolElement.classList.add("acOn");

        ventPlates.forEach(e => {
            e.style.animation = "ventSwing 5s infinite alternate-reverse";
        })

        this.style.backgroundColor = 'rgb(0, 255, 0)';
    }
    else {
        hairElement.classList.remove("acOn");
        woolElement.classList.remove("acOn");

        ventPlates.forEach(e => {
            e.style.animation = "none";
        })

        this.style.backgroundColor = '#ff5252';
    }
})

document.getElementById("ac").addEventListener("mouseenter", function () {
    document.getElementById("acLight").style.backgroundColor = "yellow";
})

document.getElementById("ac").addEventListener("mouseleave", function () {
    if (acStatus) {
        document.getElementById("acLight").style.backgroundColor = 'rgb(0, 255, 0)';
    }
    else {
        document.getElementById("acLight").style.backgroundColor = '#ff5252';
    }
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


// disabeling all pointer events, so after animation finish, it can be rutned on and doesn't interfare the animation 

function DisablePointerEvents(e) {
    document.getElementById(e).style.pointerEvents = "none";
}
DisablePointerEvents("tableSection");
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

        //         // doing animation part of the room seciton 
        //         // ********************************************

        //         // manipulating backwall elements 
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

            setTimeout(function () {
                FilterNone("#character");
                FilterNone("#chair");
            }, ms * 5);

            setTimeout(function () {
                document.getElementsByTagName("BODY")[0].style.backgroundColor = "rgb(201 211 175)";

                document.getElementById("backWallJointPart").style.display = "block";
                document.querySelector("body>div>p").style.color = "#eaac6c";

                FilterNone("#table");
                FilterNone("#tableBottom");
                FilterNone("#tableLegs");
                FilterNone(".middleRow");
                FilterNone("#mail");
                FilterNone("#projectBoard");
                FilterNone("#tools");
                FilterNone("#fbLink");
                FilterNone("#gitPad");
                FilterNone("#linkedInCup");
                FilterNone("#cupHolder");
                FilterNone(".designation");
                FilterNone("#middleDesignation");
                FilterNone("#rightDesignation");
            }, 5000);

            // pointer event to auto after animation of room section is done 
            setTimeout(function () {
                function EnablePointerEvents(e) {
                    document.getElementById(e).style.pointerEvents = "auto";
                }
                EnablePointerEvents("tableSection");
                EnablePointerEvents("backgroundWall");
                EnablePointerEvents("momHoveringDiv");
                EnablePointerEvents("sisImg");

            }, 5000)

        }, 2500);
    }
}, 200)



// adding link to fb, git pad and link cup 
document.getElementById("fbLink").addEventListener("click", function () {
    if (confirm("Opening Facebook in new tab ---?")) {
        window.open("https://www.facebook.com/md.antor.16/");
    }
})

document.getElementById("gitPad").addEventListener("click", function () {
    if (confirm("Opening GitHub in new tab ---?")) {
        window.open("https://github.com/Antor1155");
    }

})

document.getElementById("linkedInCup").addEventListener("click", function () {
    if (confirm("Opening Linkedin in new tab ---?")) {
        window.open("https://www.linkedin.com/in/md-antor/");
    }

})


// when clicking on certificate, will show the pdf of the certificate in full screen 
const pdfSection = document.getElementById("pdfSection");

const mobileLikeContainer = document.getElementById("certificatePdf");

let allCertificateImg = Array.from(document.querySelectorAll(".certificateWithPdf"));

allCertificateImg.forEach(certificate => {
    certificate.addEventListener("click", function () {

        // plus 2 because one extra certificate in front and here index starts from 0
        let certificateNumber = allCertificateImg.indexOf(certificate) + 2;

        console.log("clicked certificate is : " + certificateNumber);

        mobileLikeContainer.innerHTML = `<iframe src="images/certificatesPdf/md-antor's-certificates.pdf#view=fit&page=${certificateNumber}" frameborder="0" width="100%" height="100%"></iframe>`;


        // when clicked , remove out of view class form the pdf section

        if (pdfSection.classList.contains("outOfview")) {
            pdfSection.classList.remove("outOfview");
        }

    });
})



// funciton to show the projects form projectboard into pdf device (mobile) 
let projects = Array.from(document.querySelectorAll(".project"));

projects.forEach(project => {
    project.addEventListener("click", function () {

        // plus 2 because one extra project in front and here index starts from 0
        let projectNumber = projects.indexOf(project);

        console.log("clicked project is : " + projectNumber);

        switch (projectNumber) {
            case 0:
                mobileLikeContainer.innerHTML = `<iframe src="http://127.0.0.1:5500/" frameborder="0" width="100%" height="100%"></iframe>`;
                break;
            case 1:
                mobileLikeContainer.innerHTML = `<iframe src="https://finalwarehouse-4650b.web.app/" frameborder="0" width="100%" height="100%"></iframe>`;
                break;
            case 2:
                mobileLikeContainer.innerHTML = `<iframe src="https://independent-photographer-726fa.web.app/" frameborder="0" width="100%" height="100%"></iframe>`;
                break;
            case 3:
                mobileLikeContainer.innerHTML = `<iframe src="https://warehouse-734e0.web.app/" frameborder="0" width="100%" height="100%"></iframe>`;
                break;

        }

        // when clicked , remove out of view class form the pdf section
        if (pdfSection.classList.contains("outOfview")) {
            pdfSection.classList.remove("outOfview");
        }

    });
})




// function for when clicked on pdf close button 
document.getElementById("pdfSection").classList.add("outOfview");

function removePdf() {
    document.getElementById("pdfSection").classList.add("outOfview");
}


// function to send mail to backend without reloading the page 
function sendMail(event) {
    event.preventDefault();

    let email = `from: ${event.target.from.value}  //

subject: ${event.target.subject.value} //

${event.target.mail.value}`;

    fetch("https://antorprotfolio.herokuapp.com/email", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ email, subject: event.target.subject.value })
    }).then(res => res.json())
        .then(data => {
            console.log(data);

            // if mail is delivered to me successfully then this portion will work 
            if (data.result.includes("success")) {
                alert("Mailed successfully  (^_^)")
            }
            else {
                alert("mail failed but saved in database, Antor will notice soon !!")
            }

        });

    event.target.reset();

};


// for laoding page 
window.addEventListener("load", function () {

    Array.from(document.querySelectorAll("#loadEyes>div>div")).forEach(element => {
        element.style.animation = "none";
    });

    document.getElementById("loader").style.pointerEvents = "auto";

    document.getElementById("loadFigure").style.animation = "1s smile forwards";

    document.querySelector("#loadingText>div").style.display = "none";
    document.querySelector("#loadingText button").style.display = "block";
})


document.getElementById("loader").addEventListener("click", function () {
    document.getElementById("loader").style.animation = "offScreenLoad 1s  forwards";

    document.getElementById("welcomeSection").classList.add("loaded");
})



// modifying some css for 4:3 aspect ratio screen 
console.log(screen.width, screen.height);

console.log(screen.width / 4 * 3);

if (screen.width / 4 * 2.7 < screen.height) {
    document.querySelector("body>section").classList.add("ipadRatio");

    document.querySelector("body>div").style.display = "block";
    document.querySelector("#tableSection").style.bottom = "10%";
    document.querySelector("#chair").style.bottom = "-3%";
    document.querySelector("#character").style.bottom = "17vh";

    
}


// orientation change event listner  and reload the page
window.addEventListener("orientationchange", function(){
    location.reload();
    console.log("orientation detection workd")
})