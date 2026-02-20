import siteConfig from '../data/siteConfig';
import testimonials from '../data/testimonials';
import services from '../data/services';

function Home() {
  return (
    <>
      <section className='home-hero'>
        <div className='hero-text'>
          <h1>{siteConfig.siteName}</h1>
          <p>{siteConfig.tagline}</p>
          <p>
            Professional, reliable home maintenance services delivered by
            trained experts you can trust.
          </p>
          <a href='/contact' className='cta-btn'>
            Get a Free Consultation
          </a>
        </div>
      </section>

      <section className='highlights'>
        <h2>Why Choose Us</h2>
        <div className='highlight-grid'>
          <div>
            <h3>Trusted Professionals</h3>
            <p>Experienced technicians with quality workmanship.</p>
          </div>
          <div>
            <h3>On-Time Service</h3>
            <p>We respect your time and deliver as promised.</p>
          </div>
          <div>
            <h3>Transparent Pricing</h3>
            <p>No hidden costs. Clear and honest pricing.</p>
          </div>
        </div>
      </section>

      <section className='testimonials'>
        <h2>What Our Customers Say</h2>
        <div className='testimonial-grid'>
          {testimonials.map((item) => (
            <div key={item.id} className='testimonial-card'>
              <p>“{item.feedback}”</p>
              <span>- {item.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className='services-preview'>
        <h2>Our Services</h2>
        <div className='services-grid'>
          {services.map((service) => (
            <div key={service.id} className='service-card'>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
