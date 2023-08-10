import React from 'react';
import { Text, Link, useTheme } from '@geist-ui/react';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <footer>
        <Text>
          Сделано в {' '}
          <Link href="https:/prtl.cc" target="_blank" rel="noopener" underline>
            Portal
          </Link>{' '}
          🖤
        </Text>
      </footer>
      <style jsx>{`
        footer {
          border-top: 1px solid ${theme.palette.border};
          padding: ${theme.layout.gapQuarter} ${theme.layout.gap};
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Footer;
