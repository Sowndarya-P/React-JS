import './App.css'
function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [submittedData, setSubmittedData] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = { name, email, password}
    setSubmittedData(formData);
    setName("");
    setEmail("");
    setPassword("");

  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <lable>Name</lable>
        <input type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/>

        <lable>email</lable>
        <input type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>

        <lable>password</lable>
        <input type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <p><strong>Name:</strong>{submittedData.name}</p>
          <p><strong>Email</strong>{submittedData.email}</p>
          <p><strong>Password:</strong>{submittedData.password}</p>
      </div>
      )
      }
    </div>
  )

}

export default App
  
