import "./StaJeMoglo.css";

const totalSum = 1048000000; // primer: vrednost proneverenog novca iz odabranih afera

const calculations = [
  { naziv: "bolnica", cena: 2000000, ikonica: "🏥" },
  { naziv: "škola", cena: 700000, ikonica: "🏫" },
  { naziv: "vrtić", cena: 400000, ikonica: "🚸" },
  { naziv: " km vodovoda", cena: 50000, ikonica: "🚰" },
  { naziv: " km puta", cena: 200000, ikonica: "🛣️" },
];

const StaJeMoglo = () => {
  return (
    <section className="sta-je-moglo-section">
      <h2>💡 Šta smo mogli sa tim novcem?</h2>
      <p>
        Umesto što je kroz gore pomenute afere pronevereno preko{" "}
        <strong>{totalSum.toLocaleString()} €</strong>, mogli smo izgraditi:
      </p>
      <div className="moglo-grid">
        {calculations.map((item, i) => (
          <div key={i} className="moglo-card">
            <span className="ikonica">{item.ikonica}</span>
            <h3>
              {Math.floor(totalSum / item.cena)} {item.naziv}
              {Math.floor(totalSum / item.cena) > 1 ? "" : ""}
            </h3>
            <p>Prosečna cena: {item.cena.toLocaleString("sr-RS")} €</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaJeMoglo;
