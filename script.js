function navBar() {
    const repoBase = window.location.hostname.includes('github.io') ? '/portfolio-site/' : '/';

    let navbar = ` 
        <nav>
            <p> Salal </p>
            <ul>
                <li><a href="${repoBase}index.html">Home</a></li>
                <li><a href="${repoBase}contact/contact.html">Contact</a></li>
                <li><a href="${repoBase}about/about.html">About</a></li>
                <li><a href="${repoBase}projects/project.html">Projects</a></li>
                <li><a href="${repoBase}skills/skills.html">Skills</a></li>
            </ul>
            <div>
                <a href="${repoBase}contact/contact.html" id="hiremeButton">Hire Me</a>
            </div>
        </nav>
    `;     

    let header = document.getElementById('header');
    if (header) {
        header.innerHTML = navbar;
    }
}

navBar();
