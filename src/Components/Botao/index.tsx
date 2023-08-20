import { ReactElement } from "react";
import { styled } from "styled-components";

interface BotaoProps {
    largura?: string,
    onClick?: (evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    children: string | ReactElement;
}


function Botao ({largura, onClick, children}: BotaoProps ) {

    const BotaoEstilizado = styled.button`
        padding: 0.75rem 1rem;
        background-color: ${props => props.theme.cores.botao};
        border-radius: 0.5rem;
        color: ${props => props.theme.cores.botaoTexto};
        font-weight: ${props => props.theme.forca.botao};
        font-family: ${props => props.theme.fonte.geral};
        cursor: pointer;
        width: ${largura};
        @media screen and (max-width: ${props => props.theme.breakpoints.me}){
            width: 180px;
        }
    `

    return (

        <>
            <BotaoEstilizado onClick={onClick}>
                {children}
            </BotaoEstilizado>
        </>
    )
}


export default Botao;