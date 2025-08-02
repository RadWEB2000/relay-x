import Image from "next/image";

export default function Picture({ alt, src, title }: ImageBlock) {
    return (
        <Image
            {...{ alt, src, title }}
            loading="lazy"
            width={800}
            sizes={src}
            height={500}
            className="object-contain object-center mx-auto max-w-[85%] rounded-md my-4"
            quality={85}
        />
    )
}