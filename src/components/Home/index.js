// Write your code here
import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeLightImgUrl =
        'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeDarkImgUrl =
        'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
      const modeChangeHomeContainer = isDarkTheme
        ? 'mode-change-home-container'
        : null
      const modeChangeImgUrl = isDarkTheme ? homeDarkImgUrl : homeLightImgUrl
      const modeChangeHeading = isDarkTheme ? 'change-home-heading' : ''

      return (
        <>
          <NavBar />
          <div className={`home-container ${modeChangeHomeContainer}`}>
            <div>
              <img src={modeChangeImgUrl} alt="home" className="home-image" />
              <h1 className={`home-heading ${modeChangeHeading}`}>Home</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
