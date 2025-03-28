import { afereData } from "../data/afereData";
import AferaCard from "./AferaCard";
import "./AferaList.css";
import { useState } from "react";
import AferaModal from "./AferaModal";

const AferaList = () => {
  const [selectedAfera, setSelectedAfera] = useState<Afera | null>(null);

  return (
    <section className="afera-section">
      <h2>Afere</h2>
      <div className="afera-grid">
        {afereData.map((afera) => (
          <AferaCard
            key={afera.id}
            afera={afera}
            onClick={() => setSelectedAfera(afera)}
          />
        ))}
      </div>
      {selectedAfera && (
        <AferaModal
          afera={selectedAfera}
          onClose={() => setSelectedAfera(null)}
        />
      )}
    </section>
  );
};

export default AferaList;
