import "./Color.css";

export default function Color({ color, onRemoveColorCard }) {
  return (
    <div
      className="color-card__container"
      style={{ backgroundColor: color.hex }}
    >
      <ul className="color-card__list">
        <li className="color-card__hex-code"> {color.hex}</li>
        <li className="color-card__role" style={{ color: color.contrastText }}>
          {color.role}
        </li>
        <li
          className="color-card__contrast"
          style={{ color: color.contrastText }}
        >
          contrast: {color.contrastText}{" "}
        </li>
        <li>
          <button
            onClick={() => {
              console.log("clicked id:", color.id);
              onRemoveColorCard(color.id);
            }}
          >
            delete me
          </button>
        </li>
      </ul>
    </div>
  );
}
