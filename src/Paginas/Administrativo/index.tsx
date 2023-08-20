import { Box, Container, Modal, Paper, FormControl, Switch, FormControlLabel, Checkbox, FormLabel, FormGroup} from "@mui/material";
import Botao from "Components/Botao";
import CardAvaliacao from "Components/CardAvaliacao";
import HeaderAreaInterna from "Components/HeaderAreaInterna";
import TabelaDados from "Components/TabelaDados"
import TituloSecao from "Components/TituloSecao";
import { useEffect, useState } from "react";
import axios from 'axios';
import { ConsultasDiaProps, DadosAvaliacoesProps, QuantidadeConsultasProps } from "tema";
import GraficoDados from "./GraficoDados";
import { styled } from "styled-components";
import InputTexto from "Components/InputTexto";
import {planos} from 'tema'
import { useNavigate } from "react-router-dom";

function Administrativo () {

    const [consultasDia, setConsultasDia] = useState<ConsultasDiaProps[]>([])
    const [qtdConsultaProfissional, setQtdConsultaProfissional] = useState<QuantidadeConsultasProps[]>([])
    const [dadosAvaliacoes, setDadosAvaliacoes] = useState<DadosAvaliacoesProps[]>([])
    const date = new Date();

    function pegaDadosConsulta() {
        axios.get('http://localhost:8080/consultas')
        .then((resposta) => {
            setConsultasDia(resposta.data)
        }).catch(erro => {
            alert(erro)
        })
    }

    function pegaDadosQtdConsultaProfissional() {
        axios.get('http://localhost:8080/qntdconsultas')
        .then((resposta) => {
            setQtdConsultaProfissional(resposta.data)
        }).catch(erro => {
            alert(erro)
        })
    }

    function pegaDadosAvaliacao() {
        axios.get('http://localhost:8080/profissionais')
        .then((resposta) => {
            setDadosAvaliacoes(resposta.data)
        }).catch(erro => {
            alert(erro)
        })
    }

    useEffect(() => {
        pegaDadosConsulta();
        pegaDadosQtdConsultaProfissional();
        pegaDadosAvaliacao();
    }, [])

    const SubTituloEstilizado = styled('h3')`
       font-weight: ${props => props.theme.forca.subtitulo};
       font-size: ${props => props.theme.tamanho.subtitulo};
       color: ${props => props.theme.cores.subtitulo};
       margin: 0;
    `

    const [aberto, setAberto] = useState<boolean>(false);

    const [possuiPlano, setPossuiPlano] = useState<boolean>(false);
    const [nomeEspecialista, setNomeEspecialista] = useState<string>("")
    const [emailEspecialista, setEmailEspecialista] = useState<string>("")
    const [senhaEspecialista, setSenhaEspecialista] = useState<string>("")
    const [senhaRepetidaEspecialista, setSenhaRepetidaEspecialista] = useState<string>("")
    const [telefoneEspecialista, setTelefoneEspecialista] = useState<string>("")
    const [cepEspecialista, setCepEspecialista] = useState<string>("")
    const [ruaEspecialista, setRuaEspecialista] = useState<string>("")
    const [numeroEspecialista, setNumeroEspecialista] = useState<string>("")
    const [complementoEspecialista, setComplementoEspecialista] = useState<string>("")
    const [cidadeEspecialista, setCidadeEspecialista] = useState<string>("")
    const [estadoEspecialista, setEstadoEspecialista] = useState<string>("")
    const [crmEspecialista, setCrmEspecialista] = useState<string>("")
    const [especialidadeEspecialista, setEspecialidadeEspecialista] = useState<string>("")
    
    const navegacao = useNavigate();

    function abrirModal(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        evento.preventDefault();
        setAberto(true)
    }

      const [planosSelecionados, setPlanosSelecionados] = useState<string[]>([])
    
      const selecionarPlano = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.checked) {
            const novoArray = planosSelecionados;
            novoArray.push(evento.target.name)
            setPlanosSelecionados(novoArray)
        } else{
            setPlanosSelecionados(planosSelecionados.filter((plano) => plano !== evento.target.name))
        }                                              
      };


      function cadastrarEspecialista(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        evento.preventDefault();
        const especialistaCadastrado = {
            nome: nomeEspecialista,
            email: emailEspecialista,
            telefone: telefoneEspecialista, 
            endereco: {
                cep: cepEspecialista, 
                rua: ruaEspecialista,
                numero: numeroEspecialista,
                complemento: complementoEspecialista,
                cidade: cidadeEspecialista,
                estado: estadoEspecialista
            },
            especialidade: especialidadeEspecialista,
            crm: crmEspecialista,
            plano: possuiPlano ? 'sim' : 'não',
            planos: planosSelecionados
        }
        axios.post('http://localhost:8080/especialistas', {
            headers: {
                contentType: 'application/json',
            },
            body: {
                data: especialistaCadastrado,
            }
        })
            .then((resposta) => {
                navegacao('/administrativo/cadastro-especialista/sucesso')
            }).catch(erro => {
                alert(erro)
            })
      }

    return (
        <>
            <HeaderAreaInterna />  
            <Container sx={{"@media (min-width: 1248px)": { maxWidth: '1200px', justifyContent: 'center', margin: '5rem auto'}, width: 'auto', display: 'flex', flexDirection: 'column', rowGap: '2rem', bgcolor: "#E7EBEF", padding: '1rem', margin: '5rem 1.5rem', borderRadius: '1rem'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', rowGap: '1.5rem'}}>
                    <TituloSecao tipo='h2'>
                        Área administrativa
                    </TituloSecao>
                    <Botao largura='25%' onClick={(evento) => abrirModal(evento)}>Cadastrar especialista</Botao>
                        <Modal
                            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            open={aberto}
                            onClose={() => setAberto(false)}
                        >
                            <Paper elevation={3} 
                                sx={{border: 'none', boxSizing: 'border-box', overflowY: 'auto', maxHeight: '90vh', alignItems: 'center', borderRadius: '1.5rem', padding: '1rem 0', display: 'flex', flexDirection: 'column', backgroundColor: "#FFFFFF"}}
                            >
                                <TituloSecao>
                                    Cadastre o especialista inserindo os dados abaixo:
                                </TituloSecao>
                                <FormControl sx={{maxWidth: '80%', rowGap:'1rem', alignSelf: 'center', marginTop: '1.5rem'}}>
                                    <InputTexto rotulo='Nome' descricao='Digite o nome do especialista' valor={nomeEspecialista} setValor={setNomeEspecialista}/>
                                    <InputTexto rotulo='Email' descricao='Insira o endereço de email do especialista' valor={emailEspecialista} setValor={setEmailEspecialista}/>
                                    <InputTexto rotulo='Crie uma senha' descricao='Digite uma senha' valor={senhaEspecialista} setValor={setSenhaEspecialista}/>
                                    <InputTexto rotulo='Repita a senha' descricao='Repita a senha anterior' valor={senhaRepetidaEspecialista} setValor={setSenhaRepetidaEspecialista}/>
                                    <InputTexto rotulo='Especialidade' descricao='Qual a sua especialidade' valor={especialidadeEspecialista} setValor={setEspecialidadeEspecialista}/>
                                    <InputTexto rotulo='CRM' descricao='Insira seu número de registro' valor={crmEspecialista} setValor={setCrmEspecialista}/>
                                    <InputTexto rotulo='Telefone' descricao='(DDD) XXXXX-XXXX' valor={telefoneEspecialista} setValor={setTelefoneEspecialista}/>
                                    <InputTexto rotulo='Endereco' descricao='Rua' valor={ruaEspecialista} setValor={setRuaEspecialista}/>
                                    <InputTexto descricao='Insira o CEP' valor={cepEspecialista} setValor={setCepEspecialista}/>
                                    <Box sx={{display: 'grid', columnGap: '1.5rem', gridTemplateColumns: '1fr 2fr'}}>
                                        <InputTexto descricao='Número' valor={numeroEspecialista} setValor={setNumeroEspecialista}/>
                                        <InputTexto descricao='Complemento' valor={complementoEspecialista} setValor={setComplementoEspecialista}/>
                                    </Box>
                                    <Box sx={{display: 'grid', columnGap: '1.5rem', gridTemplateColumns: '2fr 1fr'}}>
                                        <InputTexto descricao='Cidade' valor={cidadeEspecialista} setValor={setCidadeEspecialista}/>
                                        <InputTexto descricao='Estado' valor={estadoEspecialista} setValor={setEstadoEspecialista}/>
                                    </Box>
                                    <Box sx={{marginTop: '0.5rem', display: 'flex', flexDirection: 'column', rowGap: '0.25rem', alignItems: 'center'}}>
                                        <SubTituloEstilizado>Atende por plano?</SubTituloEstilizado>
                                        <FormControlLabel
                                            sx={{display: 'flex', flexDirection: 'column'}} 
                                                control={<Switch
                                                            checked={possuiPlano}
                                                            onChange={() => {setPlanosSelecionados([]); setPossuiPlano(!possuiPlano)}}
                                                        />      
                                                } 
                                            label="Não | Sim" 
                                        />
                                    </Box>
                                    {possuiPlano && 
                                        <Box>
                                            <FormLabel sx={{fontSize: '18px', fontFamily: 'Public Sans, sans-serif', fontWeight: '700', color: "#0B3B60"}} component="legend">Selecione os planos:</FormLabel>
                                            <FormGroup sx={{rowGap: '0.25rem'}}>
                                                {planos.map(plano => 
                                                    <FormControlLabel sx={{fontFamily: 'Public Sans, sans-serif', color: '#6B6E71'}}
                                                        control={
                                                            <Checkbox 
                                                                sx={{padding: '3px', '&:checked': {color: "#0B3B60"}}}
                                                                onChange={(evento) => selecionarPlano(evento)} 
                                                                name={plano} />
                                                        }
                                                        label={plano}
                                                    />
                                                )}
                                            </FormGroup>
                                        </Box>
                                    }
                                    <Box sx={{marginTop: '1.5rem', display: 'flex', justifyContent: 'center'}}>
                                        <Botao onClick={(evento => cadastrarEspecialista(evento))} largura='40%'>Cadastrar</Botao>
                                    </Box>
                                </FormControl>
                            </Paper>
                        </Modal>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', rowGap: '1.5rem'}}>
                    <TituloSecao icone='assets/img/icone-consultas-do-dia.png' tipo='h2'>
                        Consultas do dia
                    </TituloSecao>
                    <TabelaDados consultas = {consultasDia} /> 
                    <Botao largura='10%'>Ver mais</Botao>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', rowGap: '1.5rem'}}>
                    <TituloSecao icone='assets/img/icone-consultas-mensais.png' tipo='h2'>
                        Consultas mensais por especialista
                    </TituloSecao>
                    <SubTituloEstilizado>{`${date.toDateString().split(' ')[1]}/${date.toDateString().split(' ')[3]}` }</SubTituloEstilizado>
                    <GraficoDados qtdConsultaProfissional = {qtdConsultaProfissional}/>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', rowGap: '1.5rem'}}>
                    <TituloSecao icone='assets/img/icone-avaliacoes.png' tipo='h2'>
                        Avaliação de especialistas
                    </TituloSecao>
                    <SubTituloEstilizado>{`${date.toDateString().split(' ')[1]}/${date.toDateString().split(' ')[3]}` }</SubTituloEstilizado>
                    <Box sx={{display: 'flex', flexWrap: 'wrap', columnGap: '1rem', rowGap: '1rem'}}>
                        {dadosAvaliacoes.map(avaliacao => 
                            <CardAvaliacao avaliacoes={avaliacao}/>
                        )}
                    </Box>
                    <Botao largura='10%'>Ver mais</Botao>
                </Box>
            </Container>
        </>
    )
}


export default Administrativo;