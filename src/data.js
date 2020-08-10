import React from 'react'
import {MdHome, MdAccountBalance, MdSchool, MdHeadsetMic, MdAttachMoney} from 'react-icons/md'
import {FaChartBar} from 'react-icons/fa'

export const data = {
    "baseRoute": "adm", //la URL base para poder imprimir los componentes correspondientes a las rutas del router
    "section": "Administracion",
    "iconStyle": {
        color:"red"
    },
    "preSelectedCategory": "Home",
    "categories" : [
        {
            "label": "Home",
            "icon" : <MdHome/>,
        },
        {
            "label": "Contabilidad",
            "icon": <MdAccountBalance/>,
            "children": [
                "Justificantes",
                "Credenciales",
                "Agenda"
            ]
        },
        {
            "label": "Academico",
            "icon": <MdSchool/>,
            "children": [
                "Materiales",
                "ABM Posgrados",
                {
                    "Reportes" : ["Alumnos por etapa"]
                },
            ]
        },
        {
            "label": "Reportes",
            "icon": <FaChartBar/>,
            "children" : [
                "Ventas"
            ]
        },
        {
            "label": "Cobranzas",
            "icon": <MdHeadsetMic/>,
            "children": [
                "Cascada congelada"
            ]
        },
        {
            "label": "Ventas",
            "icon": <MdAttachMoney/>,
            "children": [
                "Cascada ventas"
            ]
        }
    ]
}
export default data