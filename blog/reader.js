const params = new URLSearchParams(window.location.search);
const post = params.get("post");

const article = document.querySelector("#article");

const allowedPosts = ["javascript", "tailwind", "dotnet"];

if (allowedPosts.includes(post)) {
  article.setAttribute("src", `./posts/${post}.md`);
  document.title = `${post} | My Blog`;
} else {
  article.textContent = "Article not found";
}
