import { Doctor, EnumSpecialist } from '@models/index';

const doctorPodia: Doctor = { name: 'Jude Law',
  pic: 'doctor-macizo.png',
  specialist: EnumSpecialist.PODIATRIST };
const doctorMed: Doctor = { name: 'Ying Pereida',
  pic: 'doctora.png',
  specialist: EnumSpecialist.FAMILIY_DOCTOR };
const doctorUro: Doctor = { name: 'Hugh Grant',
  pic: 'doctor.png',
  specialist: EnumSpecialist.UROLOGIST };

const doctors: Doctor[] = [doctorPodia, doctorMed, doctorUro];

export {
  doctorMed,
  doctorPodia,
  doctors,
  doctorUro
};
