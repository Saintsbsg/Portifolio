import './Projects.css'
import Grid_testimonials from '../../assets/grid_testimonials2.jpg';
import ComingSoon from '../../assets/em_breve.png'
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
const Projects = () => {
  return (
    <AnimatedPage>
      <div className='projects-container'>
      <div className='row'>
      <div className='projects-content'>
        <img src={Grid_testimonials} alt="" />
        <div className='btn-container'>
        <a href="https://github.com/Saintsbsg/grid_testimonials" className='btn' target='_blank' rel="noreferrer"><i className="fa-brands fa-square-github"></i></a>
        <a href="https://saintsbsg.github.io/grid_testimonials/" className='btn' target='_blank' rel="noreferrer"><i className="fa-solid fa-globe"></i></a>
        </div>
      </div>
      

      <div className='projects-content'>
        <img src={ComingSoon} alt="" />
        <div className='btn-container'>
        <a href="#" className='btn'><i className="fa-brands fa-square-github"></i></a>
        <a href="#" className='btn'><i className="fa-solid fa-globe"></i></a>
        </div>
      </div>


      <div className='projects-content'>
        <img src={ComingSoon} alt="" />
        <div className='btn-container'>
        <a href="#" className='btn'><i className="fa-brands fa-square-github"></i></a>
        <a href="#" className='btn'><i className="fa-solid fa-globe"></i></a>
        </div>
      </div>

      </div>
    </div>
    </AnimatedPage>
  )
}

export default Projects