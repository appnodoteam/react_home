import Calendar from "./calendar";

function Schedule(){
    return (
        <div className={"basis-1/3 dark:bg-slate-700 bg-slate-100 p-6 dark:text-slate-300 h-full overflow-x-auto"}>
            <div className={"my-4"}>
                <div className={"flex flex-row justify-between"}>
                    <span>AppNodo.com</span>
                    <button className={"bg-teal-600 text-white rounded-lg py-2 px-4"}>Agendar</button>
                </div>
            </div>

            <div className={"my-"}>
                <h2 className={"text-4xl"}><span>Agenda una cita</span> <br /> <strong>Habla con un experto</strong></h2>
            </div>

            <div className={"my-4 mb-8"}>
                <p>¿Necesitas ayuda con tu proyecto? <br /> Agenda una cita con un experto y te ayudaremos a resolver tus dudas.</p>
            </div>

            <Calendar />
        </div>
    );
}

export default Schedule;