import Head from 'next/head'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import ScrollToTop from './componentes/scrollToTop'
import SeccionFormaTrabajar from './componentes/SeccionFormaTrabajar'
import SeccionHome from './componentes/SeccionHome'
import SeccionReservas from './componentes/SeccionReservas'
import SeccionReviews from './componentes/SeccionReviews'
import SeccionEspecialidades from './SeccionEspecialidades'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Burguer City</title>
        <meta name="burguer city" content="Burguer city" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
      </Head>

      <Header />
      <ScrollToTop />

      <main className='main'>

        {/* //Home */}
        <SeccionHome />

        {/* //Especialidades */}
        <SeccionEspecialidades />

        {/* //Formar de Tranajar */}
        <SeccionFormaTrabajar />

        {/* //Reviews */}
        <SeccionReviews />

        {/* //Reserva */}
        <SeccionReservas />

      </main>

      <Footer />

    </div>
  )
}
