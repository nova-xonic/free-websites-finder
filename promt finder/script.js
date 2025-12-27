function suggestSites() {
  const prompt = document.getElementById("promptInput").value.toLowerCase();
  const results = document.getElementById("results");

  results.innerHTML = "";

  let categories = [];

  if (prompt.includes("learn") || prompt.includes("tutorial")) {
    categories.push({
      title: "📘 Learning Platforms",
      sites: [
        { name: "freeCodeCamp", link: "https://www.freecodecamp.org" },
        { name: "MDN Web Docs", link: "https://developer.mozilla.org" },
        { name: "W3Schools", link: "https://www.w3schools.com" }
      ]
    });
  }

  if (prompt.includes("error") || prompt.includes("bug")) {
    categories.push({
      title: "🐞 Problem Solving",
      sites: [
        { name: "Stack Overflow", link: "https://stackoverflow.com" },
        { name: "GeeksforGeeks", link: "https://www.geeksforgeeks.org" }
      ]
    });
  }

  if (prompt.includes("design") || prompt.includes("ui")) {
    categories.push({
      title: "🎨 Design Inspiration",
      sites: [
        { name: "Dribbble", link: "https://dribbble.com" },
        { name: "Behance", link: "https://www.behance.net" },
        { name: "Figma Community", link: "https://www.figma.com/community" }
      ]
    });
  }

  if (categories.length === 0) {
    results.innerHTML = "<p>No relevant resources found ❌</p>";
    return;
  }

  categories.forEach(category => {
    let html = `<div class="category"><h3>${category.title}</h3>`;
    category.sites.forEach(site => {
      html += `
        <div class="resource">
          🔗 <a href="${site.link}" target="_blank">${site.name}</a>
        </div>
      `;
    });
    html += "</div>";
    results.innerHTML += html;
  });
}
