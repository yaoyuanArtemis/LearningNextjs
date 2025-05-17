import { useRouter } from "next/router";

export default function MyDate() {
  const router = useRouter();

  return (
    <div
      // style={{
      //   display: "flex",
      //   gap: "32px",
      //   justifyContent: "center",
      // }}
      className="flex gap-8 justify-around bg-slate-50 font"
    >
      <button onClick={() => router.back()}>后退</button>
      <button onClick={() => router.push("/")}>首页</button>
    </div>
  );
}
