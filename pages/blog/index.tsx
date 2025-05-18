import RouterButton from "../components/RouterButton.tsx";
import { InferGetServerSidePropsType } from "next";

type fileProps = {
  chinesename: string;
  creationTime:string;
  fileName:string;
  path:string
}

export default function Blog({data}: InferGetServerSidePropsType<typeof getStaticProps>) {

  const fileData = data.fileData;
  return (
    <main>
      <h1 className="text-3xl text-center font-bold mb-8">Blogs</h1>
      <RouterButton />

      <ul className="list-dash"> 
      {
          fileData.map((item: fileProps, index:string) => (
            <li key={index} >
              <a href={item.path} className="pl-15% pr-35%"> - {item.chinesename}{}<span style={{ position:"absolute",right:"10%" }}>{item.creationTime}</span></a>
          </li>
        ))
      }
      </ul>
    </main>
  );
}


export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/filetime`);
  const rep = await res.json();
  return {
    props: { data: rep },
    revalidate: 60,
  };
}

