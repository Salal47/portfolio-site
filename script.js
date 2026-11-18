function navBar() {
   
    const currentPath = window.location.pathname;

    // 2. Check karein ke kya hum kisi folder ke andar hain?
    const isInsideFolder = currentPath.includes('/contact/') || 
                           currentPath.includes('/about/') || 
                           currentPath.includes('/projects/') || 
                           currentPath.includes('/skills/');

    // 3. Yahan 'prefix' banega: 
    // Agar folder ke andar hain to '../' banega, warna khali '' rahega
    const prefix = isInsideFolder ? '../' : '';

    // 4. Ab har link ke shuru mein ${prefix} laga dein
    let navbar = ` 
        <nav>
            <p> Salal </p>
            <ul>
                <li><a href="${prefix}index.html">Home</a></li>
                <li><a href="${prefix}contact/contact.html">Contact</a></li>
                <li><a href="${prefix}about/about.html">About</a></li>
                <li><a href="${prefix}projects/project.html">Projects</a></li>
                <li><a href="${prefix}skills/skills.html">Skills</a></li>
            </ul>
            <div>
                <a href="${prefix}contact/contact.html" id="hiremeButton">Hire Me</a>
            </div>
        </nav>
    `;

    let header = document.getElementById('header');
    header.innerHTML = navbar;
}

navBar();