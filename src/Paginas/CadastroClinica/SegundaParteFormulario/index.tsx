import { Box, FormControl } from '@mui/material';
import Botao from 'Components/Botao';
import InputTexto from 'Components/InputTexto';
import axios from 'axios';
import { useState } from 'react';
import { styled } from 'styled-components';

interface SegundaParteFormularioProps{
    telefoneClinica: string,
    cepClinica: string, 
    ruaClinica: string, 
    numeroClinica: string, 
    complementoClinica: string,
    cidadeClinica: string,
    estadoClinica: string,
    setTelefoneClinica: React.Dispatch<React.SetStateAction<string>>,
    setCepClinica: React.Dispatch<React.SetStateAction<string>>,
    setRuaClinica: React.Dispatch<React.SetStateAction<string>>,
    setNumeroClinica: React.Dispatch<React.SetStateAction<string>>,
    setComplementoClinica: React.Dispatch<React.SetStateAction<string>>,
    setCidadeClinica: React.Dispatch<React.SetStateAction<string>>,
    setEstadoClinica: React.Dispatch<React.SetStateAction<string>>,
    cadastrarClinicaNova: (evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    activeStep: number,
    setActiveStep: React.Dispatch<React.SetStateAction<number>>,
}

function SegundaParteFormulário ({telefoneClinica, cepClinica, ruaClinica, numeroClinica, complementoClinica, cidadeClinica, estadoClinica, setTelefoneClinica, setCepClinica, setRuaClinica, setNumeroClinica, setComplementoClinica, setCidadeClinica, setEstadoClinica, cadastrarClinicaNova, activeStep, setActiveStep}: SegundaParteFormularioProps ) {

const TituloFormulario = styled.h2`
    font-family: ${props => props.theme.fonte.geral};
    font-weight: ${props => props.theme.forca.tituloFormulario};
    font-size: ${props => props.theme.tamanho.tituloFormulario};
    color: ${props => props.theme.cores.tituloFormulario};
    width: 40%;
    align-self: center;
    text-align: center;
    margin: 0;
`

    return(
        <Box sx={{boxSizing: 'border-box', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <TituloFormulario>Agora, os dados técnicos:</TituloFormulario>
            <FormControl sx={{ width: '80%', margin: '0 1rem', rowGap:'1rem'}}>
                <InputTexto rotulo='Telefone' descricao='(DDD) XXXXX-XXXX' valor={telefoneClinica} setValor={setTelefoneClinica}/>
                <InputTexto rotulo='CEP' descricao='Insira o CEP' valor={cepClinica} setValor={setCepClinica}/>
                <InputTexto rotulo='Endereco' descricao='Rua' valor={ruaClinica} setValor={setRuaClinica}/>
                <Box sx={{display: 'grid', columnGap: '1.5rem', gridTemplateColumns: '1fr 2fr'}}>
                    <InputTexto descricao='Número' valor={numeroClinica} setValor={setNumeroClinica}/>
                    <InputTexto descricao='Complemento' valor={complementoClinica} setValor={setComplementoClinica}/>
                </Box>
                <Box sx={{display: 'grid', columnGap: '1.5rem', gridTemplateColumns: '2fr 1fr'}}>
                    <InputTexto descricao='Cidade' valor={cidadeClinica} setValor={setCidadeClinica}/>
                    <InputTexto descricao='Estado' valor={estadoClinica} setValor={setEstadoClinica}/>
                </Box>
                <Box sx={{marginTop: '1.5rem', display: 'flex', justifyContent: 'center'}}>
                    <Botao onClick={(evento) => cadastrarClinicaNova(evento)} largura='40%'>Cadastrar</Botao>
                </Box>
            </FormControl>
        </Box>
    )
}

export default SegundaParteFormulário;