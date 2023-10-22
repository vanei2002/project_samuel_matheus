import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  text = "Olá, meu nome é Samuel Jorge Matheus e eu sou Desenvolvedor Front-end, Tecnologias que tenho experiência:"
  ingl = "Hello, my name is Samuel Jorge Matheus and I am a Front-end Developer, Technologies I have experience with:"
  spa = "Hola, mi nombre es Samuel Jorge Matheus y soy Desarrollador Front-end, Tecnologías con las que tengo experiencia:"
  pt = "Olá, meu nome é Samuel Jorge Matheus e eu sou Desenvolvedor Front-end,Tecnologias que tenho experiência:"

  button = [
    {text: "Portugues", icons:"../assets/brazil.svg", function: ()=> this.text = this.pt},
    {text: "Inglês", icons:"../assets/usa.svg", function: ()=> this.text = this.ingl},
    {text: "Espanhol", icons:"../assets/spain.svg", function: ()=> this.text = this.spa}
  ]
  
  tecnologias = [
    "TypeScript",
    "StyledComponents",
    "Html",
    "Java",
    "Css",
    "React",
    "Angular"
  ]

  
  pageImage = "../assets/brazil.svg"
  Text = this.button[0].text;
  
  teste(): void {
    console.log('Olá, meu anjo');
  }
}
