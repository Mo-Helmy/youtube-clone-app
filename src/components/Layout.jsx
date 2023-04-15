import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
