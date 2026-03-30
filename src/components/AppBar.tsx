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

const pages = ["About", "Projects"];

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
          <ComputerIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: "1.5vw" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            className="nav-logo"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Daniel
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
              PaperProps={{
                sx: {
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "12px",
                  marginTop: "8px",
                },
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavBarOnClick(page)}>
                  <Typography textAlign="center" className="nav-menu-item">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            className="nav-logo nav-title-center"
            sx={{
              display: { xs: "flex", md: "none" },
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Daniel
          </Typography>
          <Box sx={{ display: { xs: "flex", md: "none" }, width: 48 }} />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              mr: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavBarOnClick(page)}
                className="nav-link"
                sx={{
                  my: 2,
                  color: "inherit",
                  display: "block",
                  position: "relative",
                }}
              >
                {page}
              </Button>
            ))}
            <IconButton
              onClick={toggleTheme}
              className="theme-toggle"
              sx={{ my: 2, ml: 1, color: "inherit" }}
            >
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <style>{`
        .appbar {
          transition: all 0.3s ease;
          background: transparent !important;
        }
        .appbar.scrolled {
          background: var(--bg-paper) !important;
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--divider);
        }
        .nav-logo {
          font-family: 'Fira Code', monospace !important;
          color: var(--text-primary) !important;
        }
        .nav-title-center {
          position: absolute !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
        }
        .nav-link {
          font-family: 'Fira Code', monospace !important;
          font-size: 0.95rem !important;
          color: var(--text-secondary) !important;
          transition: color 0.2s ease !important;
        }
        .nav-link:hover {
          color: var(--accent) !important;
          background: transparent !important;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: all 0.2s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover::after {
          width: calc(100% - 32px);
        }
        .nav-menu-item {
          font-family: 'Fira Code', monospace !important;
          color: var(--text-primary) !important;
        }
        .theme-toggle {
          color: var(--text-secondary) !important;
        }
        .theme-toggle:hover {
          background: transparent !important;
          color: var(--accent) !important;
        }
      `}</style>
    </AppBar>
  );
}

export default ResponsiveAppBar;
