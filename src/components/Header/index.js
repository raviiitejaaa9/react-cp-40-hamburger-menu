// Write your code here
import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

class Header extends Component {
  state = {
    isMenuClicked: false,
  }

  onClickHam = () => {
    this.setState(prevState => ({
      isMenuClicked: !prevState.isMenuClicked,
    }))
  }

  render() {
    return (
      <div className="navbar">
        <Link className="link" to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
        <PopUp />
      </div>
    )
  }
}

export default withRouter(Header)

const PopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="ham-btn"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="rjs-icon" />
        </button>
      }
      position="top right"
    >
      {close => (
        <>
          <button
            onClick={() => close()}
            type="button"
            className="close-btn"
            data-testid="closeButton"
          >
            <IoMdClose className="rjs-icon" />
          </button>

          <ul className="link-container">
            <Link to="/" className="link">
              <li className="popup-link">
                <AiFillHome className="popup-icon" />
                <h1> Home </h1>
              </li>
            </Link>

            <Link to="/about" className="link">
              <li className="popup-link">
                <BsInfoCircleFill className="popup-icon" />
                <h1> About </h1>
              </li>
            </Link>
          </ul>
        </>
      )}
    </Popup>
  </div>
)
