import React from 'react';

const Navbar=()=>{
    // let navStyle={
    //     backgroundColor:"#7CD3FB"
    // }

    return(
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="http://www.fliqaindia.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Fliqa-India-.png" height="45" width="90"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">ABOUT US</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">SERVICES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">FREELANCERS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">BLOG</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">TOURS & TRAVELS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">TUTORIAL</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CONTACT US</a>
                </li>
                </ul>
            </div>

            {/* Icons */}
            <span className="m-2"><a href="https://www.facebook.com/fliqaindia/"><img src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-facebook-512.png" height="30" width="30" /></a></span>
            <span className="m-2"><a href="https://api.whatsapp.com/send?phone=919641817485&text=Can%20you%20tell%20me%20more%20about%20your%20company?%20What%20services%20do%20you%20offer?"><img src="https://img.icons8.com/pastel-glyph/2x/whatsapp.png" height="25" width="25" /></a></span>
            <span className="m-2"><a href="https://www.linkedin.com/company/fliqaindia/"><img src="https://image.flaticon.com/icons/png/512/61/61109.png" height="20" width="20" /></a></span>
            <span className="m-2"><a href="https://www.youtube.com/channel/UCFIkETf7akbdY7TwKaZPang"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaPL8aYHib5dyvUZvHxevT_4mu3ONS9VXNDw&usqp=CAU" height="50" width="50" /></a></span>
            <span className="m-2"><a href="https://www.instagram.com/fliqaindia/"><img src="https://i.pinimg.com/originals/08/17/15/0817158f3a05c0d62de647c28f4cde54.jpg" height="30" width="30" /></a></span>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;