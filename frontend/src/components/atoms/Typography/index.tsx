import { Typography, TypographyProps } from "@mui/material"
import { CommonProps } from "@mui/material/OverridableComponent"

const TypographyComponent: React.FC<TypographyProps & CommonProps> = ({
  variant,
  children,
  ...props
}) => {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  )
}
export default TypographyComponent
