function fetchContent(url, targetSelector) {
    const targetElement=document.querySelector(targetSelector);
    fetch(url)
        .then(res => res.text())
        .then(data => {
            targetElement.innerHTML = data
            const parser = new DOMParser()
            const doc = parser.parseFromString(data, 'text/html')
            const scriptContent = doc.querySelector('script')?.textContent;
            if (scriptContent) {
                eval(scriptContent);
            }
        })
};

fetchContent('/navbar.html','.navbar');
fetchContent('/footer.html','.footer');