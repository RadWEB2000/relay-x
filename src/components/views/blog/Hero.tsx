type T_Hero  ={
    title:string;
    content:string;
}

export default function Hero({title,content}:T_Hero){
    return (
        <header className="bg-flamingo-400 px-[8vw] py-[5vw] flex flex-col items-start justify-items-start space-y-3">
            <h1 className="text-8xl font-extrabold" dangerouslySetInnerHTML={{__html:title}} />
            <p className="text-lg leading-[2.1] max-w-[110ch]" dangerouslySetInnerHTML={{__html:content}}  />
        </header>
    )
}