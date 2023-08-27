async function main() {
  const id = localStorage.getItem("id");
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}` //fetching a dynamic API
  );
  const postData = await posts.json();

  post
}

main();
