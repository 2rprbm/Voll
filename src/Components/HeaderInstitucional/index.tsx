import { styled, useTheme} from "styled-components";
import { ReactComponent as Logo } from "Components/HeaderAreaInterna/assets/img/Logo.svg";
import { Box, Container, TextField, InputAdornment, useMediaQuery } from "@mui/material";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Botao from "Components/Botao";


function HeaderInstitucional () {


    const LinkEstilizado = styled(Link)`
        font-weight: ${props => props.theme.forca.linkCabecalho};
        color: ${props => props.theme.cores.linkCabecalho};
        cursor: pointer;
        text-decoration: none;
    `

    const tema = useTheme();
    const matches = useMediaQuery(`@media screen and (max-width: ${tema.breakpoints.me}`)

    return (
        <header>
            <Container sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', paddingBottom: '1rem'}}>
                <Logo/>
                <Box sx={{display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
                    {!matches && 
                        <Box sx={{display: 'flex', alignItems: 'center', columnGap: '1rem' }}> 
                            <LinkEstilizado to={"#"} >Sobre</LinkEstilizado>
                            <LinkEstilizado to={"/cadastro-clinica"}>Cadastre-se</LinkEstilizado>
                            <TextField 
                                label="Digite sua busca" 
                                size="small" 
                                type="search" 
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                        <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    }
                    <Botao>Login</Botao>
                </Box>
            </Container>
        </header>
    )
}

export default HeaderInstitucional;