// Write your code here
import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutLightImgUrl =
        'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutDarkImgUrl =
        'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
      const modeChangeAboutContainer = isDarkTheme
        ? 'mode-change-about-container'
        : null
      const modeChangeImgUrl = isDarkTheme ? aboutDarkImgUrl : aboutLightImgUrl
      const modeChangeHeading = isDarkTheme ? 'change-about-heading' : ''

      return (
        <>
          <NavBar />
          <div className={`about-container ${modeChangeAboutContainer}`}>
            <div>
              <img src={modeChangeImgUrl} alt="about" className="about-image" />
              <h1 className={`about-heading ${modeChangeHeading}`}>About</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
