

const user = document.getElementById("search-input").value;
const userImage = document.getElementById("user-image");
const userFullName = document.getElementById("fullName");
const username = document.getElementById("username");
const repoLength = document.getElementById("repo-length");
const searchButton = document.getElementById("button");
const url = "https://api.github.com/";
let langsObj = {};

function clickHandle() {
  function getUserData() {
    const user = document.getElementById("search-input");
    fetch(url + "users/" + user.value)
      .then((res) => res.json())
      .then((data) => {
        userFullName.textContent = data.name;
        username.textContent = data.login;
        repoLength.textContent = data.public_repos;
        userImage.src = data.avatar_url;
      });
  }

  getUserData();

}
searchButton.addEventListener("click", clickHandle);
