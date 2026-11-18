function navBar(){
    let navbar =    ` 

        <nav>
            <p> Salal </p>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">service</a></li>
                <li><a href="">about</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Skills</a></li>
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