import { makeStyles  } from '@mui/styles';
import Fade from '@mui/material/Fade';


const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    lineHeight: '9px',
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight:'20px',
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff'
    },
    marginRight: '20px',
    marginLeft: 0,
    width: '100%',
  },
  searchIcon: {
    padding: '20px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: '20px',
    // vertical padding + font size from searchIcon
    paddingLeft: '20px',
    transition: '1s',
    width: '100%',
  },
}));