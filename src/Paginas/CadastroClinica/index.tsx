import {Container, Paper, Box, Stepper, StepLabel, Step} from '@mui/material';
import {ReactComponent as Logo} from 'Components/HeaderAreaInterna/assets/img/Logo.svg';
import { useState } from 'react';
import { styled } from 'styled-components';
import PrimeiraParteFormulário from './PrimeiraParteFormulario';
import SegundaParteFormulário from './SegundaParteFormulario';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

function CadastroClinica() {

    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState<{[k: number]: boolean;}>({});

      interface StepIconProps {
        cor: string,
      }

      const StepIconCustomizado = styled.div<StepIconProps>`
        background-color: ${({cor}) => cor};
        width: 24px;
        height: 24px;
        border-radius: 50%;
      `

    const [nomeClinica, setNomeClinica] = useState<string>("")
    const [cnpjClinica, setCnpjClinica] = useState<string>("")
    const [emailClinica, setEmailClinica] = useState<string>("")
    const [senhaClinica, setSenhaClinica] = useState<string>("")
    const [senhaRepetidaClinica, setSenhaRepetidaClinica] = useState<string>("")
    const [telefoneClinica, setTelefoneClinica] = useState<string>("")
    const [cepClinica, setCepClinica] = useState<string>("")
    const [ruaClinica, setRuaClinica] = useState<string>("")
    const [numeroClinica, setNumeroClinica] = useState<string>("")
    const [complementoClinica, setComplementoClinica] = useState<string>("")
    const [cidadeClinica, setCidadeClinica] = useState<string>("")
    const [estadoClinica, setEstadoClinica] = useState<string>("")

    const navegacao = useNavigate();

    function cadastraClinicaNova(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        evento.preventDefault();
        const clinicaAdicionada = {
            nome: nomeClinica,
            cnpj: cnpjClinica,
            email: emailClinica,
            telefone: telefoneClinica,
            endereco: {
                rua: ruaClinica,
                numero: numeroClinica,
                complemento: complementoClinica,
                cep: cepClinica,
                cidade: cidadeClinica,
                estado: estadoClinica
            }
        }
        axios.post('http://localhost:8080/clinicas', {
            headers: {
                contentType: 'application/json',
            },
            body: {
                data: clinicaAdicionada,
            }
        })
            .then((resposta) => {
                navegacao('/cadastro-clinica/sucesso')
            }).catch(erro => {
                alert(erro)
            })
        }
    

    return (
        <Container sx={{display: 'flex', justifyContent: 'center', backgroundImage: 'url(assets/img/background-e.png)', padding: '0px !important', backgroundColor: '#339CFF', maxWidth: '100% !important'}}>
            <Paper elevation={3} sx={{height: '100vh', maxWidth: '60%', width: '60%', padding: '1rem 0'}}>
                <Box sx={{textAlign: 'center'}}>
                    <Logo />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', rowGap: '1rem', marginTop: '2rem'}}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        <Step>
                            <StepLabel 
                                StepIconComponent={(props) => (
                                    <StepIconCustomizado cor={props.active || activeStep > 0 ? 'lightblue' : 'lightgray'} />
                                )}
                            />
                        </Step>
                        <Step>
                            <StepLabel 
                                StepIconComponent={(props) => (
                                    <StepIconCustomizado cor={props.active ? 'lightblue' : 'lightgray'} />
                                )}
                            />
                        </Step>
                    </Stepper>
                </Box>
                {activeStep === 0 ? 
                    <PrimeiraParteFormulário 
                        nomeClinica={nomeClinica} 
                        cnpjClinica={cnpjClinica} 
                        emailClinica={emailClinica} 
                        senhaClinica={senhaClinica} 
                        senhaRepetidaClinica={senhaRepetidaClinica}
                        setNomeClinica={setNomeClinica}
                        setCnpjClinica={setCnpjClinica}
                        setEmailClinica={setEmailClinica}
                        setSenhaClinica={setSenhaClinica}
                        setSenhaRepetidaClinica={setSenhaRepetidaClinica}
                        activeStep={activeStep} 
                        setActiveStep={setActiveStep}
                    /> 
                    : <SegundaParteFormulário 
                        telefoneClinica={telefoneClinica} 
                        cepClinica={cepClinica} 
                        ruaClinica={ruaClinica} 
                        numeroClinica={numeroClinica} 
                        complementoClinica={complementoClinica}
                        cidadeClinica={cidadeClinica}
                        estadoClinica={estadoClinica}
                        setTelefoneClinica={setTelefoneClinica}
                        setCepClinica={setCepClinica}
                        setRuaClinica={setRuaClinica}
                        setNumeroClinica={setNumeroClinica}
                        setComplementoClinica={setComplementoClinica}
                        setCidadeClinica={setCidadeClinica}
                        setEstadoClinica={setEstadoClinica}
                        cadastrarClinicaNova={cadastraClinicaNova}
                        activeStep={activeStep} 
                        setActiveStep={setActiveStep}/>}
            </Paper>
        </Container>
    )
}

export default CadastroClinica;