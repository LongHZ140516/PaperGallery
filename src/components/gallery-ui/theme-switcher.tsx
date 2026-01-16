import React, { useEffect, useState } from "react"
import { useTheme, ThemeProvider } from 'next-themes'
import { ThemeToggleButton, useThemeTransition } from "@/components/ui/shadcn-io/theme-toggle-button"

const ThemeToggleContent = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { startTransition } = useThemeTransition();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    startTransition(() => {
      setTheme(newTheme);
    });
  };

  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (!mounted) return null;

  return (
    <ThemeToggleButton
      theme={currentTheme as 'light' | 'dark'}
      onClick={handleThemeToggle}
      variant="circle"
      start="bottom-right"
    />
  );
}

export const ThemeSwitcher = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeToggleContent />
    </ThemeProvider>
  )
}