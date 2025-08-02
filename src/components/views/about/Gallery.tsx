import Image from "next/image";
import img_1 from "@/img/office-1.jpg"
import img_2 from "@/img/office-2.jpg"
import img_3 from "@/img/office-3.jpg"
import img_4 from "@/img/office-4.jpg"
import img_5 from "@/img/office-5.jpg"

const images = [img_1.src, img_2.src, img_3.src, img_4.src];

export default function Gallery() {
    return (
        <div className="w-full py-5 bg-flamingo-500">
            <section
                className="grid grid-cols-2 gap-2  w-8/10 overflow-x-hidden mr-2 ml-auto md:grid-cols-4"
            >

                {
                    images.map((item) => {
                        return (
                            <Image
                                alt=""
                                className="object-cover h-[15rem] object-center shrink-0 first:col-start-1 w-full rounded-xl md:h-[25rem] xl:h-[35rem]"
                                loading="lazy"
                                src={item}
                                height={450}
                                width={450}
                            />
                        )
                    })
                }
            </section>
        </div>
    )
}