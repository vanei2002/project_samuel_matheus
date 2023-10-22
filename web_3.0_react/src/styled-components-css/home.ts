import styled from "styled-components";

export const Container = styled.body`
    padding: 0;
    margin: 0;
    background: #121212;
    color: #fff;
`

 export const NavBar = styled.nav` // criei tag (nav) 
    background: #27272A;
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

`
export const BackgroundImg = styled.div`
    background: #626264;
    padding: 5px;
    border-radius: 10px;
`

export const MyText = styled.div`
    width: 650px;
    margin: 0 auto;
    padding-top: 5rem;
    font-size: 24px;
    margin-bottom: 50px;
`

export const List = styled.ul`
    padding: 5px;
    padding-left: 30px;
    width: 650px;
    margin: 0 auto;
    font-size: 18px;
    border-radius: 8px;
    border: 1px solid #9D4B00;
    background: #27272A;
`
export const Linguagens = styled.button`
    padding: 10px;
    border:none;
    border-radius: 10px;
    background: #27272A;
    color: #fff;
    margin: 0 15px;
    display: flex;
    align-items: center;
`
export const ContainerLinguagens = styled.div`
    display: flex;
    width: 350px;
    margin: 0 auto;
    margin-top: 13rem;
`