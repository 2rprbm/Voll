import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from "@mui/material";
import { styled } from 'styled-components'
import { ArrayConsultasDiaProps} from "tema";


function TabelaDados({consultas}: ArrayConsultasDiaProps) {


     const TableCellHeaderEstilizada = styled(TableCell)`
         font-family: ${props => props.theme.fonte.geral} !important;
         font-weight: ${props => props.theme.forca.titulo} !important;
         font-size: ${props => props.theme.tamanho.titulo} !important;
         color: ${props => props.theme.cores.tituloTabela} !important;
         max-width: 16%;
         width: 16%;
     `

     const TableCellBodyEstilizada = styled(TableCell)`
         font-family: ${props => props.theme.fonte.geral} !important;
         font-weight: ${props => props.theme.forca.dadosTabela} !important;
         font-size: ${props => props.theme.tamanho.geral} !important;
         color: ${props => props.theme.cores.dadosTabela} !important;
         max-width: 16%;
         width: 16%;
     `

     const TableRowBodyEstilizada = styled(TableRow)`
         &:nth-child(2n-1) {
             background-color: #E7EBEF !important;
         }
     `

     return (
        <TableContainer component={Paper} sx={{bgcolor: '#FFFFFF', padding: '0 1rem', width: '100%', boxSizing: 'border-box'}}>
            <Table sx={{width: '100%', bgcolor: '#FFFFFF', padding: '0 1rem' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCellHeaderEstilizada align="left">Data</TableCellHeaderEstilizada>
                        <TableCellHeaderEstilizada align="left">Horário</TableCellHeaderEstilizada>
                        <TableCellHeaderEstilizada align="left">Profissional</TableCellHeaderEstilizada>
                        <TableCellHeaderEstilizada align="left">Especialidade</TableCellHeaderEstilizada>
                        <TableCellHeaderEstilizada align="left">Paciente</TableCellHeaderEstilizada>
                        <TableCellHeaderEstilizada align="left">Modalidade</TableCellHeaderEstilizada>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {consultas.map((dado) => 
                        <TableRowBodyEstilizada key={dado.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCellBodyEstilizada align="left">{dado.data}</TableCellBodyEstilizada>
                            <TableCellBodyEstilizada align="left">{dado.horario}</TableCellBodyEstilizada>
                            <TableCellBodyEstilizada align="left">{dado.profissional.nome}</TableCellBodyEstilizada>
                            <TableCellBodyEstilizada align="left">{dado.profissional.especialidade}</TableCellBodyEstilizada>
                            <TableCellBodyEstilizada align="left">{dado.paciente}</TableCellBodyEstilizada>
                            <TableCellBodyEstilizada align="left">{dado.modalidade}</TableCellBodyEstilizada>
                        </TableRowBodyEstilizada>
                    )}
                </TableBody> 
            </Table>
            </TableContainer>
     )

 }

 export default TabelaDados