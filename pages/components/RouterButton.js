import { useRouter } from "next/router";

export default function MyDate() {
  const router = useRouter();

  return (
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        gap: "32px",
        justifyContent: "center",
      }}
    >
      <button onClick={() => router.back()}>后退</button>
      <button onClick={() => router.push("/")}>首页</button>
    </div>
  );
}
