import services from '../data/services';

function Services() {
  return (
    <section className='page'>
      <p>
        We offer a range of professional home maintenance services designed to
        keep your home safe and comfortable.
      </p>

      <h2>Our Services</h2>
      {services.map((service) => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Services;
