const toggleBtn = document.querySelector('#btn-toggle');

    function toggleDarkMode(){
        document.body.classList.toggle("dark");
    }

    function loadTheme(){
        const darkMode = localStorage.getItem("dark");

        if (darkMode){
            toggleDarkMode();
        }
    }

loadTheme();

toggleBtn.addEventListener("change", function(){
    toggleDarkMode();

    localStorage.removeItem("dark")

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }
})
