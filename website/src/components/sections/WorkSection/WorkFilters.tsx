import { Button, TextInput, Text } from "@mantine/core";
import { IconSearch, IconFilter } from "@tabler/icons-react";
import { categories } from "./data";
import classes from "@/styles/WorkFilters.module.css";

interface WorkFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function WorkFilters({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: WorkFiltersProps) {
  return (
    <div className={classes.filtersContainer}>
      <div className={classes.mainFilters}>
        <div className={classes.categoryGroup}>
          <div className={classes.categoryLabel}>
            <IconFilter size={18} stroke={1.5} />
            <span>Category</span>
          </div>
          
          <div className={classes.categoryButtons}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "filled" : "subtle"}
                color={activeCategory === category ? "dark" : "gray"}
                onClick={() => onCategoryChange(category)}
                className={classes.filterButton}
                size="sm"
                px="lg"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <TextInput
          placeholder="Search titles, tags, tools"
          leftSection={<IconSearch size={20} stroke={1.5} />}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.currentTarget.value)}
          variant="unstyled"
          className={classes.searchInput}
        />
      </div>

    </div>
  );
}
