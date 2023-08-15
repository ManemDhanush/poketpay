import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
export interface ICheckboxAtomProps extends CheckboxProps {
  label?: string;
  handleClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function CheckboxAtom({
  handleClick,
  label,
  ...rest
}: ICheckboxAtomProps) {
  return (
    <Checkbox
      {...rest}
      inputProps={{
        "aria-label": label
      }}
      onChange={(e) => {
        handleClick!(e);
      }}
      name="checkbox-atom"
    />
  );
}
