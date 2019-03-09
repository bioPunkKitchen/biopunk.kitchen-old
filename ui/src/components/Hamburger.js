import React, { Component } from 'react';
import NavMain from './NavMain';
import styles from './hamburger.module.css';
import stylesNav from './navMain.module.css'


class Hamburger extends Component {

    state = {
      isOpen: false,
      hamburgerStyle: styles.hamburgerOpen,
      hamburgerLineStyle: styles.hamburgerLineOpen,
      overlayStyle: styles.overlayClosed,
    }

    closeOverlay = (e) => {
      this.setState({
        isOpen: false,
        hamburgerStyle: styles.hamburgerOpen,
        hamburgerLineStyle: styles.hamburgerLineOpen,
        overlayStyle: styles.overlayClosed,
      })
    }

    openOverlay = (e) => {
      this.setState({
        isOpen: true,
        hamburgerStyle: styles.hamburgerClose,
        hamburgerLineStyle: styles.hamburgerLineClose,
        overlayStyle: styles.overlayOpened,
      })
    }

    toggle = (e) => {
      if (this.state.isOpen){
        this.closeOverlay();
      } else {
        this.openOverlay();
      }
    }

    render() {
        return (
          <div className={styles.hamburgerWrapper}>
            <div className={this.state.overlayStyle}>
              <NavMain closeOverlay={this.closeOverlay}/>
            </div>
            <div onClick={this.toggle} className={this.state.hamburgerStyle}>
                <span className={this.state.hamburgerLineStyle} ></span>
                <span className={this.state.hamburgerLineStyle} ></span>
                <span className={this.state.hamburgerLineStyle} ></span>
                <span className={this.state.hamburgerLineStyle} ></span>
            </div>
          </div>
        );
    }
}

export default Hamburger;
