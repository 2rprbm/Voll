
import { createHashRouter } from "react-router-dom";
import PaginaBase from 'Paginas/PaginaBase';
import Administrativo from "Paginas/Administrativo";
import PaginaInstitucional from "Paginas/PaginaInstitucional";
import PaginaInterna from "Paginas/PaginaInterna";
import PaginaComum from "Paginas/PaginaComum";
import CadastroClinica from "Paginas/CadastroClinica";
import TelaSucesso from "Paginas/CadastroClinica/TelaSucesso";
import TelaSucessoEspecialista from "Paginas/Administrativo/TelaSucessoEspecialista";


const router = createHashRouter([
  
  {
    path: '/',
    element: <PaginaComum />,
    children : [
      {
        path: "/",
        element: <PaginaBase />,
        children: [
          {
            path: "/",
            element: <PaginaInstitucional />,
          },
          {
            path: "area-interna",
            element: <PaginaInterna />,
          },
        ],
      },
      {
        path: "administrativo",
        element: <Administrativo />,
      },  
    ]
  },
  {
    path: "cadastro-clinica",
    element: <CadastroClinica />,
  },
  {
    path: "cadastro-clinica/sucesso",
    element: <TelaSucesso />,
  },
  {
    path: "administrativo/cadastro-especialista/sucesso",
    element: <TelaSucessoEspecialista />,
  },
]);

export default router;