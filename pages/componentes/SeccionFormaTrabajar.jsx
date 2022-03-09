import Image from 'next/image'

export default function SeccionFormaTrabajar() {
    return (
        <>
            <h1 className="mb-16 text-center text-4xl p-4 dark:text-white">Nuestra forma de <span className='text-red-500'>Trabajar</span> </h1>

            <section className="flex-wrap gap-6 p-4 my-4 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 justify-center">

                <div className="flex-1 p-4 text-center ">
                    <Image src="/img/step-1.jpg" alt="step 1" className='rounded-full' height="215" width="215" />
                    <h3 className='text-2xl text-black dark:text-white font-semibold p-4'>Elige tu comida favorita</h3>
                </div>
                <div className="flex-1 p-4 text-center">
                    <Image src="/img/step-2.jpg" alt="step 2" className='rounded-full' height="215" width="215" />
                    <h3 className='text-2xl text-black dark:text-white font-semibold p-4'>Entrega gratuita y rápida</h3>
                </div>
                <div className="flex-1 p-4 text-center">
                    <Image src="/img/step-3.jpg" alt="step 3" className='rounded-full' height="215" width="215" />
                    <h3 className='text-2xl text-black dark:text-white font-semibold p-4'>Metodos de pago faciles</h3>
                </div>
                <div className="flex-1 p-4 text-center">
                    <Image src="/img/step-4.jpg" alt="step 4" className='rounded-full' height="215" width="215" />
                    <h3 className='text-2xl text-black dark:text-white font-semibold p-4'>Y finalmente, disfruta de tu comida</h3>
                </div>

            </section>
        </>
    )
}