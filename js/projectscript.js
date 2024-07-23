window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const project = urlParams.get("project");
    const projDocumentTitle = document.querySelector("title");
    const projBannerTitle = document.querySelector(".proj-banner-title");
    const projBannerImage = document.querySelector(".proj-banner-img");
    const projImage = document.querySelector(".proj-img");
    const projAdmin = document.querySelector(".proj-admin");
    const projDate = document.querySelector(".proj-date");
    const projComments = document.querySelector(".proj-comments");
    const projContent1 = document.querySelector(".proj-content-1");
    const projContent2 = document.querySelector(".proj-content-2");
    const projDonatedPercent = document.querySelector(".proj-donated-percent");
    const projDonateGoal = document.querySelector(".proj-donate-goal");
    const projDonatedAmount = document.querySelector(".proj-donated-amount");
    const projDonars = document.querySelectorAll(".proj-donars");
    const projSummaryContent = document.querySelector(".proj-summary-content");
    const projDonarsContent = document.querySelector(".proj-donars-content");
    const projChallengeContent = document.querySelector(".proj-challenge-content");
    const donarCards = document.querySelector(".donar-cards");

    switch (project) {
        case "wildlife-awareness-campaign":
            updateProject1Content();
            break;
        case "marine-conservation-efforts":
            updateProject2Content();
            break;
        case "forest-restoration-project":
            updateProject3Content();
            break;
        case "protecting-endangered-species":
            updateProject4Content();
            break;
        default:
            updateProject1Content();
            break;
    }

    function updateProject1Content() {
        const projectDonars = [
            {
                donarImg: '/media/donar-1.jpg',
                donarName: 'Micheal Clark',
                donarAmount: '$500',
                donarDate: 'July 23, 2024'
            },
            {
                donarImg: '/media/donar-2.jpg',
                donarName: 'David Roy',
                donarAmount: '$1000',
                donarDate: 'July 23, 2024'
            },
            {
                donarImg: '/media/donar-1.jpg',
                donarName: 'George lord',
                donarAmount: '$1200',
                donarDate: 'July 23, 2024'
            }
        ];
        projDocumentTitle.textContent = "Wildlife Awareness Campaign";
        projBannerTitle.textContent = "Wildlife Awareness Campaign";
        projBannerImage.src = '/media/cheetah.jpg';
        projImage.src = '/media/projectscardimg1.jpg';
        projAdmin.textContent = 'admin';
        projDate.textContent = '23 July, 2024',
            projComments.textContent = '0 Comments',
            projContent1.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
        projContent2.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
        projSummaryContent.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.";
        projChallengeContent.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.";
        projDonarsContent.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.";
        projDonars.forEach((donars) => {
            donars.textContent = '3'
        })
        projDonatedPercent.textContent = '80%'
        projDonatedAmount.textContent = '$1200.00';
        projDonateGoal.textContent = '$4000.00';
        projectDonars.forEach((donar) => {
            const parentDiv = document.createElement("div");
            parentDiv.classList.add("donar-card")
            donarCards.appendChild(parentDiv);
            const imageDiv = document.createElement("div");
            parentDiv.appendChild(imageDiv);
            const image = document.createElement("img");
            image.src = donar.donarImg;
            imageDiv.appendChild(image);
            const name = document.createElement("p");
            name.textContent = donar.donarName;
            name.classList.add("donar-name")
            parentDiv.appendChild(name);
            const amount = document.createElement("p");
            amount.textContent = donar.donarAmount;
            amount.classList.add("donar-amount")
            parentDiv.appendChild(amount);
            const date = document.createElement("p");
            date.textContent = donar.donarDate;
            date.classList.add("donar-date")
            parentDiv.appendChild(date);
        })
    }

    function updateProject2Content() {
        const projectDonars = [
            {
                donarImg: '/media/donar-1.jpg',
                donarName: 'Micheal Clark',
                donarAmount: '$500',
                donarDate: 'July 23, 2024'
            },
            {
                donarImg: '/media/donar-2.jpg',
                donarName: 'David Roy',
                donarAmount: '$1000',
                donarDate: 'July 23, 2024'
            },
            {
                donarImg: '/media/donar-1.jpg',
                donarName: 'George lord',
                donarAmount: '$1200',
                donarDate: 'July 23, 2024'
            }
        ];
        projDocumentTitle.textContent = "Marine Conservation Efforts";
        projBannerTitle.textContent = "Marine Conservation Efforts";
        projBannerImage.src = '/media/cheetah.jpg';
        projImage.src = '/media/projectscardimg2.jpg';
        projAdmin.textContent = 'admin';
        projDate.textContent = '23 July, 2024',
            projComments.textContent = '0 Comments',
            projContent1.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
        projContent2.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
        projSummaryContent.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.";
        projChallengeContent.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.";
        projDonarsContent.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.";
        projDonars.forEach((donars) => {
            donars.textContent = '3'
        })
        projDonatedPercent.textContent = '60%'
        projDonatedAmount.textContent = '$1200.00';
        projDonateGoal.textContent = '$4000.00';
        projectDonars.forEach((donar) => {
            const parentDiv = document.createElement("div");
            parentDiv.classList.add("donar-card")
            donarCards.appendChild(parentDiv);
            const imageDiv = document.createElement("div");
            parentDiv.appendChild(imageDiv);
            const image = document.createElement("img");
            image.src = donar.donarImg;
            imageDiv.appendChild(image);
            const name = document.createElement("p");
            name.textContent = donar.donarName;
            name.classList.add("donar-name")
            parentDiv.appendChild(name);
            const amount = document.createElement("p");
            amount.textContent = donar.donarAmount;
            amount.classList.add("donar-amount")
            parentDiv.appendChild(amount);
            const date = document.createElement("p");
            date.textContent = donar.donarDate;
            date.classList.add("donar-date")
            parentDiv.appendChild(date);
        })

    }

    function updateProject3Content() {
        const projectDonars = [
            {
                donarImg: '/media/donar-1.jpg',
                donarName: 'Micheal Clark',
                donarAmount: '$500',
                donarDate: 'July 23, 2024'
            },
            {
                donarImg: '/media/donar-2.jpg',
                donarName: 'David Roy',
                donarAmount: '$1000',
                donarDate: 'July 23, 2024'
            },
            {
                donarImg: '/media/donar-1.jpg',
                donarName: 'George lord',
                donarAmount: '$1200',
                donarDate: 'July 23, 2024'
            }
        ];
        projDocumentTitle.textContent = "Forest Restoration Project";
        projBannerTitle.textContent = "Forest Restoration Project";
        projBannerImage.src = '/media/cheetah.jpg';
        projImage.src = '/media/projectscardimg3.jpg';
        projAdmin.textContent = 'admin';
        projDate.textContent = '23 July, 2024',
            projComments.textContent = '0 Comments',
            projContent1.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
        projContent2.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
        projSummaryContent.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.";
        projChallengeContent.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.";
        projDonarsContent.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.";
        projDonars.forEach((donars) => {
            donars.textContent = '3'
        })
        projDonatedPercent.textContent = '90%'
        projDonatedAmount.textContent = '$1200.00';
        projDonateGoal.textContent = '$4000.00';
        projectDonars.forEach((donar) => {
            const parentDiv = document.createElement("div");
            parentDiv.classList.add("donar-card")
            donarCards.appendChild(parentDiv);
            const imageDiv = document.createElement("div");
            parentDiv.appendChild(imageDiv);
            const image = document.createElement("img");
            image.src = donar.donarImg;
            imageDiv.appendChild(image);
            const name = document.createElement("p");
            name.textContent = donar.donarName;
            name.classList.add("donar-name")
            parentDiv.appendChild(name);
            const amount = document.createElement("p");
            amount.textContent = donar.donarAmount;
            amount.classList.add("donar-amount")
            parentDiv.appendChild(amount);
            const date = document.createElement("p");
            date.textContent = donar.donarDate;
            date.classList.add("donar-date")
            parentDiv.appendChild(date);
        })
    }

    function updateProject4Content() {
        const projectDonars = [
            {
                donarImg: '/media/donar-1.jpg',
                donarName: 'Micheal Clark',
                donarAmount: '$500',
                donarDate: 'July 23, 2024'
            },
            {
                donarImg: '/media/donar-2.jpg',
                donarName: 'David Roy',
                donarAmount: '$1000',
                donarDate: 'July 23, 2024'
            },
            {
                donarImg: '/media/donar-1.jpg',
                donarName: 'George lord',
                donarAmount: '$1200',
                donarDate: 'July 23, 2024'
            }
        ];
        projDocumentTitle.textContent = "Protecting Endangered Species";
        projBannerTitle.textContent = "Protecting Endangered Species";
        projBannerImage.src = '/media/cheetah.jpg';
        projImage.src = '/media/tiger-2.jpg';
        projAdmin.textContent = 'admin';
        projDate.textContent = '23 July, 2024',
            projComments.textContent = '0 Comments',
            projContent1.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
        projContent2.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
        projSummaryContent.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.";
        projChallengeContent.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.";
        projDonarsContent.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.";
        projDonars.forEach((donars) => {
            donars.textContent = '3'
        })
        projDonatedPercent.textContent = '50%'
        projDonatedAmount.textContent = '$1200.00';
        projDonateGoal.textContent = '$4000.00';
        projectDonars.forEach((donar) => {
            const parentDiv = document.createElement("div");
            parentDiv.classList.add("donar-card")
            donarCards.appendChild(parentDiv);
            const imageDiv = document.createElement("div");
            parentDiv.appendChild(imageDiv);
            const image = document.createElement("img");
            image.src = donar.donarImg;
            imageDiv.appendChild(image);
            const name = document.createElement("p");
            name.textContent = donar.donarName;
            name.classList.add("donar-name")
            parentDiv.appendChild(name);
            const amount = document.createElement("p");
            amount.textContent = donar.donarAmount;
            amount.classList.add("donar-amount")
            parentDiv.appendChild(amount);
            const date = document.createElement("p");
            date.textContent = donar.donarDate;
            date.classList.add("donar-date")
            parentDiv.appendChild(date);
        })
    }
}