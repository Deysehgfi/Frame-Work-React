import  styled  from "styled-components"

    
export  const Cores = {

    cianoEscuro:'hsl(158, 36%, 37%)',
    creme:'hsl(30, 38%, 92%)',
    preto:'hsl(212, 21%, 14%)',
    cinzaEscuro:'hsl(228, 12%, 48%)',
    branco:'hsl(0, 0%, 100%)'
 }
 
 
 export const Section = styled.section`
 display: flex;
 width: 600px;
 height: 450px;
 background-color: ${Cores.branco};
 border-radius: 15px;
 `
 export  const Image = styled.img`
 width: 300px;
 height: 100%;
 border-radius: 15px 0px 0px 15px;
 `
 export  const Box1 = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 gap: 20px;
 width: 250px;
 padding: 30px;
 `
 export  const ProdutoName = styled.h3`
 text-align: start;
 letter-spacing: 5px;
 font-size: 15px;
 color: ${Cores.cinzaEscuro};
 `
 
 export  const Precos = styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
 `
 export  const PrecoAtual = styled.h1`
 color: ${Cores.cianoEscuro};
 font-size: 40px;
 `
 export  const PrecoAnterior = styled.p`
 color: ${Cores.cinzaEscuro};
 text-decoration: line-through;
 `
 
 
 export  const Titulo = styled.h1`
 text-align: start;
 color: ${Cores.preto};
 font-size: 30px;
 width: 200px;
 `
 export  const Descricao = styled.p`
 color: ${Cores.cinzaEscuro};
 font-size: 15px;
 text-align: start;
 width: 100%;
 line-height:25px
 `
 
 
 export const Buttom = styled.button`
 background-color: ${Cores.cianoEscuro};
 border: none;
 padding: 13px;
 color: ${Cores.branco};
 border-radius: 5px;
 width: 100%;
 font-size: 15px;
 
 `
 export const Iconcart = styled.img`
 padding-right: 10px;
 `
