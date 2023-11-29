import Schedule from "../components/schedule";
import Dashboard from "../components/dashboard";

function Public(){
    return (
        <div className={"bg-slate-900 flex flex-col md:flex-row h-full relative md:absolute"}>
            <Dashboard />
            <Schedule />
        </div>
    )
}

export default Public;