import AnimatedPage from '../../components/AnimatedPage/AnimatedPage'
import './About.css'
import Avatar from '../../assets/avatar.png'

const About = () => {
  return (
    <AnimatedPage>
      <div className='about-container'>
      <div className='about-content'>
       <img src={Avatar} alt="avatar" className='avatar-img' />
        <p className='about-title'>Resumo</p>
        <p>Formado em Sistemas de Informação na Universidade Nove de Julho(Uninove), 
          e atualmente estou em busca da minha primeira 
          oportunidade na área de Desenvolvimento Web.
        </p>

        <p className='about-title'>Abilidades</p>
        <div>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-html5"></i>
        </div>
        <p>Possuo conhecimento em tecnologias front-end: HTML, CSS, Javascript, ReactJS e TypeScript e no backend possuo familiaridade com a lib ExpressJS, atualmente venho desenvolvendo 
          diversos projetos pessoais para praticar e aprimorar minhas 
          habilidades como desenvolvedor, e a minha meta atual é ficar ainda mais 
          familiarizado com a tecnologia TypeScript.
        </p>
        </div>
    </div>
    </AnimatedPage>
  )
}

export default About