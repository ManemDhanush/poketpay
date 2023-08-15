import { Dropdown } from "../../atoms/dropdown";

export interface DropdownIconProps {
  options: string[];
  iconsTypo: { flag: string; code: string }[];
}

export const DropdownIcon = ({
  options,
  iconsTypo,
  ...props
}: DropdownIconProps) => {
  return (
    <Dropdown
      menu={options}
      labelText="Country of residence"
      formControlsx={{ minWidth: "500px" }}
      displayIcon
      icons={iconsTypo}
    />
  );
};
