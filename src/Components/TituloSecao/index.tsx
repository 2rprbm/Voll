import {styled, useTheme} from "styled-components";

 interface TituloSecaoProps {
     icone?: string,
     tipo?: string,
     children: string
 }


function TituloSecao({icone, tipo = "h3", children}: TituloSecaoProps) {

     const TituloEstilizado = styled(tipo)`
        font-size: ${props => props.theme.tamanho.titulo};
        color: ${props => props.theme.cores.titulo};
        font-weight: ${props => props.theme.forca.titulo};
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
        margin-bottom: 0;
        &:before{
            content: url(${icone});
            display: flex;
        }
        @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
            padding-left: 1rem;
        }
     `

    return (
        <>
            <TituloEstilizado>
                {children}
            </TituloEstilizado>
        </>
    )
}

export default TituloSecao;