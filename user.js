const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("id");

async function onSearchChange(event) {
  const id = event.target.value;
  renderPosts(id)
/*   const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  ); //fetching a dynamic API
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
    .join(""); */
}

async function renderPosts(userId) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId || id}` //fetching a dynamic API
  );
  const postData = await posts.json();
  postListEl.innerHTML = postData.map((post) => postHTML(post)).join('');
}

function postHTML(post) {
  return `<div class="post">
            <div class="post__title">
                ${post.title}
            </div>
            <p class="post__body">
                ${post.body}
            </p>
        </div>`;
}

renderPosts(id);
