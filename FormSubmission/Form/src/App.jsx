import { useState } from "react";
import "./App.css";
function App() {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    gender: "",
    subject: "",
  });
  const handleChange = (e) => {
    setValue({ ...value, [e.target.value]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="appcontainer">
      <h1>React Form</h1>
      <form>
        <label> First Name:</label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter first name"
          onChange={handleChange}
          required
        />
        <br />
        <label>Last Name :</label>
        <input
          type="text"
          name="lastname"
          placeholder="Enter Last name"
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" placeholder="Enter Email" required />
        <br />
        <label htmlFor="mobile">Cantact:</label>
        <input
          type="text"
          name="MobileNumber"
          placeholder="Enter Mobile Number"
          required
        />
        <label htmlFor="radio">Gender </label>
        <input type="radio" name="gender" id="male" value="Male" /> Male
        <input type="radio" name="gender" id="female" value="Female" /> Female
        <input type="radio" name="gender" id="other" value="other" /> Other
        <br />
        <label htmlFor="checkbox">Select Your Subject:</label>
        <input type="checkbox" name="lang" id="Math" /> Math
        <input type="checkbox" name="lang" id="English" /> English
        <input type="Checkbox" name="lang" id="physics" /> Physics
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
