interface ProvidersProps {
  children: React.ReactNode;
}

import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export default Providers
