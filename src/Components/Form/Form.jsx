import ColorInput from "../ColorInput/ColorInput";
import "./Form.css";
export default function Form({ onAddColorCard }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("handle submit activated");
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("data: ", data);
    onAddColorCard(data);
    //take the data from the forms
    //create a new array and add it as an object
    //add it as an argument to createColorCreation in App
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
        {/* <div className="form__field">
          <input
            id="hex"
            name="hex"
            type="text"
            placeholder="#GGGGGG"
            required
          />
          <input id="hex" name="hex" type="color" />
        </div> */}
        <label htmlFor="contrast"> Contrast text</label>
        <ColorInput
          id="contrast"
          name="contrastText"
          placeholder="#GAGAGA"
          defaultValue="#960023"
        />
        {/* <div className="form__field">
          <input
            id="contrast"
            name="contrastText"
            type="text"
            placeholder="#GGGGGG"
            required
          />
          <input id="contrast" name="contrastText" type="color" />
        </div> */}
        <div className="form__button-wrapper">
          <button className="form__button"> Add Color</button>
        </div>
      </div>
    </form>
  );
}
