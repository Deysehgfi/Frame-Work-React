import { Container ,Image, InfoContainer, ProdutoName, Titulo, Descricao, Buttom, Precos, PrecoAnterior,PrecoAtual} from "./style/App"
import IconCart from '../../attv_02FrameWork/Perfume-card/images/icon-cart.svg'
import perfumeImg from '../../attv_02FrameWork/Perfume-card/images/image-product-desktop.jpg'

const App = () =>{

    return(
        <>
        <Container>
            <Image src={perfumeImg} alt="" />
            <InfoContainer>
            <ProdutoName>PERFUME</ProdutoName> 
            <Titulo>Gabrielle Essence Eau DE    Parfum</Titulo>
            <Descricao>A floraal, solar and voluptuos interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</Descricao>
            <Precos>
                    <PrecoAtual>$149.99</PrecoAtual>
              
                    <PrecoAnterior>$169.99</PrecoAnterior>
                </Precos>
                
            <Buttom><img src={IconCart} alt="" />
                Add to Cart</Buttom>


    
            </InfoContainer>

        </Container>
        </>
    )
}

export default App;


