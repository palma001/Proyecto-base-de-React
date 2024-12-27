import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";

const ThemeSwitch = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Button
      isIconOnly
      onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="rounded-full"
    >
      {theme === "dark" ? (
        <FaSun className=" size-6" size={20} />
      ) : (
        <FaMoon className=" size-6" size={20} />
      )}
    </Button>
  );
};

export default ThemeSwitch;
