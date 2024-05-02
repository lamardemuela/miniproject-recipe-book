import React from 'react'

function About() {
    const aboutContainerStyles ={
        display: "flex",
        flexDirection: "column",
        gap: "10px" 
    }
    const aboutChildStyles = {
        margin: "16px",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "10px"
    }

  return (
    <div style={aboutContainerStyles}>
        <div style={aboutChildStyles}>
            <h3>🥓Águeda Muela🥓</h3>
            <p>Estudiante de Ironhack afincada en Granada</p>
            <a href="https://www.linkedin.com/in/agueda-muela/">Linkedin</a>
            <br />
            <a href="https://github.com/lamardemuela">Github</a>
        </div>
        <div style={aboutChildStyles}>
        <h3>🥓Xavier Valverde🥓</h3>
            <p>Estudiante de Ironhack tirado en Alcalá de Henares</p>
            <a href="https://www.linkedin.com/in/xavier-valverde-ab8682139/">Linkedin</a>
            <br />
            <a href="https://github.com/Valveider-X">Github</a>
        </div>
        <div style={aboutChildStyles}>
            <h3>🐽Descripción del Proyecto🐽</h3>
            <p>El objetivo de este proyecto es conseguir todas las recetas más gochas para que disfrutéis como un <b>gorrino.</b></p>
        </div>
    </div>
  )
}

export default About