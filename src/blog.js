const params = new URLSearchParams(window.location.search);
const post = params.get("post");

async function loadMarkdown() {
    const response = await fetch(`./blog/${post}.md`);

    if (!response.ok) {
        throw new Error("Cannot load Markdown file");
    }

    const markdown = await response.text();

    document.querySelector("#content").innerHTML =
        marked.parse(markdown);
}

loadMarkdown();
