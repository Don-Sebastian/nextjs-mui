import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return {
        props: { users: data}
    }
}

export default function AllUsers({users}) {
    return (
      <>
        <Head>
          <title>Hyring | All Users</title>
          <meta name="keywords" content="home" />
        </Head>
        <div className="mt-3 md:mt-20">
          <div className="mx-auto w-[92vw]">
            <div className="flex flex-col mx-auto my-5">
              <h1 className="font-bold text-5xl ">
                All Users
              </h1>
            </div>
            <div className="flex flex-col py-3">
                {users.map((user) => {
                    return (
                      <>
                        <div key={user.id}>
                          <Link href={`/all-users/${user.id}`}>
                            <div className="w-1/2 mb-3 h-[42px] border border-gray-700 hover:bg-orange-300 rounded-[10px] hidden md:flex items-center bg-orange-100 font-medium text-lg">
                              <h1 className="ml-5">{user.name}</h1>
                            </div>
                          </Link>
                        </div>
                      </>
                    );
                })}
            </div>
          </div>
        </div>
      </>
    );
}