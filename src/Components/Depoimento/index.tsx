import { Divider, List, ListItem, ListItemText, Typography } from "@mui/material";

interface DepoimentoProps {
    texto: string,
    autor: string,
}

function Depoimento({texto, autor}: DepoimentoProps) {
    return (
        <List sx={{ width: '100%', maxWidth: 792 }}>
            <ListItem alignItems="flex-start" sx={{padding: '1rem 0 0.5rem 0'}}>
                <ListItemText>
                    <Typography
                        sx={{ display: 'flex', flexDirection: 'column', fontFamily: 'Public Sans, sans-serif' }}
                        component="p"
                        variant="body1"
                        color="#90989F"
                    >
                        {texto}
                    </Typography>
                    <Typography
                        sx={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '1rem', fontWeight: '700', display: 'flex', flexDirection: 'column', fontFamily: 'Public Sans, sans-serif' }}
                        component="p"
                        variant="h5"
                        color="#6B6E71"
                    >
                        {autor}
                    </Typography>
                </ListItemText>
            </ListItem>
            <Divider variant="inset" component="li" sx={{marginLeft: '0'}}/>
        </List>
    )
}

export default Depoimento;