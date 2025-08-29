import Image from 'next/image';
import about1img from '../../../public/about-1.png';
import about2img from '../../../public/about-2.png';

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">


            <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className='relative'>

                    <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
                        <Image
                            src={about1img}
                            alt="About Image 1"
                            fill
                            quality={100}
                            priority
                            className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <div className='absolute w-40 h-40 right-4 -bottom-8 rounded-lg  border-4 overflow-hidden border-white shadow-lg'>
                        <Image
                            src={about2img}
                            alt="About Image 2"
                            fill
                            quality={100}
                            priority
                        />
                    </div>
                </div>

                <div className='space-y-6'></div>

            </div>
        </section>
    )
}