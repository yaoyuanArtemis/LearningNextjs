import fs from "fs"
import path from "path"
import timeFormatter from "../../utils/timeFormatter"
function readFirstLineSync(filePath){
  try{
    return fs.readFileSync(filePath + "/index.md", "utf8").split("\n")[0].slice(2)
  }catch(e){
    console.error('Failed to read file:', e)
    new Error('Failed to read file:', e)
  }
}

export default function handler(req, res) {
  const blogDir = path.join(process.cwd(), "pages/blog");
  try{
    const files = fs.readdirSync(blogDir).filter(file => !file.endsWith(".tsx") && !file.endsWith(".ts"))
    const fileData = files.map(file => {
      const filePath = path.join(blogDir, file)
      const chinesename = readFirstLineSync(filePath) || "默认"
      const stats = fs.statSync(filePath)
      return {
        fileName: file,
        creationTime: timeFormatter(stats.birthtime),
        chinesename: chinesename,
        path: `/blog/${file}`
      }
    })
    res.status(200).json({fileData})
  }catch{
    res.status(500).json({error:"Error reading blog directory"})
  }
}