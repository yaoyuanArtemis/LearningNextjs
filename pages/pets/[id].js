import { useRouter } from "next/router";
import Image from "next/image";
import _ from "lodash";
const Post = ({ data }) => {
  //   const router = useRouter();
  const imageUrl =
    data?.sprites?.other?.["official-artwork"]?.["front_default"] || null;
  return (
    <>
      <h2>Post:{data.name}</h2>
      <div>Height:{data.height}</div>
      <div>Weight:{data.weight}</div>
      <div>
        {imageUrl && (
          <div>
            <Image
              src={"https://hub.gitmirror.com/" + imageUrl}
              alt="Pockon pic"
              width={400}
              height={400}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(
    (res) => res.json()
  );
  return {
    props: { data: res },
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
