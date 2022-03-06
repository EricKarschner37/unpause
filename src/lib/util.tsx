import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { TagProps } from "../components/lib/Tag";

// Render `separator` between each
// element of the array `components`
export const placeBetween = (
  components: React.ReactNode[],
  separator: React.ReactNode
) =>
  components.map((component, index) => (
    <>
      {index !== 0 && !!component && separator}
      {component}
    </>
  ));

export const getIconFilter = (icon: IconProp) =>
  Array.isArray(icon)
    ? icon[1]
    : typeof icon === "string"
    ? icon
    : icon.iconName;

/*
 * Allow 1:1 mappings of filter strings,
 * mainly for compatability with FontAwesome icons
 * whose names are abbreviated
 */
const filterMappings: Record<string, string> = {
  javascript: "js",
};

export const normalizeFilterString = (filter: string) => {
  const res = filter.toLowerCase();
  return filterMappings[res] || res;
};

export const tagIconIsFiltered = (tag: TagProps, filters: Set<string>) =>
  tag.icon
    ? filters?.has(normalizeFilterString(getIconFilter(tag.icon)))
    : undefined;

export const tagTextIsFiltered = (tag: TagProps, filters: Set<string>) =>
  filters?.has(normalizeFilterString(tag.text));

export const tagIsFiltered = (tag: TagProps, filters: Set<string>) =>
  tagIconIsFiltered(tag, filters) || tagTextIsFiltered(tag, filters);
