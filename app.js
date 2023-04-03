// Elemanları Seçme
const searchUser = document.querySelector("#github-username");
const seacrhBtn = document.querySelector("#search-btn");
const searchForm = document.querySelector(".github-form");
const github = new Github();


// Form Submit ile API'den veri çekme

searchForm.addEventListener("submit", function(e) {

   github.getGithubData(searchUser.value)
   .then(response => {
    console.log(response.user);
    console.log(response.repo)
})
   .catch(err => console.log(err));
    e.preventDefault();
})