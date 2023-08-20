import Banner from "Components/Banner";
import banner from 'Components/Banner/assets/img/banner.png';
import { Container, Paper, Box, InputBase, Divider, IconButton, ListItem, Chip, useMediaQuery, MenuList, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Botao from "Components/Botao";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled, useTheme } from "styled-components";
import { useState } from "react";
import CardServico from "Components/CardServico";
import { tiposServicos } from "tema";
import Depoimento from "Components/Depoimento";
import { depoimentos } from 'tema'
import { Outlet } from "react-router-dom";
import TituloSecao from "Components/TituloSecao";
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';




function PaginaBase() {

    const TituloPaper = styled('h3')`
        font-size: ${props => props.theme.tamanho.tituloPaper};
        color: ${props => props.theme.cores.tituloPaper};
        font-weight: ${props => props.theme.forca.tituloPaper};
        margin-top: 2rem;
    `

    const TituloSecaoDepoimentos = styled('h2')`
        font-size: ${props => props.theme.tamanho.tituloSecaoDepoimentos};
        color: ${props => props.theme.cores.tituloSecaoDepoimentos};
        font-weight: ${props => props.theme.forca.tituloSecaoDepoimentos};
        margin-bottom: 2rem;
        margin-top: 0;
        text-align: center;
    `

    interface TagsProps {
        key: number,
        label: string,
    }

    const [tags, setTag] = useState<TagsProps[]>([
        { key: 0, label: 'Neurologista' },
        { key: 1, label: 'Dermatologista' },
        { key: 2, label: 'Cardiologista' },
        { key: 3, label: 'Ortopedista' },
        { key: 4, label: 'Oftalmologista' },
        { key: 5, label: 'Pediatra' },
        { key: 6, label: 'Otorrinolaringologista' },
    ]);

    const tema = useTheme();
    const matchesSmall = useMediaQuery(`@media screen and (max-width: ${tema.breakpoints.sm}`)
    const matchesMedium = useMediaQuery(`@media screen and (max-width: ${tema.breakpoints.me}`)


    function deletarTag(tag: TagsProps){
        setTag(tags.filter((item) => tag.label !== item.label))
    }

    const MenuItemEstilizado = styled(MenuItem)`
        display: flex;
        flex-direction: column;
        row-gap: 0.25rem;
        align-items: center;
    `

    const ListItemIconEstilizado = styled(ListItemIcon)`
        display: flex;
        justify-content: center;
        color: ${props => props.theme.cores.textoIcone} !important;
    `

    const ListItemTextEstilizado = styled(ListItemText)`   
        font-weight: ${props => props.theme.forca.textoIcone} !important;
        color: ${props => props.theme.cores.textoIcone} !important;
    `    

    return (
        <>
            <Outlet />
            {matchesSmall && <TituloSecao>Boas-vindas!</TituloSecao>}
            <Banner imagem={banner}/>
            <Container sx={{marginBottom: '2rem'}}>
                <Paper elevation={6} sx={{marginTop: "2rem", marginBottom: "2rem", padding: '2rem', borderRadius: '8px', boxShadow: '4px 4px 8px 0 rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{"@media (max-width: 767px)": { flexDirection: 'column', rowGap: '1rem', width: '100%'}, "@media (max-width: 1439px)": { maxWidth: '100%'}, display: 'flex', columnGap: '1rem'}}>
                        <Paper
                            sx={{"@media (max-width: 767px)": { width: '100%'}, display: 'flex', alignItems: 'center', width: 400, backgroundColor: "#F8F8F8", borderRadius: '8px' }}
                        >
                            <IconButton sx={{ p: '10px', backgroundColor: "#EDEDED", borderRadius: '0' }}>
                                <SearchIcon />
                            </IconButton>
                            <Divider sx={{ height: '100%' }} orientation="vertical" />
                            <InputBase
                                sx={{ ml: 1, flex: 1, fontFamily: 'Public Sans, sans-serif' }}
                                placeholder="Digite a especialidade"
                            />
                        </Paper>
                        <Paper
                            sx={{"@media (max-width: 767px)": { width: '100%'}, display: 'flex', alignItems: 'center', width: 400, backgroundColor: "#F8F8F8", borderRadius: '8px' }}
                        >
                            <IconButton sx={{ p: '10px', backgroundColor: "#EDEDED", borderRadius: '0' }}>
                                <LocationOnIcon />
                            </IconButton>
                            <Divider sx={{ height: '100%' }} orientation="vertical" />
                            <InputBase
                                sx={[{ ml: 1, flex: 1, fontFamily: 'Public Sans, sans-serif', '&:placeholder': {color: '#6B6E71'}}]}
                                placeholder="Digite sua localização"
                            />
                        </Paper>
                        <Botao>Buscar</Botao>
                    </Box>
                    <TituloPaper>Você pode estar procurando por estas categorias:</TituloPaper>
                    <Box sx={{display: 'flex', columnGap: '0.5rem', flexWrap: 'wrap', maxWidth: '100%'}}>
                        {tags.map((tag) => {
                            return (
                                <ListItem key={tag.key} sx={{paddingLeft: '0', paddingRight: '0', width: 'auto'}}>
                                    <Chip
                                        label={tag.label}
                                        onDelete={() => deletarTag(tag)}
                                    />
                                </ListItem> 
                            )
                        })}
                    </Box>
                </Paper>
                <Box sx={{"@media (max-width: 1439px)": { flexWrap: 'wrap'}, display: 'flex', columnGap: '1.5rem', justifyContent: 'center'}}>
                    {tiposServicos.map(servico => 
                        <CardServico Icone={servico.icone} texto={servico.texto}/>
                    )}
                </Box>
                {matchesMedium &&
                    <Box sx={{boxSizing: 'border-box'}}>
                        <Paper sx={{boxSizing: 'border-box', padding: '1rem', position: 'fixed', bottom: '0', left: '0', width: '100%', backgroundColor: '#0B3B60'}}>
                            <MenuList sx={{padding: '0', display: 'flex', columnGap: '1rem', justifyContent: 'center'}}>
                                <MenuItemEstilizado>
                                    <ListItemIconEstilizado>
                                        <HomeIcon fontSize="small" />
                                    </ListItemIconEstilizado>
                                    <ListItemTextEstilizado sx={{fontFamily: `${tema.fonte.geral}`, fontSize: `${tema.tamanho.textoIcone}`}}>Início</ListItemTextEstilizado>
                                </MenuItemEstilizado>
                                <MenuItemEstilizado>
                                    <ListItemIconEstilizado>
                                        <CalendarMonthIcon fontSize="small" />
                                    </ListItemIconEstilizado>
                                    <ListItemTextEstilizado sx={{fontFamily: `${tema.fonte.geral}`, fontSize: `${tema.tamanho.textoIcone}`}}>Consultas</ListItemTextEstilizado>
                                </MenuItemEstilizado>
                                <MenuItemEstilizado>
                                    <ListItemIconEstilizado>
                                        <SearchIcon fontSize="small" />
                                    </ListItemIconEstilizado>
                                    <ListItemTextEstilizado sx={{fontFamily: `${tema.fonte.geral}`, fontSize: `${tema.tamanho.textoIcone}`}}>Explorar</ListItemTextEstilizado>
                                </MenuItemEstilizado>
                                <MenuItemEstilizado>
                                    <ListItemIconEstilizado>
                                        <PersonIcon fontSize="small" />
                                    </ListItemIconEstilizado>
                                    <ListItemTextEstilizado sx={{fontFamily: `${tema.fonte.geral}`, fontSize: `${tema.tamanho.textoIcone}`}}>Perfil</ListItemTextEstilizado>
                                </MenuItemEstilizado>
                            </MenuList>
                        </Paper>
                    </Box>
                }
                <Box sx={{display: 'flex', flexDirection: 'column', columnGap: '1.5rem', marginTop: '2rem'}}>
                    <TituloSecaoDepoimentos>Depoimentos</TituloSecaoDepoimentos>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {depoimentos.map(depoimento => 
                            <Depoimento texto={depoimento.texto} autor={depoimento.autor} />
                        )}
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default PaginaBase;