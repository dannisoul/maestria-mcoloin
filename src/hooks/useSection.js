import { useState } from 'react'
import { FechaAdmision } from '../pages/fecha_admision'
import { Inicio } from '../pages/inicio'
import { NucleoAcademico } from '../pages/nucleo_academico'
import { PerfilEgreso } from '../pages/perfil_egreso'
import { PerfilIngreso } from '../pages/perfil_ingreso'
import { PlanEstudios } from '../pages/plan_estudios'
import { RequisitosIngreso } from '../pages/requisitos_ingreso'
import { MapaCurricular } from '../pages/mapa_curricular'
import { DatosPersonales } from '../pages/datos_personales'

const pages = {
  inicio: Inicio,
  fecha_admision: FechaAdmision,
  nucleo_academico: NucleoAcademico,
  perfil_egreso: PerfilEgreso,
  perfil_ingreso: PerfilIngreso,
  plan_estudios: PlanEstudios,
  requisitos_ingreso: RequisitosIngreso,
  mapa_curricular: MapaCurricular,
  datos_personales: DatosPersonales
}

export function useSection () {
  const [section, setSection] = useState('inicio')

  function changeSection (newSection) {
    setSection(newSection)
    const header = document.getElementById('mainHeader')
    const { height } = header.getBoundingClientRect()
    window.scrollTo({ behavior: 'smooth', top: height })
  }

  return { pages, CurrentSection: pages[section], changeSection, section }
}
