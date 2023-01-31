import './Projects.css'
import Grid_testimonials from '../../assets/grid_testimonials2.jpg';
import CountryApp from '../../assets/countryApp.jpg';
import ComingSoon from '../../assets/em_breve.png'
import Sneakers from '../../assets/sneakers_ecommerce.jpg'
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
const Projects = () => {
  return (
    <AnimatedPage>
      <div className='projects-container'>
      <div className='row'>
      <div className='projects-content'>
        <img src={CountryApp} alt="preview do projeto Country App" />
        <div className='btn-container'>
        <a href="https://github.com/Saintsbsg/country_app" className='btn' target='_blank' rel="noreferrer"><i className="fa-brands fa-square-github"></i></a>
        <a href="https://country-app-xi.vercel.app/" className='btn' target='_blank' rel="noreferrer"><i className="fa-solid fa-globe"></i></a>
        </div>
      </div>
      

      <div className='projects-content'>
        <img src={Grid_testimonials} alt="preview do projeto Grid testimonials" />
        <div className='btn-container'>
        <a href="https://github.com/Saintsbsg/grid_testimonials" className='btn'><i className="fa-brands fa-square-github"></i></a>
        <a href="https://saintsbsg.github.io/grid_testimonials/" className='btn'><i className="fa-solid fa-globe"></i></a>
        </div>
      </div>

      <div className='projects-content'>
        <img src={Sneakers} alt="preview do projeto sneaker ecommerce" />
        <div className='btn-container'>
        
        <a href="https://github.com/Saintsbsg/ecommerce_product_page" className='btn' target='_blank' rel="noreferrer"><i className="fa-brands fa-square-github"></i></a>
        <a href="https://ecommerce-product-page-brown.vercel.app/" className='btn' target='_blank' rel="noreferrer"><i className="fa-solid fa-globe"></i></a>
        </div>
        <span className='developing'>Em desenvolvimento!<br/>(versão mobile está pronta)</span>
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