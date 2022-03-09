import Image from 'next/image'

export default function SeccionReviews() {
    return(
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
    )
}