import React from 'react'
import './App.css';
function App() {
  const name = "Akshit Singh Shekhawat";
  const profession = "Full Stack Developer";
  const projects = [
    {
      title: "Project one",
      description: "A Web application built using React.js and Node.js",
      link: "#"
    },
    {
      title: "Project two",
      description: "An ecommerce platform built using Django",
      link: "#"
    }
  ]

  return (
    <div className='App'>
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>projects</a>
          <a href='#contact'>contact</a>
        </nav>
      </header>

      {/* About Section */}
<section id='about' className='about-section'>
  <h2>About Me</h2>
  <p>
    Hello, I am {name}, a passionate {profession}. I love creating web applications that solve real-world problems.
    Bringing ideas to life through clean, functional code is what drives me.
    I'm always eager to learn, build, and contribute to impactful tech solutions.
  </p>
</section>


      {/* Project section */}
<section id='projects' className='projects-section'>
  <h2>Projects</h2>
  <div className='projects-list'>
    {projects.map((project, index) => (
      <div key={index} className='project-item'>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target='_blank' rel="noopener noreferrer">
          View Project
        </a>
      </div>
    ))}
  </div>
</section>


      {/* Contact Section */}
      <section id='contact' className='contact-section'>
        <h2>Contact Me</h2>
        <p>If you would like to get in touch, fell free to email me at <a href='mailto:akshit@gmail.com'>akshit@gmail.com</a></p>
      </section>

      {/* Footer */}
      <footer className='footer'>
        <p>2025. All Rights Reversed</p>
      </footer>

    </div>
  )
}   
  
export default App

  // css

  /* #root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
} */

// body {
//   margin:0;
//   font-family: Arial, Helvetica, sans-serif;
// }
// a {
//   text-decoration: none;
//   color: white;
// }

// a:hover {
//   text-decoration: underline;
// }

// .header{
//   background-color: #282c34;
//   padding: 20px;
//   color: white;
//   text-align: center;
// }

// .header nav a{
//   margin: 0 10px;
//   color: white;
// }

// /* About Section */
// .about-section{
//   padding: 50px;
//   text-align: center;
//   background-color: #f4f4f4;
// }

// .about-section h2, .projects-section h2, .contact-section h2 {
//   margin-bottom: 20px;
// }

// /* PROJECT SECTION */
// .projects-section {
//   padding: 50px;
//   text-align: center;
// }

// .projects-list, .project-item {
//   margin-bottom: 30px;
// }

// .projects-list, .project-item {
//   margin-bottom: 30px ;
// }

// .projects-list .project-item a{
//   color: blue;
// }

// /* CONTACT SECTION */
// .contact-section{
//   padding: 50px;
//   text-align: center;
//   background-color: #f4f4f4;
// }

// .contact-section a{
//   color: blue;
// }


// /* Footer */
// .footer{
//   background-color: #282c34;
//   padding: 20px;
//   color: white;
//   text-align: center;
// }