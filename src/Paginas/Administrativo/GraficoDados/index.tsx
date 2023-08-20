import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';
import { ArrayQntdConsultaProps} from 'tema';


function GraficoDados ({qtdConsultaProfissional}: ArrayQntdConsultaProps) {
    return (
        <ResponsiveContainer width='100%' height={350}>
            <BarChart data={qtdConsultaProfissional}>
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey='profissional.nome'/>
                <YAxis dataKey="quantidade"/> 
                <Tooltip />
                <Bar layout='vertical' dataKey="quantidade" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
}



export default GraficoDados;