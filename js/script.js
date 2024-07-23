const preLoader = document.querySelector("#preloader");
window.addEventListener("load", () => {
    preLoader.style.display = "none";
})

const progressBars = document.querySelectorAll(".donation-progress");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const progressBarBox = entry.target.nextElementSibling;
        const targetPercent = parseInt(entry.target.getAttribute("data-width"), 10);
        let animated = false;
        if (entry.isIntersecting && !animated) {
            let initialPercent = 0;
            let main = setInterval(frame, 50);
            function frame() {
                if (initialPercent >= targetPercent) {
                    clearInterval(main);
                } else {
                    initialPercent++;
                    entry.target.style.width = initialPercent + "%";
                    if ((initialPercent >= 92) && (initialPercent <= 100)) {
                        progressBarBox.style.left = "93%";
                    } else {
                        progressBarBox.style.left = `${initialPercent - 5}%`;
                    }
                    progressBarBox.textContent = `${initialPercent}%`;
                }
            }
            animated = true;
            observer.unobserve(entry.target);
        }
    })
},
    {
        threshold: 0.5
    }
);

progressBars.forEach((progressBar) => {
    observer.observe(progressBar);
});

const projCards = document.querySelector(".proj-cards");
if(projCards){
    Array.from(projCards.children).forEach((projCard) => {
        const projCardId = projCard.getAttribute("id");
        const projCardImg = projCard.querySelector("a");
        projCardImg.href = `/pages/project-subpage.html?project=${projCardId}`;
    })
}

const blogCards = document.querySelector(".blog-cards");
if(blogCards){
    Array.from(blogCards.children).forEach((blogCard) => {
        const blogCardId = blogCard.getAttribute("id");
        const blogCardButton = blogCard.querySelector("a");
        blogCardButton.href = `/pages/blog-subpage.html?blog=${blogCardId}`;
    })
}



// const observer2 = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("showY");
//         } else {
//             entry.target.classList.remove("showY");
//         }
//         observer.unobserve(entry.target);
//     })
// }, {
//     threshold: 0.1
// })

// const homeBannerContent=document.querySelector(".home-banner").children;

// window.addEventListener("load",()=>{
//     Array.from(homeBannerContent).forEach((content)=>{
//         content.classList.add("hide");
//         content.classList.add("show");
//     })
// })

// Array.from(homeBannerContent).forEach((content)=>{
//     content.classList.add("hideY");
//     observer2.observe(content);
// });

// const homeTeamCards=document.querySelector(".home-team-cards");
// homeTeamCards.classList.add("hideX");
// const observer3=new IntersectionObserver((entries,observer)=>{
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             entry.target.classList.add("showX");
//         }else{
//             entry.target.classList.remove("showX");
//         }
//         observer.unobserve(entry.target);
//     })
// },{
//     threshold:0.1
// })

// observer3.observe(homeTeamCards);
