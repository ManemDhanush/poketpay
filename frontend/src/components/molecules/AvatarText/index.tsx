import { Box, styled } from "@mui/material";
import Avatars from "../../atoms/Avatar";
import TypographyComponent from "../../atoms/Typography";

interface AvatarWithTypographyProps  {
    avatar: string;
    avatarSize:string;
    avatarVariant?:"circular" | "rounded" | "square";
    avatarAndTextGap?: string;
    text: string;
    textVariant: any;
    textColor?: string;
    textWeight?: string;
    avatarAlt?:string;
    id?:string;
  }
  interface FlexRowBoxProps{
    avatarAndTextGap?:string
  }
  const FlexRowBox = styled(Box)((props:FlexRowBoxProps) => ({
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    gap: props.avatarAndTextGap ? props.avatarAndTextGap : "10px"
  }));

export const AvatarTypography = (props:AvatarWithTypographyProps) =>{
  
    const {
        avatar,
        avatarSize,
        avatarVariant,
        avatarAndTextGap,
        text,
        textVariant,
        textColor,
        textWeight,
        avatarAlt,
        id,
      } = props;

      return(
        <div>
            <FlexRowBox avatarAndTextGap={avatarAndTextGap} data-testid="avatarTypography" id={id}>
                    <Avatars src={avatar} alt={avatarAlt} size={avatarSize} variant={avatarVariant} />
                    <TypographyComponent variant={textVariant} sx={{color:{textColor},fontWeight:{textWeight}}}>{text}</TypographyComponent>
            </FlexRowBox>
        </div>
      )

}