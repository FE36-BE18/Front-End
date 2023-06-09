import About from "./about";
import ArticleList from "./ArticleCard";
import Hero from "./hero";
import Layanan from "./layanan";

function Home (){
  return(
    <>
      <Hero />
      <About />
      <Layanan />
        <section className="mb-5 about">
          <h2 className="title">Artikel</h2>
          <p className="content">Untuk informasi lebih lanjut tentang diet, Anda dapat membaca artikel di bawah ini</p>
          <div className="d-flex flex-row card-container">
            <ArticleList />
          </div>
        </section>
    </>
    
  )
}

export default Home;