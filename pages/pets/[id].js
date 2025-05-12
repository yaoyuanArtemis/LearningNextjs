import { useRouter } from "next/router";
import { Suspense } from "react";
import Image from "next/image";
import _ from "lodash";
import MyDate from "../components/myDate";
import RouterButton from "../components/RouterButton";
const Post = ({ data }) => {
  const imageUrl =
    data?.sprites?.other?.["official-artwork"]?.["front_default"] || null;
  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        宝可梦精灵——{data.name}
      </h2>

      <RouterButton />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>身高: {data.height}</div>
        <div>体重: {data.weight}</div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {imageUrl && (
          <Suspense fallback={<div>Loading</div>}>
            <Image
              src={"https://hub.gitmirror.com/" + imageUrl}
              alt="Pockon pic"
              width={400}
              height={400}
              loading="lazy"
            />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await res.json();
  return {
    props: { data: data },
  };
}
// export async function getStaticProps(context) {
//   const { id } = context.params;
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(
//     (res) => res.json()
//   );
//   return {
//     props: { data: res },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: _.range(1, 10).map((id) => ({ params: { id: id + "" } })),
//     fallback: "blocking",
//   };
// }
