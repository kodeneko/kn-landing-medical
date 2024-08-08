import { EnumPeriod, Price, Spec } from '@models/Price';

const specsCopay: Spec[] = [
  {
    id: 'sp01',
    included: true
  },
  {
    id: 'sp02',
    included: true
  },
  {
    id: 'sp03',
    included: true
  },
  {
    id: 'sp04',
    included: false
  },
  {
    id: 'sp05',
    included: false
  }
];

const specsFull: Spec[] = [
  {
    id: 'sp01',
    included: true
  },
  {
    id: 'sp02',
    included: true
  },
  {
    id: 'sp03',
    included: true
  },
  {
    id: 'sp04',
    included: true
  },
  {
    id: 'sp05',
    included: true
  }
];

const specsSupdent: Spec[] = [
  {
    id: 'dent01',
    included: true
  }, {
    id: 'dent02',
    included: true
  }
];

const priceCopay: Price = {
  id: 'copay',
  period: EnumPeriod.MONTH,
  price: '50',
  spec: specsCopay
};

const priceFull: Price = {
  id: 'copay',
  period: EnumPeriod.MONTH,
  price: '70',
  spec: specsFull
};

const priceSupdent: Price = {
  id: 'copay',
  period: EnumPeriod.MONTH,
  price: '+20',
  spec: specsSupdent
};

export {
  priceCopay,
  priceFull,
  priceSupdent,
  specsCopay,
  specsFull,
  specsSupdent
};
