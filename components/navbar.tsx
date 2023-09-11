
import { UserButton } from "@clerk/nextjs"
import Mobilesidebar from "./mobile-sidebar"
import { getApiLimitCount } from "@/lib/api-limit"

const navbar = async () => {
  const apiLimitCount=await getApiLimitCount();
  
  return (

    
    <div className="flex items-center p-4">
        <Mobilesidebar apiLimitCount={apiLimitCount}/>
        <div className="flex w-full justify-end">
            <UserButton afterSignOutUrl="/"/>
        </div>
    </div>
  )
}

export default navbar