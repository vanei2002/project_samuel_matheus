'use client'
import { Button } from "@/components/button"
import { NavBar, Container, BackgroundImg, MyText, List, ContainerLinguagens} from "@/styled-components-css/home"
import {useState} from "react"

//rodando do lado do cliente
export default function Home(){
  
  const [apresentacao, setApresentacao] = useState("olá, meu nome é Samuel Jorge Matheus e eu sou Desenvolvedor Front-end,Tecnologias que tenho experiência:")

  const ingl: string = "Hello, my name is Samuel Jorge Matheus and I am a Front-end Developer, Technologies I have experience with:"
  const spa: string = "Hola, mi nombre es Samuel Jorge Matheus y soy Desarrollador Front-end, Tecnologías con las que tengo experiencia:"
  const pt: string = "Olá, meu nome é Samuel Jorge Matheus e eu sou Desenvolvedor Front-end,Tecnologias que tenho experiência:"

  const linguagens = [
    
    {type:"button",Image: "./usa.svg",linguagens:"Inglês",myfunction:()=> setApresentacao(ingl)}, 
    {type:"button",Image: "./brazil.svg",linguagens:"Português",myfunction:()=> setApresentacao(pt)},
    {type:"button",Image: "./spain.svg",linguagens:"Espanhol",myfunction:()=> setApresentacao(spa)},
  ]

  const tecnologias: string[] = [
    "TypeScript",
    "StyledComponents",
    "Html",
    "Java",
    "Css",
    "React",
    "Angular"
  ]//Variável sera constante, contendo array com minhas tecnologias.


  return (
    <Container>
      <NavBar>
      
        <BackgroundImg>
          <img src="./logo.png"/>
        </BackgroundImg>
      </NavBar>
      
      <MyText>
        <p>{apresentacao}</p>
      </MyText>
    <List>
    {tecnologias.map(skills => <li>{skills}</li>) }
    </List>
    <ContainerLinguagens>
      {linguagens.map(ling =>
      
      <Button images={ling.Image} type={ling.type} children={ling.linguagens}onclick={ling.myfunction}/>
      )}
    </ContainerLinguagens>
    
    </Container>
  )
}
