import Link from "next/link";

function Navbar() {
    return (
      <>
        <nav>
          <div className="pt-[14px] ">
            <div className="h-[67px] md:h-[102px] mx-auto px-5">
              <div className=" h-[63px] md:h-[93px] border-2 rounded-[10px] border-black relative flex">
                <div className="flex justify-between p-5 w-full  items-center ">
                  <Link href="/">
                    <h1 className="font-semibold text-3xl text-gray-700">
                      Hyring
                    </h1>
                  </Link>
                  <div className="md:flex gap-8 lg:gap-10 items-center hidden text-lg font-semibold">
                    <Link href="/about">
                      <p className="">About Us</p>
                    </Link>
                    <Link href="/contact">
                      <p>Contact Us</p>
                    </Link>
                  </div>
                  <Link href="/signup/personal-details">
                    <div className="w-[140px] h-[42px] border rounded-[4px] hidden md:flex justify-center items-center bg-orange-300 border-black font-medium text-lg">
                      Signup
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar;