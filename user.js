const postListEl = document.querySelector(".post-list");

function onSearchChange(){
    
}

async function main() {
  const id = localStorage.getItem("id");
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}` //fetching a dynamic API
  );
  const postData = await posts.json();

  postListEl.innerHTML = postData
    .map(
      (post) =>
        `<div class="post">
            <div class="post__title">
                ${post.title}
            </div>
            <p class="post__body">
                ${post.body}
            </p>
        </div>`
    )
    .join("");
}

main();
