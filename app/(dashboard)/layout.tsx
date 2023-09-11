//import Sidebar from "@/components/Sidebar";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import { getApiLimitCount } from "@/lib/api-limit";


const DashboardLayout= async ({
    children
}:{children:React.ReactNode;}
)=>{

    const apiLimitCount=await getApiLimitCount();


    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-[#add8e6]">
                <Sidebar apiLimitCount={apiLimitCount}/>
            </div>
            <main className="md:pl-72">
                <Navbar/>
                {children}
            </main>
        </div>
    );
}


export default DashboardLayout;