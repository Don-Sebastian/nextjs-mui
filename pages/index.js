import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hyring | Home</title>
        <meta name="keywords" content="home" />
      </Head>
      <div className="mt-3 md:mt-20">
        <div className="mx-auto w-[92vw]">
          <div className="flex flex-col mx-auto my-0 text-center">
            <h1 className="font-bold text-5xl ">
              Meet the Gold Standard in
              <span className="text-orange-400"> Contract Hyring</span>
            </h1>
            <h3 className="py-5 font-medium text-gray-600">
              Hire from a pool of vetted candidates
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <Link href='/all-users'>
              <div className="w-[140px] h-[42px] border rounded-[10px] flex justify-center items-center bg-orange-300 border-black font-medium text-lg">
                All Users
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
