const params = new URLSearchParams(window.location.search);
const post = params.get("post");

const article = document.querySelector("#article");

const allowedPosts = ["talk-about-it"];

if (!post || !allowedPosts.includes(post)) {
  article.textContent = "Article not found.";
} else {
  const markdownPath = `./posts/${post}.md`;

  article.setAttribute("src", markdownPath);

  document.title = `${post} | Duy's blog`;
}
