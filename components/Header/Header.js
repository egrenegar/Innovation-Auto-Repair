import React, { useState, useEffect } from "react";
import headerStyles from "./header.module.css";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // equivalent to componentDidMount()
  useEffect(() => {

    // === Hamburger menu ===
    const closeOnScroll = () => setIsOpen(false);

    window.addEventListener("scroll", closeOnScroll);

    return () => {
      window.removeEventListener("scroll", closeOnScroll);
    };
  }, []);

  const toggleOpen = () => {
    console.log("toggling");
    setIsOpen(!isOpen);
  };

  const Refresher = () => {
    window.location.reload();
  }
  const rotate1 = isOpen ? headerStyles.rotate1 : "";
  const rotate2 = isOpen ? headerStyles.rotate2 : "";
  const rotate3 = isOpen ? headerStyles.rotate3 : "";
  const sidebarChange = isOpen ? headerStyles.change : "";

  // === Modal

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={headerStyles.header}>
        <div className={headerStyles.topHeader}> 
        <div className={headerStyles.modalText}>
          <p>Refer a friend, Get $200
          <span onClick={handleOpen}> Learn more</span>
          </p>
          </div>
          </div>
        <div className={headerStyles.innerHeader}>
          <div onClick={Refresher} className={headerStyles.logoContainer}></div>
          
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Our Referral Program:</h2>
            <p id="transition-modal-description">Refer someone to us, if they get their car fixed with us, you get $200.</p>
          </div>
        </Fade>
      </Modal>
    
          <div className={headerStyles.navHolder}>
            <div onClick={toggleOpen} className={headerStyles.hamburgerMenu}>
              <div
                className={`${headerStyles.line} ${headerStyles["line-1"]} ${rotate1}`}
              ></div>
              <div
                className={`${headerStyles.line} ${headerStyles["line-2"]} ${rotate2}`}
              ></div>
              <div
                className={`${headerStyles.line} ${headerStyles["line-3"]} ${rotate3}`}
              ></div>
            </div>
          </div>

          <ul className={headerStyles.navigation}>
            <a href="#about-section">
              <li>About</li>
            </a>
            <a href="#contact-section">
              <li>Contact</li>
            </a>
            <a>
              <li>Book With Us</li>
            </a>
          </ul>
        </div>
      </div>

      <nav className={`${headerStyles.sidebar} ${sidebarChange}`}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItem}>
            <a className={headerStyles.navLink} href="#about-section">About</a>
          </li>
          <li className={headerStyles.navItem}>
            <a className={headerStyles.navLink} href="#contact-section">Contact</a>
          </li>
          <li className={headerStyles.navItem}>
            <a className={headerStyles.navLink}>Book With Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
