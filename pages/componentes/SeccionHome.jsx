import Link from 'next/link'
import Image from 'next/image'

export default function SeccionHome() {
    return(
        <section className="home mt-36 mb-28  ml-10" id="home">
          <div className="items-center w-[960] mx-11 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-left">
              <h1 className=" text-red-500 text-6xl font-semibold mb-3 my-5">Comida hecha con amor</h1>
              <p className="text-black dark:text-white text-xl tracking-wider my-5">Disfruta de las mejores hamburguesas realizada por los mejores especialistas del mercado. Con ingredientes 100% naturales gratizando la mejor calidad en cada uno de nuestros producto. Y con el ingrediente más importante; El amor</p>
              <Link href="#menu">
                <a className="my-4 inline-block bg-white hover:bg-red-500 hover:text-white text-red-500  dark:bg-red-500  dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-red-500 dark:hover:border-red-500 py-3 px-3 font-semibold rounded-lg transition duration-300 border-2 border-red-600">View Menu</a>
              </Link>
            </div>

            <div className='w-auto flex justify-center animate-float float'>
              <Image src="/img/home-img.png" alt="hamburguesa" className="col-span-2 my-4 rounded-full" height="425" width="525" />
            </div>
          </div>
        </section>
    )
}