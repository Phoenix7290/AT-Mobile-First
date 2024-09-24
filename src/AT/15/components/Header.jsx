import { MdForum } from "react-icons/md";
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="forum">
          <MdForum style={{ fontSize: "30px" }} />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Social Media
        </Typography>
        <Button color="inherit" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Menu
        </Button>
      </Toolbar>
      <Box
        component="ul"
        sx={{
          display: isMenuOpen ? "block" : "none",
          backgroundColor: "white",
          position: "absolute",
          top: "64px",
          left: 0,
          right: 0,
          listStyle: "none",
          p: 2,
          boxShadow: 3,
        }}
      >
        <li>Perfil</li>
        <li>Fotos</li>
        <li>Amigos</li>
        <li>Sugestões</li>
      </Box>
    </AppBar>
  );
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};
