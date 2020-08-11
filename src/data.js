import React from 'react'
import {MdHome, MdAccountBalance, MdSchool, MdHeadsetMic, MdAttachMoney} from 'react-icons/md'
import {FaChartBar} from 'react-icons/fa'

export const data = {
    "baseRoute": "/adm", //la URL base para poder imprimir los componentes correspondientes a las rutas del router
    "section": "Administracion",
    "iconStyle": {
        color: "red"
    },
    "preSelectedCategory": "Home",
    "categories" : [
        {
            "label": "Home",
            "Icon" : <MdHome/>,
        },
        {
            "label": "Contabilidad",
            "Icon": <MdAccountBalance/>,
            "children": [
                "Justificantes",
                "Credenciales",
                "Agenda"
            ]
        },
        {
            "label": "Academico",
            "Icon": <MdSchool/>,
            "children": [
                "Materiales",
                "Posgrados",
                "Reportes"
            ]
        },
        {
            "label": "Reportes",
            "Icon": <FaChartBar/>,
            "children" : [
                "Ventas"
            ]
        },
        {
            "label": "Cobranzas",
            "Icon": <MdHeadsetMic/>,
            "children": [
                "Cascada-congelada"
            ]
        },
        {
            "label": "Ventas",
            "Icon": <MdAttachMoney/>,
            "children": [
                "Cascada-ventas"
            ]
        }
    ]
}
export default data