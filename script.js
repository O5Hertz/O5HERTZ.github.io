// script.js
const username = "o5hertz";
const repoName = "o5hertz.github.io";
const dirPath = "articles";

fetch(`https://api.github.com/repos/${username}/${repoName}/contents/${dirPath}?ref=main`)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("article-list");
    data.forEach(file => {
      if (file.name.endsWith(".md")) {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = `https://o5hertz.github.io/${dirPath}/${file.name}`;
        link.textContent = `文章：${file.name.replace(".md", "")}`;
        li.appendChild(link);
        list.appendChild(li);
      }
    });
  });
