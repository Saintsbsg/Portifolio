import './Projects.css'
import Grid_testimonials from '../../assets/projeto_grid_testimonials.jpg';
const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='row'>
      <div className='projects-content'>
        <img src={Grid_testimonials} alt="" />
      </div>
      

      <div className='projects-content'>
        <img src={Grid_testimonials} alt="" />
      </div>


      <div className='projects-content'>
        <img src={Grid_testimonials} alt="" />
      </div>

      </div>
    </div>
  )
}

export default Projects