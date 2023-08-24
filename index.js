// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users"); //fetches data from api and sets the returning romise as a new variable
  const usersData = await users.json(); //takes that promise and converts it again to readable data

  const userListEl = document.querySelector(".user-list");

  userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("");
  //goes over every value or content of an array

  //makes it readable
}
main(); //runs function to call everything

function userHTML(user) {
  return  `<div class="user-card">                                          
            <div class="user-card__container">
            <h3>${user.name}</h3>
                <p><b>Email:</b> ${user.email}</p>
                <p><b>Phone:</b> ${user.phone}</p>
                <p><b>Website:</b>
                <a href="https://${user.website}" target="_blank"
                    >${user.website}</a
                ></p>
            </div>
          </div>`;
}
