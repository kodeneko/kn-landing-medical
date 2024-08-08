import { BtnType, FormType, Menu, SizeType } from '@models/app';
import React from 'react';

type CardInfoProps = {
  title: string;
  icon: string;
  gradient?: boolean;
  actions?: React.JSX.Element;
};

export default CardInfoProps;
