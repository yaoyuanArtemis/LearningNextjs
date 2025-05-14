"use client"; 
import { useState, useEffect } from "react";
export default function MyDate() {
  const [dateString, setDateString] = useState("加载中");
  console.log("MyDate");
  const formatDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      };

  useEffect(() => {
    try {
      setTimeout(()=>{
        console.log("dateString",dateString)
        setDateString(formatDate());
      },0)
    } catch (error) {
      console.error("日期格式化错误:", error);
      setDateString("日期加载失败");
    }
  }, []);

  return <span>{dateString}</span>;
}
export async function getServerSideProps() {
  return {
    props: {},
  };
}
