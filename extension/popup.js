document.getElementById("openPageBtn").addEventListener("click", () => {
    // Replace this with your actual GitHub Pages URL:
    chrome.tabs.create({ url: "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/" });
});
