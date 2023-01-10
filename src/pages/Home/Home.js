import AnimatedPage from '../../components/AnimatedPage/AnimatedPage'
import './Home.css'

const Home = () => {
  return (
    <AnimatedPage>
    <div className='home-container'>
    <div className='card'>
        <h1>Gabriel Santos, <br/> <span>Desenvolvedor Front-End</span> <i className="fa-solid fa-terminal"></i></h1> 
    </div>
    </div>
    </AnimatedPage>
  )
}

export default  Home