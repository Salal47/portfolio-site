function navBar(){
    const path = window.location.pathname;
    
    const inSubfolder = ['/about/', '/contact/', '/projects/', '/skills/']
                        .some(folder => path.includes(folder));

    const base = inSubfolder ? '../' : './';

    let navbar = ` 
        <nav>
            <p> Salal </p>
            <ul>
                <li><a href="${base}index.html">Home</a></li>
                <li><a href="${base}contact/contact.html">Contact</a></li>
                <li><a href="${base}about/about.html">About</a></li>
                <li><a href="${base}projects/project.html">Projects</a></li>
                <li><a href="${base}skills/skills.html">Skills</a></li>
            </ul>
            <div>
                <a href="" id="hiremeButton">Hire Me</a>
            </div>
        </nav>
    `;     
    let header = document.getElementById('header');
    header.innerHTML = navbar;
}

navBar();
