import Schedule from "../components/schedule";
import Dashboard from "../components/dashboard";

function Public(){
    return (
        <div className={"bg-slate-900 flex flex-col lg:flex-row lg:h-full relative md:absolute"}>
            <Dashboard />
            <Schedule />
        </div>
    )
}

export default Public;