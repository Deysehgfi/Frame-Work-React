import styled from 'styled-components'

const Cores = {
   cianoEscur:'hsl(179, 62%, 43%)',
   amarelo: 'hsl(71, 73%, 54%)',

}



const Container = styled.div`
text-align: center;
width: 600px;
height:400px;
margin: 0 auto;
background-color: #ffffff;
margin-top:150px;
`



const Box1 = styled.div`
text-align: start;
padding:20px;
height: 150px;
display: flex;
flex-direction: column;
gap: 10px;

`

const TituloBox1 = styled.h1`
color:${Cores.cianoEscur};
font-size:25px;
`
const Section = styled.div`
 display: flex;
 height: 170px;
`

const Box2 = styled.div`
background-color: ${Cores.cianoEscur};
width:300px;
height:100%;
padding:20px;
`


const Box3 = styled.div`
background-color:hsl(179.0551181102362, 59.624413145539926%, 58.235294117647065%) ;
height:100%;
width:300px;
padding: 20px;
`
const Buttom = styled.buttom`
background-color: ${Cores.amarelo};
border: none;
border-radius:10px;
`



const App = () =>{



    return(
<>
<Container>
<Box1>
    <TituloBox1>Join our communit</TituloBox1>
    <h2>30-day, hassle-free money back guarantee</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro corporis aut quis excepturi praesentium..</p>
</Box1>

<Section>

<Box2>
    <h1>Monthly subscription</h1>
    <h2>$29</h2> 
    
    <Buttom>sing Up</Buttom>
</Box2>

<Box3>
    <h1>why up</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure eaque ullam esse rerum. Debitis numquam ratione, veniam molestiae nobis impedit sit blanditiis sequi ullam sapiente? Vel dolorum qui unde provident!</p>
</Box3>
</Section>

</Container>

</>
    )
}

export default App;