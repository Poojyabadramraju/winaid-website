window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const blog = urlParams.get("blog");
    const blogDocumentTitle = document.querySelector("title");
    const blogBannerTitle = document.querySelector(".blog-banner-title");
    const blogBannerImage = document.querySelector(".blog-banner-img");
    const blogImage1 = document.querySelector(".blog-img-1");
    const blogImage2 = document.querySelector(".blog-img-2");
    const blogAdmin = document.querySelector(".blog-admin");
    const blogDate = document.querySelector(".blog-date");
    const blogComments = document.querySelector(".blog-comments");
    const blogContent1 = document.querySelector(".blog-content-1");
    const blogContent2 = document.querySelector(".blog-content-2");
    const blogContent3 = document.querySelector(".blog-content-3");
    const blogContent4 = document.querySelector(".blog-content-4");

    switch (blog) {
        case "saving-the-rainforests":
            updateBlog1Content();
            break;
        case "eco-friendly-travel-tips":
            updateBlog2Content();
            break;
        case "the-role-of-national-parks":
            updateBlog3Content();
            break;
        default:
            updateBlog1Content();
            break;
    }

    function updateBlog1Content() {
        blogDocumentTitle.textContent = "Saving the Rainforests";
        blogBannerTitle.textContent = "Saving the Rainforests";
        blogBannerImage.src = '/media/giraffe-2.jpg';
        blogImage1.src = '/media/blogcardimg1.jpg';
        blogImage2.src = '/media/blogcardimg1.jpg';
        blogAdmin.textContent = 'admin';
        blogDate.textContent = '23 July, 2024',
        blogComments.textContent = '0 Comments',
        blogContent1.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
        blogContent2.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
        blogContent3.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
        blogContent4.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
    
    }

    function updateBlog2Content() {
        blogDocumentTitle.textContent = "Eco-friendly Travel Tips";
        blogBannerTitle.textContent = "Eco-friendly Travel Tips";
        blogBannerImage.src = '/media/giraffe-2.jpg';
        blogImage1.src = '/media/blogcardimg2.jpg';
        blogImage2.src = '/media/blogcardimg2.jpg';
        blogAdmin.textContent = 'admin';
        blogDate.textContent = '23 July, 2024',
        blogComments.textContent = '0 Comments',
        blogContent1.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
        blogContent2.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
        blogContent3.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
        blogContent4.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
    
    }

    function updateBlog3Content() {
       blogDocumentTitle.textContent = "The Role of National Parks";
       blogBannerTitle.textContent = "The Role of National Parks";
       blogBannerImage.src = '/media/giraffe-2.jpg';
       blogImage1.src = '/media/blogcardimg3.jpg';
       blogImage2.src = '/media/blogcardimg3.jpg';
       blogAdmin.textContent = 'admin';
       blogDate.textContent = '23 July, 2024',
       blogComments.textContent = '0 Comments',
       blogContent1.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
       blogContent2.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
       blogContent3.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
       blogContent4.textContent = 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse per curabitur aptent laoreet fringilla lacus euismod placerat? Proin odio convallis taciti placerat posuere orci ornare quisque. Quis fames sit; quis sem eleifend molestie. Finibus duis justo felis cras ex montes. Bibendum praesent rutrum mollis dignissim justo tempus. Blandit maximus hendrerit per ultrices nec ac elementum. Pretium maecenas arcu hendrerit nascetur tortor porttitor parturient nascetur.';
    
    }
}