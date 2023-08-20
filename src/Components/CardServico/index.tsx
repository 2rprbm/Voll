import { Paper} from "@mui/material";

interface CardServicoProps {
    Icone: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {title?: string}>,
    texto: string,
}


function CardServico ({Icone, texto}: CardServicoProps) {
    return(
        <Paper elevation={6} sx={{"@media (max-width: 1439px)": { width: 'calc(50% -  2rem)'}, "@media (max-width: 767px)": { width: '100%'}, boxSizing: 'border-box', textAlign: 'center', backgroundColor: '#E7EBEF', color: '#0B3B60', rowGap: '1rem', marginTop: "1rem", marginBottom: "1rem", padding: '2rem 5rem', borderRadius: '8px', boxShadow: '4px 4px 8px 0 rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {<Icone/>}
            {texto}
        </Paper>
    )
}

export default CardServico;