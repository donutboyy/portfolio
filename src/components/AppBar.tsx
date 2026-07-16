import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ComputerIcon from "@mui/icons-material/Computer";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeMode } from "../hooks/useThemeMode";
import "./AppBar.css";

const pages = ["Experience", "Education", "Projects", "Contact"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const { mode, toggleTheme } = useThemeMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleNavBarOnClick = (section: string) => {
    window.location.href = location.origin + `/#${section.toLowerCase()}`;
    handleCloseNavMenu();
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      className={scrolled ? "appbar scrolled" : "appbar"}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="Open navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            className="appbar__menu-btn"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => handleNavBarOnClick(page)}>
                <Typography textAlign="center" className="nav-menu-item">
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>

          <Box
            component="a"
            href="#"
            className="appbar__brand appbar__brand--mobile"
            aria-label="Daniel — home"
          >
            <ComputerIcon className="appbar__brand-icon" aria-hidden="true" />
            <Typography
              variant="h5"
              noWrap
              component="span"
              className="appbar__logo"
            >
              Daniel
            </Typography>
          </Box>

          <Box className="appbar__spacer" aria-hidden="true" />

          <Box className="appbar__brand appbar__brand--desktop">
            <ComputerIcon className="appbar__brand-icon" aria-hidden="true" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              className="appbar__logo"
            >
              Daniel
            </Typography>
          </Box>

          <Box className="appbar__nav">
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavBarOnClick(page)}
                className="nav-link"
                color="inherit"
              >
                {page}
              </Button>
            ))}
            {import.meta.env.DEV && (
              <IconButton
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label="Toggle theme (development only)"
                color="inherit"
              >
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
