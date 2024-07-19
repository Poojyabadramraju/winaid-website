const progressBars = document.querySelectorAll(".donation-progress");
const percentages = [60, 80, 90];

progressBars.forEach((progressBar) => {
    let progressBarBox = progressBar.nextElementSibling;
    let targetPercent=parseInt(progressBar.getAttribute("data-width"),10);
    let animated = false;
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                let initialPercent = 0;
                let main = setInterval(frame, 50);
                function frame() {
                        if (initialPercent >= targetPercent) {
                            clearInterval(main); 
                        } else {
                            initialPercent++;
                            progressBar.style.width = initialPercent + "%";
                            if ((initialPercent >= 92) && (initialPercent <= 100)) {
                                progressBarBox.style.left = "93%"; 
                            } else {
                                progressBarBox.style.left = `${initialPercent - 5 }%`;
                            }
                            progressBarBox.textContent = `${initialPercent}%`;
                        }
                }
                animated = true;
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(progressBar);
});

// const progressBar = document.querySelector(".donation-progress");
// const percentages = [60, 80, 90];

// let progressBarBox = document.querySelector(".progress-bar-box");
//     let targetPercent=parseInt(progressBar.getAttribute("data-width"),10);
//     let animated = false;
//     let observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting && !animated) {
//                 let initialPercent = 0;
//                 let main = setInterval(frame, 50);
//                 function frame() {
//                         if (initialPercent >= 80) {
//                             clearInterval(main); 
//                         } else {
//                             initialPercent++;
//                             progressBar.style.width = initialPercent + "%";
//                             if ((initialPercent >= 92) && (initialPercent <= 100)) {
//                                 progressBarBox.style.left = "93%"; 
//                             } else {
//                                 progressBarBox.style.left = initialPercent + 5 + "%";
//                             }
//                             progressBarBox.textContent = `${initialPercent}%`;
//                         }
//                 }
//                 animated = true;
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         threshold: 0.5
//     });

//     observer.observe(progressBar);