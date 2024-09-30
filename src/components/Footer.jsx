import React, {useState} from "react";


function Footer(){

    const [isOpen,setIsOpen] = useState(false);


return(

    <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <p>920 Zane Isle, Lebsackfurt, 38755</p>
        <p>(081) 555-0136</p>
        <a href="mailto:jaro@example.com">jaro@gmail.com</a>
      </div>
      <div className="footer-socials">
        <a href="#" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f">Facebook</i></a>
        <a href="#" target="_blank" aria-label="Instagram"><i className="fab fa-instagram">Instagram</i></a>
      </div>
    </div>
    <div className="footer-terms">
        <a href="/terms-and-condition.pdf" target="_blank" rel="noopener noreferrer">
          Terms and Conditions
        </a>
      </div>
  </footer>
)


    
};

export default Footer;