import Link from "next/link"
import { FaGreaterThan } from "react-icons/fa6"
import { TbUsersGroup } from "react-icons/tb"
import { LuBriefcaseBusiness } from "react-icons/lu";
import { VscLinkExternal } from "react-icons/vsc";
import { CiSquareMinus } from "react-icons/ci";

export default function ConflictOfInterestType() {
  return (
    <div className="flex h-[60vh] w-[55vw] m-[0px_0px_0px_1%]">
      <div className="flex flex-col w-full gap-3">
        <h1 className="font-bold text-xl my-5">Select Conflict of Interest Type</h1>
        <p>
          Please select the type of conflict of interest you wish to declare. Each type has a specific form to ensure
          all necessary details are captured accurately
        </p>

        {/* First item */}
        <div className="flex  justify-center">
          <div className="flex w-full bg-white justify-start rounded-lg">
            <div className="flex items-center px-4 py-2">
              <TbUsersGroup size={25} />
            </div>
            <div className="flex flex-col justify-start py-4 px-4 flex-1 ">
              <h1>Family Relations</h1>
              <p>Declare relationships that may pose a threat</p>
            </div>

            <div className="flex items-center px-4 pr-10">
            <Link href="/declarations/conflictofinterest/family">
              <FaGreaterThan size={25} />
            </Link>
          </div>
          </div>

        </div>

        {/* Second item */}
        <div className="flex justify-center">
          <div className="flex w-full bg-white justify-start rounded-lg">
            <div className="flex items-center px-4 py-2">
              <LuBriefcaseBusiness size={25}  />
            </div>
            <div className="flex flex-col justify-start py-4 px-4 flex-1">
              <h1>Business Interest</h1>
              <p>Declare any personal business interest</p>
            </div>

                      <div className="flex items-center px-4 pr-10">
            <Link href="/declarations/conflictofinterest/business">
              <FaGreaterThan size={25} />
            </Link>
          </div>
          </div>

        </div>

        {/* Third item */}
        <div className="flex justify-center">
          <div className="flex w-full bg-white justify-start rounded-lg">
            <div className="flex items-center px-4 py-2">
              <VscLinkExternal size={25}  />
            </div>
            <div className="flex flex-col justify-start py-4 px-4 flex-1 ">
              <h1>Outside Engagements</h1>
              <p>Declare external roles or commitments</p>
            </div>

            <div className="flex items-center px-4 pr-10">
            <Link href="/declarations/conflictofinterest/outside">
              <FaGreaterThan size={25}  />
            </Link>
          </div>
          </div>

        </div>

        <div className="flex items-center gap-4 my-6">
          <hr className="flex-1 border-t border-gray-300" />
          <span className="text-gray-600 font-semibold">OR</span>
          <hr className="flex-1 border-t border-gray-300" />
        </div>

        {/* Fourth item */}
        <div className="flex justify-center">
          <div className="flex w-full bg-white justify-start rounded-lg">
            <div className="flex items-center px-4 py-2">
              <CiSquareMinus size={25} />
            </div>
            <div className="flex flex-col justify-start py-4 px-4 flex-1">
              <h1>I have nothing to declare at this time</h1>
              <p>Read the policy carefully to determine if you have conflict to declare</p>
            </div>
            <div className="flex items-center px-4 pr-10">
            <Link href="/declarations/conflictofinterest/none">
              <FaGreaterThan size={25}  />
            </Link>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}
