import * as React from "react";
import Router from "../../routes/Router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import developer from "../../assets/images/developer-icon.png";
import { NavLink } from "react-router-dom";

import {
  LECTURE_PAGE,
  PRESENTATION_PAGE,
  PRACTICE_PAGE,
  TEST_PAGE,
  AUTHOR_PAGE,
  ABOUT_PAGE,
  HOME_PAGE,
  CONTROL_QUESTIONS_PAGE,
  TUTORIAL_PAGE,
  LIST_OF_LIB_PAGE,
} from "../../routes/const";

const pages = [
  { id: 1, name: "Лекции", path: LECTURE_PAGE },
  { id: 2, name: "Презентации", path: PRESENTATION_PAGE },
  { id: 3, name: "Практические задания", path: PRACTICE_PAGE },
  { id: 4, name: "Тесты для проверки знания", path: TEST_PAGE },
  {
    id: 5,
    name: "контрольные вопросы и глоссарий",
    path: CONTROL_QUESTIONS_PAGE,
  },
  {
    id: 6,
    name: "Самостоятельное образование БНП",
    path: TUTORIAL_PAGE,
  },
  {
    id: 7,
    name: "Список литературы",
    path: LIST_OF_LIB_PAGE,
  },
];
const settings = [
  { id: 1, name: "Об авторе", path: AUTHOR_PAGE },
  { id: 2, name: "О программе", path: ABOUT_PAGE },
];
const nameOfScinece = " ";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "#164B60" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink to={HOME_PAGE} className="flex items-center gap-1">
              <CurrencyExchangeIcon
                sx={{ display: { xs: "none", lg: "flex" }, mr: 1 }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", lg: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {nameOfScinece}
              </Typography>
            </NavLink>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
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
                sx={{
                  display: { xs: "block", lg: "none" },
                }}
              >
                {pages.map((page) => (
                  <NavLink to={page.path} key={page.id}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography
                        sx={{
                          color: "#00337C",
                          fontWeight: "semibold",
                          fontSize: 12,
                        }}
                      >
                        {page.name}
                      </Typography>
                    </MenuItem>
                  </NavLink>
                ))}
              </Menu>
            </Box>

            <CurrencyExchangeIcon
              sx={{ display: { xs: "flex", lg: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", lg: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {nameOfScinece}
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", lg: "flex" },
              }}
            >
              {pages.map((page) => (
                <NavLink
                  to={page.path}
                  key={page.id}
                  className="flex items-center justify-center p-1 m-1 text-[12px]"
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                    }}
                  >
                    {page.name}
                  </Button>
                </NavLink>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar className="bg-white " src={developer} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <NavLink key={setting.id} to={setting.path}>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        sx={{
                          color: "#00337C",
                          fontWeight: "semibold",
                          fontSize: 12,
                        }}
                        textAlign="center"
                      >
                        {setting.name}
                      </Typography>
                    </MenuItem>
                  </NavLink>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="py-20">
        <Router />
      </div>
    </div>
  );
}
export default ResponsiveAppBar;
