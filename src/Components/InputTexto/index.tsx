import { Paper, Input} from "@mui/material";
import { styled } from "styled-components";
import { InputTextoProps } from "tema";


const DivEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`

const LabelEstilizado = styled.label`
    font-family: ${props => props.theme.fonte.geral};
    font-weight: ${props => props.theme.forca.textoLabel};
    font-size: ${props => props.theme.tamanho.geral};
    color: ${props => props.theme.cores.textoLabel};
`


function InputTexto({rotulo, descricao, valor, setValor}: InputTextoProps) {
    return (
        <DivEstilizada>
            <LabelEstilizado htmlFor={rotulo}>{rotulo}</LabelEstilizado>
            <Paper elevation={3} sx={{borderRadius: '10px', backgroundColor: '#F8F8F8'}}>
                <Input id={rotulo} type="text" onChange={(evento) => setValor(evento.target.value)} value={valor} sx={{fontFamily: 'Public Sans, sans-serif', fontSize: '1rem', fontWeight: '400', color: '#6B6E71', width: '100%', borderBottom: 'none', padding: '0.5rem', '&:hover:before': {borderBottom: 'none !important'}, '&:hover': {borderBottom: 'none'}, '&:after': {borderBottom: 'none'}, '&:before': {borderBottom: 'none'} }} placeholder={descricao}></Input>
            </Paper>
        </DivEstilizada>
    )
}

export default InputTexto;