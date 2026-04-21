export default function Form() {
  return (
    <form action="submit" className="form__container">
      <label htmlFor="role">Role</label>
      <input name="role" type="text" placeholder="Kukareku" />
      <label htmlFor="hex"> Hex</label>
      <input name="hex" type="text" placeholder="GGGGGG" />
      <input name="hex" type="color" />

      <label htmlFor="contrast"> Contrast text</label>
      <input name="contrast" type="text" placeholder="GGGGGG" />
      <input name="contrast" type="color" />
      <button> Add Color</button>
    </form>
  );
}
