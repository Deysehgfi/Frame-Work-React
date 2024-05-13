import Img from '../Perfume-card/images/image-product-desktop.jpg'
import IconCart from '../Perfume-card/images/icon-cart.svg'
import styled from 'styled-components'



const Cores = {

   cianoEscuro:'hsl(158, 36%, 37%)',
   creme:'hsl(30, 38%, 92%)',
   preto:'hsl(212, 21%, 14%)',
   cinzaEscuro:'hsl(228, 12%, 48%)',
   branco:'hsl(0, 0%, 100%)'
}


const Section = styled.section`
display: flex;
width: 600px;
height: 450px;
background-color: ${Cores.branco};
border-radius: 15px;
`
const Image = styled.img`
width: 300px;
height: 100%;
border-radius: 15px 0px 0px 15px;
`
const Box1 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 20px;
width: 250px;
padding: 30px;
`
const ProdutoName = styled.h3`
text-align: start;
letter-spacing: 5px;
font-size: 15px;
color: ${Cores.cinzaEscuro};
`

const Precos = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
const PrecoAtual = styled.h1`
color: ${Cores.cianoEscuro};
font-size: 40px;
`
const PrecoAnterior = styled.p`
color: ${Cores.cinzaEscuro};
text-decoration: line-through;
`


const Titulo = styled.h1`
text-align: start;
color: ${Cores.preto};
font-size: 30px;
width: 200px;
`
const Descricao = styled.p`
color: ${Cores.cinzaEscuro};
font-size: 15px;
text-align: start;
width: 100%;
line-height:25px
`


const Buttom = styled.button`
background-color: ${Cores.cianoEscuro};
border: none;
padding: 13px;
color: ${Cores.branco};
border-radius: 5px;
width: 100%;
font-size: 15px;

`
const Iconcart = styled.img`
padding-right: px;
`




const App = ()=>{

    return(

        <>
        <Section>
            <Image src={Img} alt="produto perfume" />
            <Box1>
               <ProdutoName>PERFUME</ProdutoName>
                <Titulo>Gabrielle Essence Eau DE Parfum</Titulo>
                <Descricao>A floraal, solar and voluptuos interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</Descricao>
                
                <Precos>
                    <PrecoAtual>$149.99</PrecoAtual>
              
                    <PrecoAnterior>$169.99</PrecoAnterior>
                </Precos>
                

                <Buttom>
                <Iconcart src={IconCart} alt="" />
                Add to Cart</Buttom>
             


            </Box1>
        </Section>
        </>
    )
}

export default App;