const testimonials = [
  "A melhor compra que já fiz.",
  "Viajar ficou muito mais prazeroso.",
  "Moto linda, confortável e potente.",
  "Recebo elogios em todos os lugares.",
  "Valeu cada centavo investido."
];

export function Testimonials() {
  return (
    <section className="testimonials">

      <h2>O que nossos clientes dizem</h2>

      <div className="slider">

        <div className="track">

          {[...testimonials, ...testimonials].map((item, index) => (
            <div className="card" key={index}>
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
