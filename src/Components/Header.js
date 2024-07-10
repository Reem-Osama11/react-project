import {useState, useEffect } from "react";
import {BrowserRouter as Router} from "react-router-dom"; 
import { Navbar, Nav, Container,NavLink } from "react-bootstrap";
import logo from '../pro_image/img/OIP.jpeg';




export const Header = () =>{
    const [activelink ,setActiveLink] = useState('home');
    const [scroll , setScroll]=useState(false);


    useEffect(()=>{
        const Scroll =()=> {
            if(window.scrollY >50){
                setScroll(true)
            }
            else{
                setScroll(false)
            }
        }


    window.addEventListener("scroll",Scroll)

    return ()=> window.removeEventListener("scroll",Scroll)
    },[])


    const updateActiveLink =(link)=>{
        setActiveLink(link)
    }

    return(

        <Router>
            <Navbar expand="md" className={scroll ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/" className="image">
                        <img src={logo} alt=""  className="image"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto activelinks" >
                            <Nav.Link href="#home" className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activelink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activelink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Project</Nav.Link>
                        </Nav>

                        <span className="navbar-text links" >
                            <div className="social-icon">
                                {/* <a href="https://www.linkedin.com/in/mohamed-osama-4049bb230/"><img src={navIcon1} alt="" /></a> */}
                                <a href="https://www.linkedin.com/in/mohamed-osama-4049bb230/"><i class="fa-brands fa-linkedin-in"></i></a>

                                <a href="https://www.facebook.com/profile.php?id=100012347140411"><i class="fa-brands fa-facebook-f"></i></a>

                                <a href="https://www.instagram.com/mohamedosama9903/"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                        <NavLink to='#connect'>
                            <button className="connect"><span>Let’s Connect</span></button>
                        </NavLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}

export default Header;