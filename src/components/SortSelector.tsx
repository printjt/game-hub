import useGameQueryStore from "@/store";
import { Button } from "@chakra-ui/react/button";
import { Menu } from "@chakra-ui/react/menu";
import { Portal } from "@chakra-ui/react/portal";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const { gameQuery, setSortOrder } = useGameQueryStore();

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-releaased", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder =
    sortOrders.find((order) => order.value === gameQuery.sortOrder)?.label ??
    "Relevance";
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order By: {currentSortOrder} <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                value={order.value}
                onClick={() => setSortOrder(order.value)}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
