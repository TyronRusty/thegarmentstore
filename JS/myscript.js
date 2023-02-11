// use to clear local storage
         // localStorage.clear()
      
          // Use to load usernames to your local storage
          const loadUsers = () => {
            const users = ["John", "James", "Paul"];
            // Use to loop through users
            users.forEach((name) => {
                // Sets the key and value
                localStorage.setItem(name, name);
            });
            // Sets an item to your local storage, the key and value
            localStorage.setItem("password", "password");
        };
    
        const loginForm = document.getElementById("signup-form");
        const loginButton = document.getElementById("loginButton");
    
        loginButton.addEventListener("click", (e) => {
            e.preventDefault();
            const userName = loginForm.userText.value;
            const userPassword = loginForm.userPassword.value;
    
            // check if the input and local storage are the same
            if (localStorage.getItem(userName) === userName &&
                localStorage.getItem(userPassword) === "password"){
                localStorage.setItem("name",userName);
                window.location.replace("https://www.youtube.com");
            } else {
                // stop the page from submitting
                e.preventDefault();
                console.log("Please try again");
                console.log(userName);
                console.log(userPassword);
            }
        });
