// SSR 每次页面请求时 重新生成页面
import Image from "next/image";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import _ from "lodash";
import RouterButton from "../components/RouterButton.tsx";

interface PokemonsData{
  name:string,
  height:string | number,
  weight:string | number,
  sprites:{
    other:{
      "official-artwork":{
        "front_default":string,
        "front_shiny":string
      }
    }
  }
}

const Post = ({ data}: InferGetServerSidePropsType<typeof getServerSideProps> ) => {
  const blurDataURL =
    "data:image/webp;base64,UklGRloCAABXRUJQVlA4WAoAAAAgAAAAOQAAOQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggbAAAAHAEAJ0BKjoAOgA+7WiuUymwLiKkGAySAB2JZwZwDURAXxxyTWJTueAuyaoAAP7R2JwI8aD4tqpFZPwKPgzfuDmYwRijTGLG1QN/Am2ooOo7pxvaGoH75qoiFg+sFIKHT3gt0A4jnA58wAAAAA==";
  const imageUrl =
    data?.sprites?.other?.["official-artwork"]?.["front_default"] || null;
  return (

      <main>
        <h2 className="text-center  text-3xl ">宝可梦精灵——{data.name}</h2>

        <RouterButton />
        <div className="flex justify-around md:justify-between">
          <div>身高: {data.height}</div>
          <div>体重: {data.weight}</div>
        </div>

        <div className="flex justify-center items-center mt-5">
          <Image
            src={"https://hub.gitmirror.com/" + imageUrl}
            alt="Pockon pic"
            width={400}
            height={400}
            loading="lazy"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>
      </main>
  );
};

export default Post;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data:PokemonsData = await res.json();
  return {
    props: { data: data },
  };
}
