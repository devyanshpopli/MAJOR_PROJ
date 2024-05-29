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
import WorkIcon from '@mui/icons-material/Work';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction } from '../redux/actions/userAction';
import { DarkMode, LightMode } from "@mui/icons-material";
import { toggleActionTheme } from '../redux/actions/themeAction';

const pages = ['Home', 'Log In'];

const customStyles = {
    button: {
        color: '#ffffff',
        backgroundColor: '#3f51b5',
        borderRadius: '20px',
        padding: '8px 20px',
        fontSize: '1.1rem',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#303f9f',
        },
        marginLeft: '8px', // Adjusted for close spacing
    },
    link: {
        color: '#ffffff',
        textDecoration: 'none',
        '&:hover': {
            color: '#c5cae9',
        },
    },
    appBar: {
        backgroundColor: '#3f51b5',
        borderRadius: '0 0 20px 20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    iconButton: {
        color: '#ffffff',
    },
    avatar: {
        backgroundColor: '#3f51b5',
        color: '#ffffff',
    },
    menuItem: {
        '&:hover': {
            backgroundColor: '#e3f2fd',
        },
    },
    typography: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        color: '#ffffff',
    },
};

const Navbar = () => {
    const { userInfo } = useSelector(state => state.signIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { palette } = useTheme();
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

    const logOutUser = () => {
        dispatch(userLogoutAction());
        window.location.reload(true);
        setTimeout(() => {
            navigate('/');
        }, 500)
    }

    return (
        <AppBar position="static" sx={customStyles.appBar}>
            <Container>
                <Toolbar disableGutters>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <WorkIcon sx={{ display: { xs: 'none', md: 'flex' }, ...customStyles.iconButton }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                                color: 'inherit',
                                ml: 1, // Ensure no margin is set
                            }}
                        >
                            KIT PLACE
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={customStyles.iconButton}
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
                                <MenuItem key={page} onClick={handleCloseNavMenu} sx={customStyles.menuItem}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <WorkIcon sx={{ display: { xs: 'flex', md: 'none' }, ...customStyles.iconButton }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                textDecoration: 'none',
                                color: 'inherit',
                                ml: 0, // Ensure no margin is set
                            }}
                        >
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', mr: 2 }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, display: 'block', ...customStyles.button }}>
                            <Link to="/" style={customStyles.link}>
                                Home
                            </Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, display: 'block', ...customStyles.button }}>
                            <Link to="/register" style={customStyles.link}>
                                Register
                            </Link>
                        </Button>
                    </Box>
                    <IconButton sx={{ ...customStyles.iconButton }} onClick={() => dispatch(toggleActionTheme())}>
                        {palette.mode === "dark" ? (
                            <DarkMode sx={{ color: "#ffffff", fontSize: "25px" }} />
                        ) : (
                            <LightMode sx={{ color: "#ffffff", fontSize: "25px" }} />
                        )}
                    </IconButton>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ...customStyles.avatar }}>
                                <Avatar alt="Remy Sharp" src="" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            PaperProps={{
                                sx: {
                                    "& .MuiMenu-list": {
                                        bgcolor: "primary.white",
                                        color: "white"
                                    },
                                }
                            }}
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
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center"><Link style={{ textDecoration: "none", color: palette.secondary.main }} to="/admin/dashboard">Admin Dashboard</Link></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center"><Link style={{ textDecoration: "none", color: palette.secondary.main }} to="/user/dashboard">User Dashboard</Link></Typography>
                            </MenuItem>
                            {
                                !userInfo ?
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center"><Link style={{ textDecoration: "none", color: palette.secondary.main }} to="/login">Log In</Link></Typography>
                                    </MenuItem> :
                                    <MenuItem onClick={logOutUser}>
                                        <Typography style={{ textDecoration: "none", color: palette.secondary.main }} textAlign="center">Log Out</Typography>
                                    </MenuItem>
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
