class UI{
    constructor(){
        this.profile = document.querySelector(".profile");
        this.lastSearch = document.querySelector(".last-search-list");
        this.searchUser = document.querySelector("#github-username");
        this.repoList = document.querySelector(".repos-list");
        this.searchContainer = document.querySelector(".searchContainer");
    }

    clearInput(){
        this.searchUser.value = "";
    }

    showUser(user) {
        this.profile.innerHTML = `
        <div class="card mb-3 w-100">
        <div class="row g-0">
        <div class="col-md-4">
        <img src="${user.avatar_url}" class="img-fluid rounded-start" alt="...">
        <p class="m-2">${user.name}</p>
        <hr>
        <p class="mx-2">${user.bio}</p>
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <a href="https://github.com/${user.login}/?tab=followers" target="_blank"> <span class="btn btn-primary">Takipçi <span class="btn-sm btn-light">${user.followers}</span>
        </span></a>
        <a href="https://github.com/${user.login}/?tab=following" target="_blank"> <span  class="btn btn-secondary">Takip Edilen <span class="btn-sm btn-light">${user.following}</span></span></a>
        <a href="https://github.com/${user.login}/?tab=repositories" target="_blank"> <span  class="btn btn-warning">Repolar <span class="btn-sm btn-light">${user.public_repos}</span></span></a>
            <hr>
            <ul class="list-unstyled">
            <li> <img class="img-fluid my-2" src="images/company.png" style="width: 25px;"> <span>${user.company}</span></li>
            <li> <img class="img-fluid my-2" src="images/location.png" style="width: 25px;"> <span>${user.location}</span></li>
            <li> <img class="img-fluid my-2" src="images/mail.png" style="width: 25px;"> <span>${user.email}</span></li>
            </ul>
        </div>
        </div>
    </div>
    </div>`;
    }

    showRepos(repos) {
        this.repoList.innerHTML = " ";
        repos.forEach(repo => {
            this.repoList.innerHTML += `
            <li><a href="https://github.com/${repo.full_name}" target="_blank"> ${repo.name}</a></li>
            `;
        });
       ;

    }

    showError(message){
        const div = document.createElement("div");
        div.className = "alert alert-danger";
        div.textContent = message;
        this.searchContainer.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 3000)
    }

    addSearchUsersToLastSearch(username){
        let users = Storage.getUsersFromLocalStorage();

        if(users.indexOf(username) === -1) {
            const li = document.createElement("li");
            li.className ="list-group-item";
            li.textContent = username;
            this.lastSearch.appendChild(li);
        }
    }


}