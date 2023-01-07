import './About.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-content'>
        <h1>Um pouco sobre mim</h1>
        <h4 className='about-title'>Resumo</h4>
        <p>Formado em Sistemas de Informação na Universidade Nove de Julho(Uninove), 
          e atualmente estou em busca da minha primeira 
          oportunidade na área de Desenvolvimento Web.
        </p>

        <h4 className='about-title'>Abilidades</h4>
        <div>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-html5"></i>
        </div>
        <p>Possuo conhecimento em tecnologias front-end: HTML, CSS, Javascript, ReactJS e TypeScript, atualmente venho desenvolvendo 
          diversos projetos pessoais para praticar e aprimorar minhas 
          habilidades como desenvolvedor, e a minha meta atual é ficar ainda mais 
          familiarizado com a tecnologia TypeScript.
          Além disso, também possuo familiaridade com backend com as biblioteca ExpressJS.
        </p>
        </div>
    </div>
  )
}

export default About