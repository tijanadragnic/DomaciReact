import "./write.css";

export default function Write() {
  return (
    <div className="write">
      
      <form className="writeForm">
        <div className="writeFormGroup">
         
          
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
          <input type="url"
          className="writeInput"
           placeholder="Photo url"
           type="text"
           autoFocus={true}/> 
            <input type="url"
          className="writeInput"
           placeholder="Author"
           type="text"
           autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}