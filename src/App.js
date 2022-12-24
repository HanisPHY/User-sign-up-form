import logo from './logo.svg';
import './App.css';
import { useState } from "react";

const status = ['freshman', 'sophomore', 'junior', 'senior'];

function App(){

  const [name, setName] = useState('your name');
  const [age, setAge] = useState('your age');
  const [fresh, setFresh] = useState(0);
  const [sopho, setSopho] = useState(0);
  const [junior, setJunior] = useState(0);
  const [senior, setSenior] = useState(0);
  const [isSubmit, setSubmit] = useState(false);
  const [list, setList] = useState([]);
  let year = 0;
  if(fresh != 0)
    year = fresh;
  if(sopho != 0)
    year = sopho;
  if(junior != 0)
    year = junior;
  if(senior != 0)
    year = senior;

  /*const listItems = list.map((list) => {
    return ({list})
  })*/
  
  return(
    <div>
      {
        isSubmit
        ? 
        <div className="after">
          <h1>You've signed up!</h1>
          <button className="submit" type="button"
            onClick={() => setSubmit(false)}>Sign up for another account</button>
        </div>

        :
        <div>
          <form>
            {/* name and age */}
            <label>Name:</label><br></br>
            <input type="text" name="name" value={name} 
              onChange={(event) => setName(event.target.value)}/><br></br>
    
            <label>Age:</label><br></br>
            <input type="text" name="age" value={age}
              onChange={(event) => setAge(event.target.value)}/>
    
            {/* status */}
            <div className="status">
              <div>
                Your status:
              </div>
    
              <input type="radio" name="status1" value={fresh}
                onChange={(event) => setFresh(event.target.value)}/>
              <label>freshman</label>
              <br></br>
    
              <input type="radio" name="status1" value={sopho}
                onChange={(event) => setSopho(event.target.value)}/>
              <label>sophomore</label>
              <br></br>
    
              <input type="radio" name="status1" value={junior}
                onChange={(event) => setJunior(event.target.value)}/>
              <label>junior</label>
              <br></br>
    
              <input type="radio" name="status1" value={senior}
                onChange={(event) => setSenior(event.target.value)}/>
              <label>senior</label>
              <br></br>
              <button type="button" value="submit" 
                onClick={() => {
                  {
                    setSubmit(true); 
                    setList([...list,
                      {Name: name, Age:age, Year: year}]
                    )
                  }
                }}
              >submit</button>
              
            </div>
          </form>
        </div>
      }

      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Year</th>
        </tr>
        <tr>
          <td>{name}</td>
          <td>{age}</td>
          <td>{year}</td>
        </tr>
      </table>
    </div>
  )
}

export default App;
