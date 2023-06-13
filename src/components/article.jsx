import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
<<<<<<< HEAD
import ArticleCard from './articleCard';

=======
import ArticleCard from './articlecard';


>>>>>>> 392ba0ab350017e70533b2f49be6480cc250ba14
const Article = () => {
  return (
    <Container className="article">
      <Row>
        <Col>
<<<<<<< HEAD
          <div className='d-flex justify-content-center'>
            <Image className='img' src="https://img.freepik.com/free-vector/eating-variety-foods-concept-illustration_114360-11295.jpg?size=626&ext=jpg&ga=GA1.1.696200391.1683087027&semt=robertav1_2_sidr" fluid />
          </div>
        </Col>
      </Row>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1 className="text-center h1-primary fw-semibold fs-1 caption">Diet Sehat,
        <br/>Masa Depan cerah</h1>
        <p className="text-center">
          Saat ini terdapat berbagai jenis diet yang menjanjikan penurunan berat badan secara cepat. Namun, tidak semua jenis diet yang ampuh menurunkan berat badan aman bagi kesehatan Anda.
        </p>
        <p className="text-center2">D'Care hadir untuk membantu dalam program diet sehat Anda</p>
        <div class='tengah-primary mb-1'>
          <h2>Rekomendasi Diet</h2>
        </div>
        <div className='d-flex flex-row'>
          <ArticleCard />
        </div>
        
      </div>
=======
          <Image className='img-fluid' src="https://img.freepik.com/free-vector/eating-variety-foods-concept-illustration_114360-11295.jpg?size=626&ext=jpg&ga=GA1.1.696200391.1683087027&semt=robertav1_2_sidr" fluid />
        </Col>
      </Row>
      <h1 className="h1-primary fw-semibold caption">Diet Sehat,
       <br/>Masa Depan cerah</h1>
      <p className="text-center">Saat ini terdapat berbagai jenis diet yang menjanjikan penurunan berat badan secara cepat. Namun, tidak semua jenis diet yang ampuh menurunkan berat badan aman bagi kesehatan Anda.
      </p>
      <p className="text-center2">D'Care hadir untuk membantu dalam program diet sehat Anda</p>
      <div class='tengah-primary mb-1'>
      <h2>Rekomendasi Diet</h2>
      </div>
      <ArticleCard/>
>>>>>>> 392ba0ab350017e70533b2f49be6480cc250ba14
    </Container>
    
  );
};

export default Article;