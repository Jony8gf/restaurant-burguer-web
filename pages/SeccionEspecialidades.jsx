import Image from 'next/image'

export default function SeccionEspecialidades() {
    return(
        <section className="speciality mt-36 mb-20 ml-10" id="speciality">

          <h1 className="heading text-center text-4xl p-4 dark:text-white">Nuestras <span className='text-red-500'>Especialidades</span> </h1>

          <div className="box-container grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-6 mt-5 justify-items-center">

            {/* //Hamburguesa 1 */}
            <div className="inline-block w-60 mt-4">
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl ml-1 skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1614602638662-c7c1f55c33f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="hamburguesa" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-28 rounded-md border-2">
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
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl ml-1 skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1609167921178-e295a98f808f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="hamburguesa" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-28 rounded-md border-2">
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
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl ml-1 skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1609167921669-4561a5b64e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="hamburguesa" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-28 rounded-md border-2">
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
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl ml-1 skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1568729527263-068c848425eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="hamburguesa" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-28 rounded-md border-2">
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
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl ml-1 skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1609167921919-9436787fdecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="hamburguesa" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-28 rounded-md border-2">
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
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl ml-1 skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="hamburguesa" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-28 rounded-md border-2">
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
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl ml-1 skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1587085416963-22efba033dd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="pizza vegana" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-28 rounded-md border-2">
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
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl ml-1 skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80" alt="pizza vegana" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-28 rounded-md border-2">
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
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl ml-1 skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="pizza vegana" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-28 rounded-md border-2">
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
              <div className="img-container h-56 w-52 overflow-hidden inline-block rounded-lg rounded-b-3xl ml-1 skew-x-3 justify-center ">
                <div className="img-inner ml-4">
                  <div className="inner-skew inline-block rounded-2xl overflow-hidden ">

                    <Image src="https://images.unsplash.com/photo-1587563974670-b5181b459b30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="pizza vegana" className="" height="255" width="255" />
                  </div>
                </div>
              </div>
              <div className="text-container flex-col items-center justify-center text-center -mt-28 rounded-md border-2">
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
    )
}