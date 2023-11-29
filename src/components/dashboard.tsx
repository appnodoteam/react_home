import CardSmall from "./cards/card-small";
import { ReactComponent as YourSvg } from '../assets/logo-h-appnodo.svg';

function Dashboard() {

    return (
    <div
        className={
        "basis-2/3 flex flex-col md:flex-col md:justify-center dark:bg-slate-400 p-12 bg-cover bg-center bg-no-repeat bg-server "
        }>
        <div className={"inline-block md:flex md:flex-row"}>
            <div className={"basis-1 md:basis-1/3"}>
                <CardSmall title={"Inventarios"} image={"001-inventory.png"} />
                <CardSmall title={"Prestamistas"}  image={"prestamista.png"} />
                <CardSmall title={"Rutero"}  image={"004-express-delivery.png"}/>
                <CardSmall title={"P.O.S. Móvil"}  image={"pos-movil.png"}/>
                <CardSmall title={"Delivery"}  image={"delivery.png"}/>
            </div>
            <div className={"basis-1 md:basis-2/3 mx-6"}>
                <div className={"bg-white text text-slate-600 bg-opacity-75 p-4 rounded-xl shadow-md backdrop-blur-sm"}>
                    <picture>
                        <YourSvg className={"h-8 my-6 mx-auto"} />
                    </picture>
                    <h2 className={"text-2xl  font-extrabold"}>
                        Aplicaciones en la Nube para PYMEs
                    </h2>
                    <p>
                        Aplicaciones en la nube para aumentar la productividad de PYMEs, accesibles online para optimizar procesos y mejorar eficiencia.
                    </p>
                    <div className={"flex flex-row text-white font-bold space-x-1 mt-4 justify-center"}>
                        <a href="https://dash.appnodo.com" target="_blank" rel="noreferrer" className={"block px-4 py-2 bg-teal-600 rounded-lg"}>Iniciar sesión</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;