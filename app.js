// Elemanları Seçme
const seacrhBtn = document.querySelector("#search-btn");
const searchForm = document.querySelector(".github-form");
const github = new Github();
const ui = new UI();
const show = document.querySelector(".showContainer");
// Form Submit ile API'den veri çekme

searchForm.addEventListener("submit", function(e) {
    let username = ui.searchUser.value.trim();

    if ( username === "") {
        alert("lütfen bir kullanıcı adı giriniz.");
    }

    else {
        github.getGithubData(username)
        .then(response => {
            console.log(response.user.message);
            if(response.user.message === "Not Found") {
                ui.showError("Kullanıcı Bulunamadı");
            }
            else{
                ui.showUser(response.user);
                console.log(response.user);
                console.log(response.repo);
                ui.showRepos(response.repo);
       }
    })
        .catch(err => ui.showError(err));
    }
   

   ui.clearInput();
    e.preventDefault();
})