enum EnumPeriod {
  MONTH = 'month',
  YEAR = 'year'
}

interface Price {
  icon: string
  id: string
  period: EnumPeriod
  price: string
  spec: Spec[]
}

interface Spec {
  id: string
  included: boolean
}

export { EnumPeriod };
export type {
  Price,
  Spec
};
