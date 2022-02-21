// Render `separator` between each
// element of the array `components`
export const placeBetween = (
  components: React.ReactNode[],
  separator: React.ReactNode
) => components.map((component, index) => (
  <>
    {(index !== 0) && separator}
    {component}
  </>
  ));
