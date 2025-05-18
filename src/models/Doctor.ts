enum EnumSpecialist {
  FAMILIY_DOCTOR = 'familyDoctor',
  PODIATRIST = 'podiatrist',
  UROLOGIST = 'urologist'
}

interface Doctor {
  name: string
  pic: string
  specialist: EnumSpecialist
}

export { EnumSpecialist };
export type { Doctor };
