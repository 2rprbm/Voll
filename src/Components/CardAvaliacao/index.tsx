import { Card, Box, CardMedia, CardContent, Avatar, Rating } from "@mui/material";
import TextoCard from 'Components/CardAvaliacao/TextoCard'
import { useState } from "react";
import { TypeDadosAvaliacoesProps} from "tema";

interface CardAvaliacaoProps {
    nome: string,
    especialidade: string,
    foto: string,
    estrela: number,
}

function CardAvaliacao({avaliacoes}: TypeDadosAvaliacoesProps) {

    const [rating, setRating] = useState<number | null>(avaliacoes.nota)

    return (
        <Card sx={{"@media (max-width: 767px)": { maxWidth: '100%', width: '100%'}, borderRadius: '0.5rem', width: 'calc(50% - 1rem)', display: 'flex' , justifyContent: 'space-between', alignItems: 'center', color: '#6B6E71'}}>
            <Box sx={{"@media (min-width: 767px)": { width: '40%'}, display: 'flex', alignItems: 'center' }}>
                <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <Avatar alt="Foto do especialista" src={avaliacoes.imagem} sx={{height: '64px', width: '64px'}} />
                </Box>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', rowGap: '0.5rem', padding: '24px 16px' }}>
                    <TextoCard forca="700" tamanho="1rem">
                        {avaliacoes.nome}
                    </TextoCard>
                    <TextoCard forca="400" tamanho="14px">
                        {avaliacoes.especialidade}
                    </TextoCard>
                </CardContent>
            </Box> 
            <Box sx={{display: 'flex', columnGap: '0.5rem', paddingRight: '1rem'}}>
                <Rating value={rating} onChange={(event, novoValor) => {setRating(novoValor);}}/>
            </Box>
        </Card>
    )
}


export default CardAvaliacao;