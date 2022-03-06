import React from "react";

export interface PageResumeScope {
  filters: Set<string>;
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
}
export const PageResumeContext = React.createContext<PageResumeScope>({
  filters: new Set(),
  addFilter: () => {},
  removeFilter: () => {}
})
