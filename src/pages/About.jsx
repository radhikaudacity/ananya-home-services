import plumber from '../assets/plumber.webp';
function About() {
  return (
    <section className='page'>
      <h2>About Us</h2>
      <div className='about-layout'>
        <div className='about-image'>
          <img src={plumber} loading='lazy' />
        </div>
        <div className='about-text'>
          <p>
            Ananya Home Services is committed to providing reliable,
            high-quality home maintenance solutions to homeowners in Chennai.
            Our mission is to make your home safe, comfortable, and worry-free.
          </p>
          <p>
            We are a team of experienced technicians specializing in electrical
            work, plumbing, painting, and general home maintenance. Each member
            of our team is trained, professional, and customer-focused, ensuring
            every job is completed with care and precision.
          </p>
          <p>
            At Ananya Home Services, we believe in transparency and clear
            communication. From the first consultation to the completion of
            work, we ensure you know exactly what to expect. Our goal is to
            build lasting relationships with our customers by delivering
            exceptional service every time.
          </p>
          <p>
            Whether it’s a small repair or a full renovation, our friendly team
            is ready to help. Choose Ananya Home Services and experience peace
            of mind with every project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
