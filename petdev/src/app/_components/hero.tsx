import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import dogimg from '../../../public/hero-dog.webp'
import Image from 'next/image'
import catimg from '../../../public/cat-hero.png'

export function Hero() {
    return (
        <section className="bg-[#E84C3D] text-white relative overflow-hidden">

            <div>
                <Image
                    src={dogimg}
                    alt="Cachorro happy"
                    fill
                    sizes='100vw'
                    className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-40 lg:hidden'></div>
            </div>

            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className="space-x-6">

                        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10 mb-2 ">
                            Seu pet merece cuidado, carinho e atenção especial.
                        </h1>
                        <p className="lg:text-lg">
                            Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro
                        </p>

                        <div>
                            <a
                                href="#"
                                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex itens-center gap-2 w-max mt-6 hover:bg-green-600 transition-colors"
                                >
                                <WhatsappLogoIcon className='w-5 h-5'/>
                                Contato via Whatsapp
                            </a>
                        </div>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <strong className="bg-black text-white px-2 py-1 rounded-md">
                                    5%
                                </strong>
                                de desconto na primeira compra
                            </p>


                            <div className='flex mt-4'>
                                <div className='w-32 hidden lg:block'>
                                    <Image 
                                        src={catimg} 
                                        alt="Gato feliz" 
                                        className='object-fill'
                                        quality={100}
                                        width={150}
                                        height={150}
                                    />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                        <div className='hidden md:block h-full relative'>
                            <Image 
                                src={dogimg} 
                                alt="Cachorro feliz" 
                                className='object-contain'
                            fill
                            sizes='(max-width: 768px) 0vm, 50vm'
                            quality={100}
                            priority
                            />
                        </div>
                </article>
            </div>

        </section>
    )
}