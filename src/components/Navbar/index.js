// Write your code here

import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const websiteDarkLogo =
        'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
      const websiteLightLogo =
        'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const modeLightImgUrl =
        'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
      const modeDarkImgUrl =
        'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const websiteImageUrl = isDarkTheme ? websiteDarkLogo : websiteLightLogo
      const modeImgUrl = isDarkTheme ? modeLightImgUrl : modeDarkImgUrl
      const modeChangeContainer = isDarkTheme ? 'mode-change-container' : null
      const modeChangeLinkColor = isDarkTheme ? 'mode-change-link-item' : null
      return (
        <nav className={`nav-container ${modeChangeContainer}`}>
          <img
            src={websiteImageUrl}
            alt="website logo"
            className="website-logo"
          />
          <ul className="link-items">
            <Link to="/" className="link">
              <li className={`link-item ${modeChangeLinkColor}`}>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className={`link-item ${modeChangeLinkColor}`}>About</li>
            </Link>
          </ul>
          <button
            className="mode-button"
            type="button"
            onClick={toggleTheme}
            data-testid="theme"
          >
            <img src={modeImgUrl} alt="theme" className="mode-image" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
