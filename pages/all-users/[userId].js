import Head from "next/head";
import { useRouter } from "next/router";
import NotFound from "../404";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  // const paths = data.map(user => {
  //     return {
  //         params: {userId: user.id.toString()}
  //     }
  // })

  return {
    paths: [
      {
        params: { userId: "1" },
      },
      {
        params: { userId: '2'},
      }
    ],
    // paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.userId;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    }
  }

  console.log(`Generating page for /users/${id}`);

  return {
    props: { user: data },
  };
};

export default function UserDetails({ user }) {

  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <h1>Loading.......................</h1>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Hyring | User Details</title>
        <meta name="keywords" content="home" />
      </Head>
      <div className="mt-3 md:mt-10">
        <div className="mx-auto w-[92vw]">
          <div className="flex flex-col my-5 text-center">
            <h1 className="font-bold text-5xl">User Details</h1>
            <div className="flex justify-center items-center">
              <div className="w-[500px] h-[350px] flex justify-center mt-5 border rounded-[10px] bg-orange-300 border-black font-medium text-lg">
                <div className="w-[500px] flex justify-around">
                  <h1>{user.name}</h1>
                  <span>Profile Pic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
