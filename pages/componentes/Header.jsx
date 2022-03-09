import Link from 'next/link'

export default function Header() {

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

    return(
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
    )
}