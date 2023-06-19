export default function Form({ formTitle }) {
  return (
    <div className='form-container'>
      <h3 className='form-header'>{formTitle}</h3>
      <form className='form'>
        <label htmlFor='title'>Idea Title</label>
        <input type='text' id='title' />

        <label htmlFor='description'>Idea Description</label>
        <textarea
          name='description'
          id='description'
          cols='30'
          rows='5'
        ></textarea>
		<input type="submit" value="Create" className="btn" />
      </form>
    </div>
  );
}
