import { Box, FormControl } from '@mui/material';
import Botao from 'Components/Botao';
import InputTexto from 'Components/InputTexto';
import { styled } from 'styled-components';

interface PrimeiraParteFormularioProps{
    nomeClinica: string, 
    cnpjClinica: string, 
    emailClinica: string, 
    senhaClinica: string, 
    senhaRepetidaClinica: string,
    setNomeClinica: React.Dispatch<React.SetStateAction<string>>,
    setCnpjClinica: React.Dispatch<React.SetStateAction<string>>,
    setEmailClinica: React.Dispatch<React.SetStateAction<string>>,
    setSenhaClinica: React.Dispatch<React.SetStateAction<string>>,
    setSenhaRepetidaClinica: React.Dispatch<React.SetStateAction<string>>,
    activeStep: number,
    setActiveStep: React.Dispatch<React.SetStateAction<number>>,
}

function PrimeiraParteFormulário ({nomeClinica,cnpjClinica,emailClinica,senhaClinica,senhaRepetidaClinica,setNomeClinica,setCnpjClinica,setEmailClinica,setSenhaClinica,setSenhaRepetidaClinica,activeStep,setActiveStep}: PrimeiraParteFormularioProps ) {

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

    function avancarEtapa(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        evento.preventDefault();
        setActiveStep(activeStep + 1)
    }


    return(
        <Box sx={{boxSizing: 'border-box', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <TituloFormulario>Primeiro, alguns dados básicos:</TituloFormulario>
            <FormControl sx={{ width: '80%', margin: '0 1rem', rowGap:'1rem'}}>
                <InputTexto rotulo='Nome' descricao='Digite o nome da clinica' valor={nomeClinica} setValor={setNomeClinica}/>
                <InputTexto rotulo='CNPJ' descricao='Digite o CNPJ' valor={cnpjClinica} setValor={setCnpjClinica}/>
                <InputTexto rotulo='Email' descricao='Insira o endereço de email para login' valor={emailClinica} setValor={setEmailClinica}/>
                <InputTexto rotulo='Crie uma senha' descricao='Digite uma senha' valor={senhaClinica} setValor={setSenhaClinica}/>
                <InputTexto rotulo='Repita a senha' descricao='Repita a senha anterior' valor={senhaRepetidaClinica} setValor={setSenhaRepetidaClinica}/>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Botao onClick={(evento) => avancarEtapa(evento)} largura='40%'>Avançar</Botao>
                </Box>
            </FormControl>
        </Box>
    )
}

export default PrimeiraParteFormulário;