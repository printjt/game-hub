import { HStack, Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root
        onCheckedChange={toggleColorMode}
        checked={colorMode === "dark"}
        colorPalette={"green"}
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label whiteSpace="nowrap">
          {colorMode.toUpperCase()} MODE
        </Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
