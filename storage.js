class Storage {

    // Local storage'daki kullanıcıları alma;
    static getUsersFromLocalStorage(){
        
        let users;

        if(localStorage.getItem("searched") === null){
            users = [];
        }

        else {
            users = JSON.parse(localStorage.getItem("searched"));
        }

        return users
    }

    // Local storage'a yeni bir kullanıcı ekleme;
    static addUserToLocalStorage(username){
       let users = this.getUsersFromLocalStorage();

       if(users.indexOf(username) === -1) {
        users.push(username);
       }
       localStorage.setItem("searched", JSON.stringify(users));
    }

    // Local Storage'dan bütün kullanıcıları silme;
    static clearAllUsers(){

        localStorage.removeItem("searched");
    }
}