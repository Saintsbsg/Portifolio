import './Projects.css'
import Grid_testimonials from '../../assets/projeto_grid_testimonials.jpg';
const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='row'>
      <div className='projects-content'>
        <img src={Grid_testimonials} alt="" />
        <div className='btn-container'>
        <a href="google.com" className='btn'><i class="fa-brands fa-square-github"></i></a>
        <a href="google.comm" className='btn'><i class="fa-solid fa-globe"></i></a>
        </div>
      </div>
      

      <div className='projects-content'>
        <img src={Grid_testimonials} alt="" />
        <div className='btn-container'>
        <a href="google.com" className='btn'><i class="fa-brands fa-square-github"></i></a>
        <a href="google.comm" className='btn'><i class="fa-solid fa-globe"></i></a>
        </div>
      </div>


      <div className='projects-content'>
        <img src={Grid_testimonials} alt="" />
        <div className='btn-container'>
        <a href="google.com" className='btn'><i class="fa-brands fa-square-github"></i></a>
        <a href="google.comm" className='btn'><i class="fa-solid fa-globe"></i></a>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Projects