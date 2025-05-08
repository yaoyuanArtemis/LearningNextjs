import { useState, useEffect } from "react";

export default function MyDate() {
  const [dt, setDT] = useState();
  useEffect(() => {
    setDT(new Date().toString());
  }, []);
  return <h4>{dt}</h4>;
}
