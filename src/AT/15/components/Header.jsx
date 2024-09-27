import { MdForum } from "react-icons/md";
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="forum">
          <MdForum style={{ fontSize: "30px" }} />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Social Media
        </Typography>
        <Button color="inherit" onClick={handleMenuClick}>
          Menu
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ mt: "45px" }}
        >
          <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
          <MenuItem onClick={handleMenuClose}>Fotos</MenuItem>
          <MenuItem onClick={handleMenuClose}>Amigos</MenuItem>
          <MenuItem onClick={handleMenuClose}>Sugestões</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};
