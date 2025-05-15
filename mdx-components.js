import Image from "next/image";
export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1 style={{ display: "flex", justifyContent: "center" }}>{children}</h1>
    ),
    pre: (props) => (
      <pre
        style={{ maxWidth: "50%", marginLeft: "auto", marginRight: "auto" }}
        {...props}
      />
    ),
    ...components,
  };
}
