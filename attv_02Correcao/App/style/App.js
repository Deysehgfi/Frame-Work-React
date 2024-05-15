import styled from 'styled-components'

const Cores = {

    cianoEscuro:'hsl(158, 36%, 37%)',
    creme:'hsl(30, 38%, 92%)',
    preto:'hsl(212, 21%, 14%)',
    cinzaEscuro:'hsl(228, 12%, 48%)',
    branco:'hsl(0, 0%, 100%)'
 }
 
 
export const Container = styled.section`
 display: flex;
 width: 600px;
 height: 450px;
 background-color: ${Cores.branco};
 border-radius: 15px;
overflow: hidden; //Corta tudo que estiver fora da caixa */
 @media (max-width: 640px){
    flex-direction: column;
 }
 `

export const Image = styled.img`
width: 50%;
@media (max-width: 800px){

 }
`

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 20px;
width: 250px;
padding: 30px;
`
export const ProdutoName = styled.h3`
text-align: start;
letter-spacing: 5px;
font-size: 15px;
color: ${Cores.cinzaEscuro};
font-family: 'Montserrat', sans-serif;
font-weight: 400;
`
export const Titulo = styled.h1`
text-align: start;
color: ${Cores.preto};
font-size: 30px;
font-weight: 700;
width: 200px;
font-family: 'Fraunces', sans-serif;
`
export const Descricao = styled.p`
color: ${Cores.cinzaEscuro};
font-size: 15px;
width: 100%;
line-height:25px;
font-family: 'Montserrat', sans-serif;
font-weight: 500;
`


export const Buttom = styled.button`
background-color: ${Cores.cianoEscuro};
border: none;
padding: 13px;
color: ${Cores.branco};
border-radius: 5px;
width: 100%;
font-size: 15px;
font-family: 'Montserrat', sans-serif;
font-weight: 700;
cursor: pointer; //alterar a seta do mouse 
transition: 0.3s;

&:hover{
    background-color: ${Cores.preto};
    /* filter:brightness(0.8) */
}

`
export const Precos = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
export const PrecoAtual = styled.h1`
color: ${Cores.cianoEscuro};
font-size: 40px;
`
export const PrecoAnterior = styled.p`
color: ${Cores.cinzaEscuro};
text-decoration: line-through;
`