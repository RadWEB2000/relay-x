export default function MenuButton() {
    return (
        <button className="h-[60px] w-[60px] bg-yellow-200/0 ml-2 rounded-2xl flex flex-col items-center justify-between p-2 relative group cursor-pointer" >
            <span className="w-full h-1 bg-abbey-900 linear duration-100 dark:bg-abbey-100 rounded-lg block group-hover:absolute group-hover:rotate-45" />
            <span className="w-full h-1 bg-abbey-900 dark:bg-abbey-100 rounded-lg block  linear duration-100  group-hover:scale-x-0" />
            <span className="w-full h-1 bg-abbey-900  linear duration-100  dark:bg-abbey-100 rounded-lg block group-hover:absolute group-hover:-rotate-45" />
        </button>
    )
}