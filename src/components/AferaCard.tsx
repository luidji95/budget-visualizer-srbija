import { Afera } from "../data/afereData";
import "./AferaCard.css";

const AferaCard = ({
  afera,
  onClick,
}: {
  afera: Afera;
  onClick: () => void;
}) => {
  return (
    <div className="afera-card">
      <div className="afera-header">
        <span className="afera-icon">{afera.ikonica}</span>
        <h3 className="afera-title">{afera.naziv}</h3>
        <span className="afera-godina">{afera.godina}</span>
      </div>
      <p className="afera-opis">{afera.opis}</p>
      <div className="afera-actions">
        <span className="afera-kategorija">{afera.kategorija}</span>
        <button className="afera-dugme" onClick={onClick}>
          Saznaj više
        </button>
      </div>
    </div>
  );
};

export default AferaCard;
