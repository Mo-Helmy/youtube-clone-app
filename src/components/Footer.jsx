import { Stack } from '@mui/material';

const Footer = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      gap={0.5}
      color="whitesmoke"
      p={6}
      elevation={8}
    >
      Copyright © {new Date().getFullYear()} All rights reserved | This project
      is made with{' '}
      <span style={{ color: 'tomato', fontWeight: 'bold', fontSize: '24px' }}>
        ♡
      </span>{' '}
      by{' '}
      <a
        href="https://mohelmy-portfolio.vercel.app/"
        style={{ color: 'tomato', fontWeight: 'bold' }}
      >
        Mo.Helmy
      </a>
    </Stack>
  );
};

export default Footer;
