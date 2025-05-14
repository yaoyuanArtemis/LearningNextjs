'use client'
import { useState, useEffect } from "react";

export default function MyDate() {
  const [dateString, setDateString] = useState("加载中...");

  useEffect(() => {
    try {
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
      
      setDateString(formatDate());
    } catch (error) {
      console.error("日期格式化错误:", error);
      setDateString("日期加载失败");
    }
  }, []);

  return <span>{dateString}</span>;
}
