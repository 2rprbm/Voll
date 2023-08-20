import { Container, Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Botao from 'Components/Botao';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TelaSucesso(){

    const navegacao = useNavigate();
    
    function retornarTela(){
        navegacao('/area-interna')
    }

    function consultarClinicas(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        evento.preventDefault();
        axios.get('http://localhost:8080/clinicas')
            .then((resposta) => {
                console.log(resposta.data)
            }).catch(erro => {
                alert(erro)
            })
        }

    return(
        <Container sx={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>        
            <Box sx={{display: 'flex', columnGap:'1.5rem', marginBottom: '2rem'}}>
                <Botao largura={'50%'} onClick={retornarTela}>Voltar</Botao>
                <Botao largura={'50%'} onClick={(evento) => consultarClinicas(evento)}>Consultar Clínicas</Botao>
            </Box>
            <Alert sx={{fontSize: '2rem', height: '30vh', width: '50vw', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <AlertTitle sx={{fontSize: '3rem'}}>Confirmado!</AlertTitle>
                    Clínica cadastrada com <strong>sucesso!</strong>
            </Alert>
        </Container>

    )
}

export default TelaSucesso;