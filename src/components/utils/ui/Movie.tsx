export default function Movie({ poster, preload, src }: VideoBlock) {
    return (
        <video className="w-full aspect-video rounded-md" src={src} poster={poster} controls preload={preload} />
    )
}