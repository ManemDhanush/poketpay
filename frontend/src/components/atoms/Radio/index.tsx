import Radio, { RadioProps } from "@mui/material/Radio";

interface RadioProp extends RadioProps {
  size?: "medium" | "small";
}

export const MuiRadio = ({ ...props }: RadioProp) => {
  return (
    <div>
      <Radio {...props} />
    </div>
  );
};
