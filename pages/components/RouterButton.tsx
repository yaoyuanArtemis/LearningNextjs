import { useRouter } from "next/router";
import { Button } from "@heroui/react";
export default function MyDate() {
  const router = useRouter();

  return (
    <div
      className="flex gap-8 justify-around bg-slate-50 font"
    >
      <Button variant="outline" onClick={() => router.back()}>后退</Button>
      <Button variant="outline" onClick={() => router.push("/")}>首页</Button>
    </div>
  );
}
