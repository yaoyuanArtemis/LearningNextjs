export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1 style={{ display: "flex", justifyContent: "center" }}>{children}</h1>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...props}
      />
    ),
    ...components,
  };
}
