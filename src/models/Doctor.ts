enum EnumSpecialist {
  PODIATRIST = 'podiatrist',
  FAMILIY_DOCTOR = 'familyDoctor',
  UROLOGIST = 'urologist'
}

interface Doctor {
  name: string;
  specialist: EnumSpecialist;
  pic: string;
}

export { EnumSpecialist };
export type { Doctor };

