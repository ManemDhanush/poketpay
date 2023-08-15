import { Avatar } from "@mui/material";
import { FC } from "react";

type AvatarProps = {
  src?: string;
  alt?: string;
  variant?: "circular" | "rounded" | "square";
  children?: string | React.JSX.Element;
  size?: string;
};


const Avatars: FC<AvatarProps> = ({ size = "30px", ...props }): React.JSX.Element => {
  return (
    <Avatar
      variant={props.variant}
      src={props.src}
      alt={props.alt}
      sx={{
        width: `${size}`,
        height: `${size}`,
      }}
      {...props}>
    </Avatar>
  );
};

export default Avatars;
