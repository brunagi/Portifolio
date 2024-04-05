import styled from "styled-components"


//------ Barra Nav

export const StyleNav = styled.nav`
background-color: crimson;
font-family: "Crimson Pro", serif;
`

export const Lista = styled.ul`

display: flex;
justify-content: space-evenly;
align-items: center;
height: 20vh;
list-style: none;
font-family: "Pacifico", cursive;


    a{
    text-decoration: none;
    color: white;
    font-size: 4vh
    }

    a:hover{
        color:mediumseagreen;
    }

`

// ----- Componente Inicio

export const Inicio = styled.main`
background-color: MediumSeaGreen;
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: center;
height: 100vh;



img{
    margin-top: 1rem;
    border-radius: 55%;
    width: 20vw;
    
}

    h2{
        color: white;
        font-family: "Pacifico", cursive;
        font-size: 6vh;
    }

    h3{
        color: white;
        font-family: "Crimson Pro", serif;
    }


`
export const RedesSociais = styled.div`

width: 30vw;
display: flex;
justify-content: space-evenly;

img{
    
    width: 3vw;
    border-radius: 10%
}


`

//--------- Componente Sobre

export const Sobre = styled.main`
    display: flex;
    justify-content: space-evenly;
    background-color: mediumseagreen;
    height: 100vh;

`

export const Estudos = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 80vh;
    width: 25vw;
    font-size: 1.3rem;
    color: white;
    font-family: "Crimson Pro", serif;

    h2{
        color: crimson;
        font-family: "Pacifico", cursive;
        font-size: 3rem;
        
    }

    div{
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
    }
`

export const Habilidades = styled.section`


width: 25vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
font-size: 1rem;
color: white;
font-family: "Crimson Pro", serif;


div{
    display: flex;
    align-items: center;
    flex-direction: column;
}

img{
    height: 10vh;
}

h2{
        color: crimson;
        font-family: "Pacifico", cursive;
        font-size: 2.8rem;

    }

`
