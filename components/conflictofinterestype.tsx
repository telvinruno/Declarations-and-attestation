import Link from "next/link"
import { FaGreaterThan } from "react-icons/fa6"
// import { TbUsersGroup } from "react-icons/tb"
// import { LuBriefcaseBusiness } from "react-icons/lu";
// import { VscLinkExternal } from "react-icons/vsc";
// import { CiSquareMinus } from "react-icons/ci";


import Image from 'next/image'
import family from '../public/icons8-users-64.png'
import business from '../public/icons8-group-of-companies-64.png'
import external from '../public/icons8-external-link-64.png'
import nada from '../public/icons8-minus-key-64.png'

export default function ConflictOfInterestType() {
  return (
    <div className="flex h-[40vh] w-[55vw]">
      <div className="flex flex-col w-full gap-2">
        <h1 className="font-bold text-xl my-1">Select Conflict of Interest Type</h1>
        <p>
          Please select the type of conflict of interest you wish to declare. Each type has a specific form to ensure
          all necessary details are captured accurately
        </p>

        {/* First item */}
        <div className="flex justify-center h-1/4">
          <div className="flex w-full bg-white justify-start rounded-lg border">
            <div className="flex items-center px-4 py-2 text-blue-500 ">
              {/* <TbUsersGroup size={25} /> */}
                   <Image 
                      src={family}
                      alt="Error"  
                      style={{ width:'80%' }} 
                  />

            </div>
            <div className="flex flex-col justify-start py-1 px-4 flex-1 ">
              <h1><b>Family Relations</b></h1>
              <p>Declare relationships that may pose a threat</p>
            </div>

            <div className="flex items-center px-4 pr-10">
            <Link href="/declarations/conflictofinterest/family">
              <FaGreaterThan size={15} />
            </Link>
          </div>
          </div>

        </div>

        {/* Second item */}
        <div className="flex justify-center h-1/4">
          <div className="flex w-full bg-white justify-start rounded-lg border">
            <div className="flex items-center px-4 py-2 text-blue-500">
                   <Image 
                      src={business}
                      alt="Error"  
                      style={{ width:'80%' }} 
                  />
            </div>
            <div className="flex flex-col justify-start py-1 px-4 flex-1">
              <h1><b>Business Interest</b></h1>
              <p>Declare any personal business interest</p>
            </div>

                      <div className="flex items-center px-4 pr-10">
            <Link href="/declarations/conflictofinterest/business">
              <FaGreaterThan size={15} />
            </Link>
          </div>
          </div>

        </div>

        {/* Third item */}
        <div className="flex justify-center h-1/4">
          <div className="flex w-full bg-white justify-start rounded-lg border">
            <div className="flex items-center px-4 py-2 text-blue-500">
                     <Image 
                      src={external}
                      alt="Error"  
                      style={{ width:'80%' }} 
                  />
            </div>
            <div className="flex flex-col justify-start py-1 px-4 flex-1">
              <h1><b>Outside Engagements</b></h1>
              <p>Declare external roles or commitments</p>
            </div>

            <div className="flex items-center px-4 pr-10">
            <Link href="/declarations/conflictofinterest/outside">
              <FaGreaterThan size={15}  />
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
        <div className="flex justify-center h-1/4">
          <div className="flex w-full bg-white justify-start rounded-lg border">
            <div className="flex items-center px-4 py-2 text-blue-500">
                    <Image 
                      src={nada}
                      alt="Error"  
                      style={{ width:'80%' }} 
                  />
            </div>
            <div className="flex flex-col justify-start py-1 px-4 flex-1">
              <h1><b>I have nothing to declare at this time</b></h1>
              <p>Read the policy carefully to determine if you have conflict to declare</p>
            </div>
            <div className="flex items-center px-4 pr-10">
            <Link href="/declarations/conflictofinterest/none">
              <FaGreaterThan size={15}  />
            </Link>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}
