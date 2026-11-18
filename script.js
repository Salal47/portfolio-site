function navBar(){
    let navbar =    ` 

        <nav>
            <p> Salal </p>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="contact/contact.html">Contact</a></li>
                <li><a href="about/about.html">about</a></li>
                <li><a href="projects/project.html">Projects</a></li>
                <li><a href="skills/skills.html">Skills</a></li>
            </ul>
            <div>
                <a href="" id="hiremeButton">Hire Me </a>
            </div>
        </nav>
    
    
    `     
    let header = document.getElementById('header');
    header.innerHTML = navbar;
}

navBar();

console.log("Function Called Create Contacts ");