"use client";
import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import { Icon } from "@iconify/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function TopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
    });
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#A07CFE",
        contrastText: "#FFFFFF",
      },
    },
  });

  return (
    <div className="fixed bottom-6 right-4">
      <ThemeProvider theme={theme}>
        {visible ? (
          <Fab color="primary" size="small" onClick={handleClick}>
            <Icon icon="pixel:arrow-up" width="22" height="22" />
          </Fab>
        ) : null}
      </ThemeProvider>
    </div>
  );
}
