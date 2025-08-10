// material-ui
import { useTheme } from '@mui/material/styles';
 import logo from 'assets/images/Black logo.svg';

// ==============================|| LOGO SVG ||============================== //

export default function Logo() {
  const theme = useTheme();

  return (

   <img src={logo} alt="Berry" width="100" />
  );
}
