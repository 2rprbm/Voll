import { styled } from "styled-components";
import { ReactComponent as Logo } from "Components/HeaderAreaInterna/assets/img/Logo.svg";
import usuarioFoto from "Components/HeaderAreaInterna/assets/img/usuario-mini.png";
import { Box, Container } from "@mui/material";
import { Link } from 'react-router-dom';

function HeaderAreaInterna () {

    const LinkEstilizado = styled(Link)`
        font-weight: ${props => props.theme.forca.linkCabecalho};
        color: ${props => props.theme.cores.linkCabecalho};
        cursor: pointer;
        text-decoration: none;
    `
    
    return (

        <header>
            <Container sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', paddingBottom: '1rem'}}>
                <Logo/>
                <Box sx={{display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
                    <img src={usuarioFoto}/>
                    <LinkEstilizado to={"/"} >Sair</LinkEstilizado>
                </Box>
            </Container>
        </header>
    )
}

export default HeaderAreaInterna;