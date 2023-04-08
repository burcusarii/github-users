// Elemanları Seçme
const seacrhBtn = document.querySelector("#search-btn");
const searchForm = document.querySelector(".github-form");
const clearSearch = document.querySelector(".last-search-btn");
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
            if(response.user.message === "Not Found") {
                ui.showError("Kullanıcı Bulunamadı");
            }
            else{
                ui.addSearchUsersToLastSearch(username); // aranan kullanıcıyı son arananlar'a ekleme
                Storage.addUserToLocalStorage(username); // aranan kullanıcıyı storage'a ekleme
                ui.showUser(response.user);
                ui.showRepos(response.repo);
       }
    })
        .catch(err => ui.showError(err));
    }
   

   ui.clearInput();
   e.preventDefault();
});


document.addEventListener("DOMContentLoaded", function(){
    let users = Storage.getUsersFromLocalStorage();

    users.forEach(user => {
        ui.lastSearch.innerHTML += `<li class ="list-group-item">${user}</li>`
    })
})

clearSearch.addEventListener("click", () => {
    Storage.clearAllUsers();
    ui.lastSearch.innerHTML = "";
})