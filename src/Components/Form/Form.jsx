import ColorInput from "../ColorInput/ColorInput";
import "./Form.css";
export default function Form({ onSubmitColor, buttonName }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("data: ", data);

    onSubmitColor(data);
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit} action="submit" className="form">
      <div className="form__fields">
        <label htmlFor="role">Role</label>
        <div className="form__field">
          <input
            id="role"
            name="role"
            type="text"
            placeholder="Kukareku"
            defaultValue="superduper role"
            required
          />
        </div>
        <label htmlFor="hex"> Hex</label>
        <ColorInput
          id="hex"
          name="hex"
          placeholder="#GUGUGU"
          defaultValue="#FFC5D3"
        />

        <label htmlFor="contrast"> Contrast text</label>
        <ColorInput
          id="contrast"
          name="contrastText"
          placeholder="#GAGAGA"
          defaultValue="#960023"
        />

        <div className="form__button-wrapper">
          <button className="form__button"> {buttonName}</button>
        </div>
      </div>
    </form>
  );
}
