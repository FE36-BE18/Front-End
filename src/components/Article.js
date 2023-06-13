import { Container, Image } from 'react-bootstrap';
// import ArticleCard from './ArticleCard';



const Article = () => {
  return (
    <Container className="article">
      <Image className='img-fluid' src="https://img.freepik.com/free-vector/eating-variety-foods-concept-illustration_114360-11295.jpg?size=626&ext=jpg&ga=GA1.1.696200391.1683087027&semt=robertav1_2_sidr" fluid />

      <h1 className="h1-primary fw-semibold caption">Diet Sehat,
       <br/>Masa Depan cerah</h1>

      <p className="text-center">Saat ini terdapat berbagai jenis diet yang menjanjikan penurunan berat badan secara cepat. Namun, tidak semua jenis diet yang ampuh menurunkan berat badan aman bagi kesehatan Anda.
      </p>

      <p className="text-center2">D&lsquo;Care hadir untuk membantu dalam program diet sehat Anda</p>

      <div className='tengah-primary mb-1'>
      <h2>Rekomendasi Diet</h2>
      </div>
    </Container>
  );
};

export default Article;