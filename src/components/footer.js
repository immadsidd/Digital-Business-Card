import React from "react";
import Twitter from "../images/TwitterIcon.png";
import Facebook from "../images/FacebookIcon.png";
import Instagram from "../images/InstagramIcon.png";
import GitHub from "../images/GitHubIcon.png";

export default function footer(){
   return(
    <div className="footer">
        <a href="#"><img src={Twitter} /></a>
        <a href="#"><img src={Facebook} /></a>
        <a href="#"><img src={Instagram} /></a>
        <a href="https://github.com/immadsidd" target="_blank"><img src={GitHub} /></a>

    </div>
   )
}
