import { styled } from "styled-components";


interface TextoCardProps {
    forca: string,
    tamanho: string,
    children: string,
}

function TextoCard ({forca, tamanho, children}: TextoCardProps) {

    const TextoEstilizado = styled.p<{forca: string, tamanho: string}>`
        font-weight: ${props => props.forca};
        font-size: ${props => props.tamanho};
        margin: 0;
    `

    return(
        <TextoEstilizado forca={forca} tamanho={tamanho}>{children}</TextoEstilizado>
    )
}

export default TextoCard;