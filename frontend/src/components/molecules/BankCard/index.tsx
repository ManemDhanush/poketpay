import { Radio ,FormControlLabel,Grid} from "@mui/material";
import { Image } from "../../atoms/image";
import Typography from "../../atoms/Typography";
import { theme } from "../../../theme/theme";

export interface BankCardProps{
    image : string,
    transferType :string,
    transferDescription :string,
    transferArrival :string,
    checked: boolean; 
    onChange?: () => void
    iconHeight?:string
}

export const BankCard: React.FC<BankCardProps> = (props) => {

   return (
       <Grid sx={{
        "@media (min-width: 1200px)": {
            width: "520px" 
          },
          "@media (max-width: 700px)": {
            width: "100%"
          },
        height:'103px',
        top:'105px',}}>
        <FormControlLabel  value={props.transferType} 
         label={
            <Grid container display="flex"  alignItems={"center"}
             sx={{
                "@media (min-width: 1200px)": {
                    width: "450px" 
                  },
                  "@media (max-width: 700px)": {
                    width: "100%"
                  },
                height:'71px',
                top:'16px',
                left:'16px',
             }}
             >
   
            <Grid item sx={{paddingRight:'20px'}}>
               <Image src={props.image} alt="image not found" style={{width:`${props.iconHeight}`,height:`${props.iconHeight}`}} />
            </Grid>       

            <Grid item>
                <Grid container direction={"column"}  alignItems={"flex-start"}>
                    <Grid item >
                        <Typography variant="body3" color={theme.palette.textColor.highEmphasis}>{props.transferType}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="caption1" color={theme.palette.textColor.mediumEmphasis}>{props.transferDescription}</Typography>
                    </Grid>
                    <Grid item sx={{ marginTop: '-8px' }}>
                        <Typography variant="caption1" color={theme.palette.textColor.mediumEmphasis} >{props.transferArrival}</Typography>
                    </Grid>
                  
                </Grid>

            </Grid>
               
            </Grid>
         }
        
        control={<Radio/>}
        labelPlacement="start"
        checked={props.checked}
        onChange={props.onChange} 
        />
    </Grid>
   );
}
