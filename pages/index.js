import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ScrollToTop from './componentes/scrollToTop'

export default function Home() {

  const cambiarOscuro = (e) => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.toString().includes('dark')) {
      document.getElementById("theme-button").className = document.getElementById("theme-button").className.replace(/(?:^|\s)bx-moon(?!\S)/g, ' bx-sun ')
    } else {
      document.getElementById("theme-button").className = document.getElementById("theme-button").className.replace(/(?:^|\s)bx-sun(?!\S)/g, ' bx-moon ')
    }
  }

  const abrirMenu = () => {
    var elem = document.getElementById('mobile-menu');
    if (elem.className.includes('hidden')) {
      document.getElementById("mobile-menu").className = document.getElementById("mobile-menu").className.replace(/(?:^|\s)hidden(?!\S)/g, ' ')
    } else {
      document.getElementById("mobile-menu").className += 'hidden'
    }
  }

  return (
    <div>
      <Head>
        <title>Burguer City</title>
        <meta name="burguer city" content="Burguer city" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
      </Head>


      <header className='absolute mt-1 top-0 left-0 right-0 flex items-start justify-between p-3'>
        <nav className="w-full bg-white border-darkmode px-2 sm:px-4 py-2.5 rounded dark:bg-darkmode shadow-sm ">
          <div className="container flex flex-wrap justify-between items-center mx-auto ">
            <Link href="#">
              <a className="text-2xl text-red-600 font-bold mx-1"><i className="fa-solid fa-burger"></i> Burguer City</a>
            </Link>

            <button onClick={abrirMenu} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <div className="w-full md:block md:w-auto mobile-menu hidden " id='mobile-menu' >
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-1 md:text-sm md:font-medium items-center">
                <li>
                  <Link href="#home">
                    <a className="text-xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-red-500 md:dark:hover:bg-transparent dark:border-gray-700" >Inicio</a>
                  </Link>
                </li>
                <li>
                  <Link href="#speciality">
                    <a className="text-xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-red-500 md:dark:hover:bg-transparent dark:border-gray-700">Especialidades</a>
                  </Link>
                </li>
                <li>
                  <Link href="#reviews">
                    <a className="text-xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-red-500 md:dark:hover:bg-transparent dark:border-gray-700">Reviews</a>
                  </Link>
                </li>
                <li>
                  <Link href="#order">
                    <a className="text-xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-red-500 md:dark:hover:bg-transparent dark:border-gray-700">Reservas</a>
                  </Link>
                </li>
                <li><i className='block mt-1 py-3 px-5 bx bx-moon change-theme cursor-pointer text-gray-700 border-b border-gray-100 hover:text-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-red-500 md:dark:hover:bg-transparent dark:border-gray-700' id="theme-button" onClick={cambiarOscuro}></i></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <ScrollToTop />

      <main className='main'>

        {/* //Home */}
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
              {/* <Image src="/img/home-burger.png" alt="hamburguesa" className="col-span-2 my-4 rounded-full" height="375" width="575" /> */}
              <Image src="/img/home-img.png" alt="hamburguesa" className="col-span-2 my-4 rounded-full" height="425" width="525" />
            </div>
          </div>
        </section>

        {/* //Especialidades */}
        <section className="speciality mt-36 mb-20 ml-10" id="speciality">

          <h1 className="heading text-center text-4xl p-4 dark:text-white">Nuestras <span className='text-red-500'>Especialidades</span> </h1>

          <div className="box-container grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-6 mt-5 justify-items-center">

            {/* //Hamburguesa 1 */}
            <div className="inline-block w-60 mt-4">
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1614602638662-c7c1f55c33f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="hamburguesa" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-32 rounded-md border-2">
                <div className='mt-24'>
                  <div className='w-auto flex justify-center'>
                    <Image src="/img/s-1.png" alt="hamburguesa" className="col-span-2 my-4" height="55" width="55" />
                  </div>
                  <h3 className='text-red-500 text-2xl'>Burger Americana</h3>
                  <div className="stars my-3 text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className='my-3 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
              </div>
            </div>

            {/* //Hamburguesa 2 */}
            <div className="inline-block w-60 mt-4">
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1609167921178-e295a98f808f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="hamburguesa" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-32 rounded-md border-2">
                <div className='mt-24'>
                  <div className='w-auto flex justify-center'>
                    <Image src="/img/s-1.png" alt="hamburguesa" className="col-span-2 my-4" height="55" width="55" />
                  </div>
                  <h3 className='text-red-500 text-2xl'>Burger Completa</h3>
                  <div className="stars my-3 text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <p className='my-3 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
              </div>
            </div>


            {/* //Hamburguesa 3 */}
            <div className="inline-block w-60 mt-4">
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1609167921669-4561a5b64e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="hamburguesa" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-32 rounded-md border-2">
                <div className='mt-24'>
                  <div className='w-auto flex justify-center'>
                    <Image src="/img/s-1.png" alt="hamburguesa" className="col-span-2 my-4" height="55" width="55" />
                  </div>
                  <h3 className='text-red-500 text-2xl'>Burger Deluxe</h3>
                  <div className="stars my-3 text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <p className='my-3 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
              </div>
            </div>


            {/* //Hamburguesa 4 */}
            <div className="inline-block w-60 mt-4">
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1568729527263-068c848425eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="hamburguesa" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-32 rounded-md border-2">
                <div className='mt-24'>
                  <div className='w-auto flex justify-center'>
                    <Image src="/img/s-1.png" alt="hamburguesa" className="col-span-2 my-4" height="55" width="55" />
                  </div>
                  <h3 className='text-red-500 text-2xl'>Burger Chopper</h3>
                  <div className="stars my-3 text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <p className='my-3 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
              </div>
            </div>


            {/* //Hamburguesa 5 */}
            <div className="inline-block w-60 mt-4">
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1609167921919-9436787fdecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="hamburguesa" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-32 rounded-md border-2">
                <div className='mt-24'>
                  <div className='w-auto flex justify-center'>
                    <Image src="/img/s-1.png" alt="hamburguesa" className="col-span-2 my-4" height="55" width="55" />
                  </div>
                  <h3 className='text-red-500 text-2xl'>Burger Especial</h3>
                  <div className="stars my-3 text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <p className='my-3 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
              </div>
            </div>


            {/* //Pizza 1 */}
            <div className="inline-block w-60 mt-4">
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="hamburguesa" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-32 rounded-md border-2">
                <div className='mt-24'>
                  <div className='w-auto flex justify-center'>
                    <Image src="/img/s-2.png" alt="pizza" className="col-span-2 my-4" height="55" width="55" />
                  </div>
                  <h3 className='text-red-500 text-2xl'>Pizza Prime Italy</h3>
                  <div className="stars my-3 text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className='my-3 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
              </div>
            </div>

            {/* //Pizza 2 */}
            <div className="inline-block w-60 mt-4">
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1587085416963-22efba033dd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="pizza vegana" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-32 rounded-md border-2">
                <div className='mt-24'>
                  <div className='w-auto flex justify-center'>
                    <Image src="/img/s-2.png" alt="pizza" className="col-span-2 my-4" height="55" width="55" />
                  </div>
                  <h3 className='text-red-500 text-2xl'>Pizza Vegana</h3>
                  <div className="stars my-3 text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <p className='my-3 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
              </div>
            </div>

            {/* //Pizza 3 */}
            <div className="inline-block w-60 mt-4">
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80" alt="pizza vegana" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-32 rounded-md border-2">
                <div className='mt-24'>
                  <div className='w-auto flex justify-center'>
                    <Image src="/img/s-2.png" alt="pizza" className="col-span-2 my-4" height="55" width="55" />
                  </div>
                  <h3 className='text-red-500 text-2xl'>Pizza Deluxe</h3>
                  <div className="stars my-3 text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <p className='my-3 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
              </div>
            </div>


            {/* //Helado 1 */}
            <div className="inline-block w-60 mt-4">
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="pizza vegana" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-32 rounded-md border-2">
                <div className='mt-24'>
                  <div className='w-auto flex justify-center'>
                    <Image src="/img/s-3.png" alt="pizza" className="col-span-2 my-4" height="55" width="55" />
                  </div>
                  <h3 className='text-red-500 text-2xl'>Helado Old School</h3>
                  <div className="stars my-3 text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <p className='my-3 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
              </div>
            </div>

            {/* //Helado 2 */}
            <div className="inline-block w-60 mt-4">
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1587563974670-b5181b459b30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="pizza vegana" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-32 rounded-md border-2">
                <div className='mt-24'>
                  <div className='w-auto flex justify-center' >
                    <Image src="/img/s-3.png" alt="pizza" className="col-span-2 my-4" height="55" width="55" />
                  </div>
                  <h3 className='text-red-500 text-2xl'>Helado Prime XXL</h3>
                  <div className="stars my-3 text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <p className='my-3 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="mb-16">

          <h1 className="text-center text-4xl p-4 dark:text-white">Nuestra forma de <span className='text-red-500'>Trabajar</span> </h1>

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

        </div>

        <section className="reviews mt-26 mb-20" id="reviews">

          <h1 className="heading text-center text-4xl p-4 dark:text-white"><span className='text-red-500'>Reviews</span> de nuestros clientes </h1>

          <div className="box-container grid grid-cols-1 lg:grid-cols-3  gap-6 mt-5 justify-items-center">

            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-100 dark:border-2 mx-6">
            <div className='flex justify-center w-24 h-24 md:w-full md:h-full mx-auto'>
                <Image src="/img/pic1.png" alt="Sara Del Valle" className="w-24 h-24  md:w-full md:h-full lg:w-24 lg:h-24 md:rounded-xl rounded-full " width="950" height="950" />
              </div>
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <figcaption className="font-medium text-center">
                  <div className="text-red-500 dark:text-red-400">
                    Sara Del Valle
                  </div>
                </figcaption>
                <blockquote>
                  <p className="text-lg font-medium">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti Delectus, Ducimus Facere Quod Ratione Vel Laboriosam? Est, Maxime Rem. Itaque.
                  </p>
                </blockquote>
                <figcaption className="font-medium text-center">
                  <div className="stars my-3 text-yellow-500">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </figcaption>
              </div>
            </figure>

            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-100 dark:border-2 mx-6">
            <div className='flex justify-center w-24 h-24 md:w-full md:h-full mx-auto'>
                <Image src="/img/pic2.png" alt="Jaime Alonso" className="w-24 h-24  md:w-full md:h-full lg:w-24 lg:h-24 md:rounded-xl rounded-full " width="950" height="950" />
              </div>
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <figcaption className="font-medium text-center">
                  <div className="text-red-500 dark:text-red-400">
                    Jaime Alonso
                  </div>
                </figcaption>
                <blockquote>
                  <p className="text-lg font-medium">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti Delectus, Ducimus Facere Quod Ratione Vel Laboriosam? Est, Maxime Rem. Itaque.
                  </p>
                </blockquote>
                <figcaption className="font-medium text-center">
                  <div className="stars my-3 text-yellow-500">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                </figcaption>
              </div>
            </figure>

            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-100 dark:border-2 mx-6">
              {/* <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto" src="img/pic3.png" alt="" width="384" height="512" /> */}
              <div className='flex justify-center w-24 h-24 md:w-full md:h-full mx-auto'>
                <Image src="/img/pic3.png" alt="laura perez" className="w-24 h-24  md:w-full md:h-full lg:w-24 lg:h-24 md:rounded-xl rounded-full " width="950" height="950" />
              </div>

              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <figcaption className="font-medium text-center">
                  <div className="text-red-500 dark:text-red-400">
                    Laura Pérez
                  </div>
                </figcaption>
                <blockquote>
                  <p className="text-lg font-medium">
                    Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corrupti Delectus, Ducimus Facere Quod Ratione Vel Laboriosam? Est, Maxime Rem. Itaque.
                  </p>
                </blockquote>
                <figcaption className="font-medium text-center">
                  <div className="stars my-3 text-yellow-500">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                </figcaption>
              </div>
            </figure>

          </div>
        </section>

        <div className='flex justify-items-center mx-4' >
          <section className="order mb-20 mx-auto" id="order">

            <h1 className="text-center text-4xl p-4 dark:text-white"> <span className='text-red-500'>Reservar</span> ahora </h1>

            <div className="row p-8 shadow-md bg-slate-100 flex flex-wrap gap-6 rounded-lg mt-4">

              <div className="image flex-1 hidden sm:block">
                <Image src="https://images.unsplash.com/photo-1579090175332-8749c125baf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="order now" className="rounded-lg" width="250" height="400" />
              </div>

              <form>
                <div className="relative z-0 mb-6 w-full group">
                  <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " required />
                  <label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " required />
                  <label htmlFor="floating_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input type="number" name="numero_personas" id="numero_personas" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " required />
                  <label htmlFor="floating_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero de personas</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " required />
                  <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " required />
                  <label htmlFor="floating_phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de Télefono</label>
                </div>
                <Link href="#">
                  <a className="my-4 inline-block bg-white hover:bg-red-500 hover:text-white text-red-500  dark:bg-red-500  dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-red-500 dark:hover:border-red-500 py-3 px-3 font-semibold rounded-lg transition duration-300 border-2 border-red-600">Reservar ahora</a>
                </Link>
              </form>
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-10 mb-8">
        <div className="font-medium text-center">
          <div className="stars my-3 space-x-4">
            <i className="text-blue-500 text-4xl fa-brands fa-facebook"></i>
            <i className="text-4xl fa-brands fa-instagram-square instagram"></i>
            <i className="text-red-500 text-4xl fa-brands fa-pinterest"></i>
          </div>
        </div>
        <div className="items-center w-[960] mx-11 grid grid-cols-1 gap-6 ">
          <div className="text-center">
            <p className="text-black dark:text-white">&#169; 2022 JonyCoding. All right reserved</p>
          </div>
        </div>
      </footer>


    </div>
  )
}
