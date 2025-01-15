enum EnumPeriod {
  MONTH = 'month',
  YEAR = 'year'
}

interface Spec {
  id: string;
  included: boolean;
}

interface Price {
  id: string;
  price: string;
  period: EnumPeriod;
  icon: string;
  spec: Spec[];
}

export { EnumPeriod };
export type {
  Price,
  Spec
};

