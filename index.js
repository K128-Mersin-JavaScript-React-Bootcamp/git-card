const fullname= document.getElementById("fulname");
const username= document.getElementById("username");
const userimg = document.getElementById("pphoto");
const repo = document.getElementById("repo-info");
const button = document.getElementById("button");
const search = document.getElementById("search");
let user= search.value;

function getData(e) {
    
    e.preventDefault();

    axios.get(`https://api.github.com/users/${user}`)
.then(function (response) {

    username.textContent = response.data.login;
    fullname.textContent = response.data.name;
    repo.textContent = response.data.public_repos;
    userimg.src = response.data.avatar_url;

  })
  .catch(function (error) {

    console.log(error);
  })
  .then(function () {

  });

}

button.addEventListener("click" , getData);

getData();

