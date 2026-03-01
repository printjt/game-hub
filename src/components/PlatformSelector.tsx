import type { Platform } from "@/hooks/useGame";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  platform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, platform }: Props) => {
  const { data: platforms, error, isLoading } = usePlatforms();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {platform?.name || "Platforms"} <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.slug}
                onClick={() => onSelectPlatform(platform)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
