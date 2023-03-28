import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import axios from 'axios';

const pages = [
  {title: 'Movies App', link: "/movies"},
  {title: 'Contact', link: "/contact"}
];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
    const { i18n } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [weather, setWeather] = React.useState({
    icon: '',
    description: ''
  });

  const options = {
    method: 'GET',
    url: 'https://open-weather13.p.rapidapi.com/city/Copenhagen',
    headers: {
      'X-RapidAPI-Key': '28cec93ed3mshfef752511b520bbp196561jsnd6c18a5654b2',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };

  React.useEffect(() => {
    axios.request(options).then(function (response) {
      const iconCode = response.data.weather[0].icon;
      const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
      setWeather({
        icon: iconUrl,
        description: response.data.weather[0].description
      });
    }).catch(function (error) {
      console.error(error);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AHMED SHARKAWI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link to={page.link} key={page.title}>
                      <Typography textAlign="center" variant="h6" component="h6">{page.title}</Typography>
                  </Link>
                </Button>

              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={page.link} key={page.title}>
                    <Typography color="white" textAlign="center" variant="h6" component="h6">{page.title}</Typography>
                </Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={weather.description}>
              <IconButton sx={{ p: 0, marginRight: "10px" }}>
                <Avatar src={weather.icon} alt='Weather' />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>
                    {i18n.language}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={() => i18n.changeLanguage('en')}>
                    <Typography textAlign="center">English</Typography>
                </MenuItem>
                <MenuItem onClick={() => i18n.changeLanguage('ar')}>
                    <Typography textAlign="center">Arabic</Typography>
                </MenuItem>
                <MenuItem onClick={() => i18n.changeLanguage('fr')}>
                    <Typography textAlign="center">French</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;