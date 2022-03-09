export default function Footer() {
    return(
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
    )
}