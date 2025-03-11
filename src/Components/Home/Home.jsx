import './Home.css'
import Hero from "../Hero/Hero";
import IconCard from "../IconCard/IconCard";
import ProductsList from "../Products/ProductsList";
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "../Slider/Slider";
import SabiasQue from '../SabiasQue/SabiasQue';
import Spa from '../Spa/Spa';
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <section>
        <SectionTitle h2={"Nuestras"} span={"Ofertas"}></SectionTitle>
        <ProductsList />
      </section>
      <section>
        <SectionTitle h2={"Porqué"} span={"Nosotros"}></SectionTitle>
        <div className="icon-container">
        <IconCard img='public/heart.png' nombre='Cuidamos a tu mejor amigo' texto='Somos un equipo de profesionales certificados, dispuestos a brindarte asesoramiento personalizado para que tu mascota reciba los mejores cuidados y prodcutos'></IconCard>
        <IconCard img='public/winner.png' nombre='Brindamos el mejor servicio' texto='Tratamos a tu mascota de la mejor manera. Estamos a tu disposición para asegurar el bienestar de tu mejor amigo'></IconCard>
        <IconCard img='public/medal.png' nombre='Disfrutás de la mejor calidad' texto='Productos especialmente pensados y diseñados para el disfrute de tu mascota. Sin conservantes y enteramente naturales'></IconCard>
        <IconCard img='public/support.png' nombre='Pertenecés a nuestro club' texto='Compartí tus historias con tu mascota en "Club de Mascotas". Conocé nuevos amigos fanáticos de los animales como vos'></IconCard>
        <IconCard img='public/wholesale.png' nombre='Accedés a precios mayoristas' texto='Encontrá nuestros productos a precios increíbles. Descubrí nuestras variadas ofertas al mejor precio'></IconCard>
        </div>
      </section>
      <section>
        <SectionTitle h2={'Sabías'} span={' que...'}></SectionTitle>
        <SabiasQue></SabiasQue>
      </section>
      <section className='partner'>
          <SectionTitle h2={'Conocé a Nuestros Socios'}></SectionTitle>
          <div className='partner-logos'>
          <img src="./public/dog.png" alt="logo amigo" />
          <img src="./public/cat.png" alt="logo amigo" />
          <img src="./public/vet.png" alt="logo amigo" />
          </div>
          <button>más información</button>
       </section>
      <section>
        <SectionTitle h2={'Spa de '} span={'mascotas'}></SectionTitle>
        <Spa></Spa>
      </section>
      <section> 
      <SectionTitle h2={"Nuestros"} span={"Amigos"}></SectionTitle>
        <Slider></Slider>
      </section>
      <section className='social'>
        <SectionTitle h2={'Nuestras redes'}></SectionTitle>
          <div>
            <a href="#"><img src="./public/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="./public/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="./public/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="./public/whatsapp.png" alt="Whatsapp" /></a>
            <a href="#"><img src="./public/messenger.png" alt="Messenger" /></a>
            <a href="#"><img src="./public/telegram.png" alt="Telegram" /></a>
          </div>
       </section>
    </div>
  );
};
export default Home;
