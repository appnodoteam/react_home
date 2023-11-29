
function CardSmall({title, image}: {title: string, image: string}) {
    return(
        <a href="https://dash.appnodo.com" target="_blank" rel="noreferrer">
            <div className="flex flex-row hover:ml-2 cursor-pointer ease-in-out duration-300 items-center bg-white bg-opacity-30 border-2 shadow-lg border-white border-opacity-30 rounded-2xl mb-4 px-2 py-4 backdrop-blur-md backdrop-filter">
                <picture>
                    <img src={require("../../assets/"+image)} alt="social-media" className={"h-10 w-10"} />
                </picture>
                <div className={"mx-3"}>
                    <p className="text-lg font-bold uppercase"> {title} </p>
                </div>
            </div>
        </a>
    )
}

export default CardSmall;