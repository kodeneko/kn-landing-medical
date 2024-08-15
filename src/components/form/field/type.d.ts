type FieldProps = {
  id: string;
  label: string;
  value: string;
  hint?: string;
  placeH?: string;
  onChange: (e) => void;
  onBlur: (e) => void;
};

export default FieldProps;
