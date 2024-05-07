import React from 'react'
import githubNegro from "../assets/images/githubnegro.png"
import LinkedIn from "../assets/images/linkedin.png"

function About() {
    const aboutContainerStyles ={
        display: "flex",
        flexDirection: "column",
        gap: "10px" ,
    
    }
    const aboutChildStyles = {
        margin: "16px",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "10px",
         display: "flex",
        flexDirection: "column",
        alignItems: "center"
        
    }

  return (
    <div style={aboutContainerStyles}>
        <div style={aboutChildStyles}>
            <h3>🥓Águeda Muela🥓</h3>
            <p>Estudiante de Ironhack afincada en Granada</p>
            <div>
            
            <a target='blank' href="https://www.linkedin.com/in/agueda-muela/" style={{color: "#ff6b8e"}}><img src={LinkedIn} alt="Linkedin" height="20px" />
            Linkedin</a>
            </div>
            <br />
            <div>
            <a target='blank' href="https://github.com/lamardemuela" style={{color: "#ff6b8e"}}>
            <img src={githubNegro} alt="github" height="20px" />
            Github</a>
            </div>
        </div>
        <div style={aboutChildStyles}>
        <h3>🥓Xavier Valverde🥓</h3>
            <p>Estudiante de Ironhack tirado en Alcalá de Henares</p>
            <div style={{display: "flex", alingItems: "center"}}>
            <a target='blank' href="https://www.linkedin.com/in/xavier-valverde-ab8682139/" style={{color: "#ff6b8e"}}>
            <img src={LinkedIn} alt="Linkedin" height="20px" />
            Linkedin</a>
            </div>
            <br />
            <div style={{display: "flex", alingItems: "center"}}>
            <a  target='blank' href="https://github.com/Valveider-X" style={{color: "#ff6b8e"}}>
                <img src={githubNegro} alt="github" height="20px" />GitHub</a>
                </div>
        </div>
        <div style={aboutChildStyles}>
            <h3>🐽Descripción del Proyecto🐽</h3>
            <p>El objetivo de este proyecto es conseguir todas las recetas más gochas para que disfrutéis como un <b>gorrino.</b></p>
        </div>
    </div>
  )
}

export default About