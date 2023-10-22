// Me habilita utilizar códigos html.
'use client'
import {Linguagens} from "./../styled-components-css/home"


type ButtonType = { // tipagem valores como obrigatório no meu button, de para com função abaixo.
    children: any, // valor do input, recebe entrada de dados do usuário.
    type: string | any, 
    images:string
    onclick: () => void  // aciona uma função sem retorno, apenas aciona.
} 

export const Button = ({children,type,onclick,images}: ButtonType) =>{
    return <Linguagens type={type} onClick={onclick}>
            <img  style={{marginRight:"10px"}}src={images} alt={images} />
        {children}</Linguagens>
}
