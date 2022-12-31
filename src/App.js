import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

const status = ['freshman', 'sophomore', 'junior', 'senior'];

function App(){

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [year, setYear] = useState('');
  const [isSubmit, setSubmit] = useState(false);
  const [id, setId] = useState(0);
  const [form, setForm] = useState([{}]);
  const [isAdmin, setAdmin] = useState(false);
  
  function ShowForm(props) {
    return (
      <>
        {props.user.name} + {props.user.age} + {props.user.year}
      </>
    )
  }
  
  
  function ShowForm2(props) {
    return (
      <>
        <td></td>
        <td>{props.user.id}</td>
        <td>{props.user.name}</td>
        <td>{props.user.age}</td>
        <td>{props.user.year}</td>
        <td><button className='delBtn'
              onClick={() => handleDelete(props.user.id)}>Remove</button></td>
      </>
    )
  }

  /*
  function AdminMode(name, age) {
    if ((name === "admin") || (age === "123456")) {
      setAdmin(true);
    }
  }
  */

  /*
  function AdminMode(props) {
    if ((props.name === "admin") || (props.age === "123456")) {
      setAdmin(true);
    }
  }
  */

  
  const AdminMode = (name, age) => {
    if ((name === "admin") && (age === "123456") && (year === "sopho")) {
      alert("administration mode");
      setAdmin(true);
    }
    else {
      HandleSubmit();
    }
  }
  
  
  const HandleSubmit = () => (
    setSubmit(true),
    setForm( () => [
      ...form,
      {
        id: id,
        name: name,
        age: age,
        year: year
      }
      
      /*
      form.concat(
        {
          id: id,
          name: name,
          age: age,
          year: year
        }
      )
      */
    ]),
    setId(id+1)
  )

  const handleDelete = (Id) => {
    const newForm = form.filter((item) => (item.id != Id));

    setForm(newForm);
  }

  return(
    <div>
      {
        isSubmit
        ? 
        <div className="after">
          <div className='subContainer'>
            {/* form is submitted */}
            <h1>You've signed up!</h1>
            <button className="submit" type="button"
              onClick={() => setSubmit(false)}>Sign up for another account</button>
          </div>
        </div>

        :
        <div>

          <form>
            <div className='formContainer'>
              {/* name and age */}
              <label>Name:</label><br></br>
              <input type="text" name="name" placeholder='Your name' 
                onChange={(event) => setName(event.target.value)}/><br></br>
      
              <label>Age:</label><br></br>
              <input type="text" name="age" placeholder='Your age'
                onChange={(event) => setAge(event.target.value)}/>
      
              {/* status */}
              <div className="status">
                <div>
                  Your status:
                </div>
      
                <input type="radio" name="status1" value="fresh"
                  onChange={(event) => setYear(event.target.value)}/>
                <label>freshman</label>
                <br></br>
      
                <input type="radio" name="status1" value="sopho"
                  onChange={(event) => setYear(event.target.value)}/>
                <label>sophomore</label>
                <br></br>
      
                <input type="radio" name="status1" value="junior"
                  onChange={(event) => setYear(event.target.value)}/>
                <label>junior</label>
                <br></br>
      
                <input type="radio" name="status1" value="senior"
                  onChange={(event) => setYear(event.target.value)}/>
                <label>senior</label>
                <br></br>
                <button type="button" value="submit" 
                  onClick={() => {
                    return (
                      AdminMode(name, age, year)
                      /*<AdminMode name={name} age={age}/>*/
                    )
                  }}
                >submit</button>
                
              </div>
            </div>
          </form>

        </div>
      }


      {
        isAdmin
        ?
        <div className='adminMode'>
          {/* Show the table below the form */}
          <div className='adminRmd'>
            <p>Administration mode.</p>
          </div>
          
          <div className='tableContainer'>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Year</th>
                  
                  <th>choices</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>preview</td>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{year}</td>
                  <td><button>Remove</button></td>
                </tr>

                {form.map((user, index) => 
                  (<tr key = {index}><ShowForm2 key = {index} user={user}/></tr>))
                }
                
              </tbody>
            </table>
          </div>

          <br></br>

          <div className='adminExitBtn'>
            <button className='exitAdmin'
              onClick={() => (setAdmin(false), setSubmit(false))}>Exit</button>
          </div>
        </div>        

        :
        <></>
      }

      {/*
      <ul>
        <li>this is the list</li>
        {form.map((user, index) => 
          {
            return (
            <li key={index}>{user.name} - {user.age}</li>)
          })
        }
        <li>end of the list</li>
      </ul>*/}

      <ul className='hidden'>
        <li>this is the list</li>
        {form.map((user, index) => 
          (<li key = {index}><ShowForm user={user}/></li>))
        }
        <li>end of the list</li>
      </ul>

      {/*
      <p>
        paragraph
        {form.map((user) => (
          {age: user.age, name: user.name}
        ))}
        ---
      </p>
      */}
      
      {/*
      <ul>
        <li>{form.age} + {form.name} + {form.year}</li>
        {<ShowForm age = {form.age} name = {form.name} year = {form.year} key = {form.id}/>}
      </ul>
      */}

      
      <table className='hidden'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Age</th>
            <th>Year</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>preview</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{year}</td>
            <td>{id}</td>
          </tr>
          
          {form.map((user, index) => 
            (<ShowForm2 key = {index} user={user}/>))
          }
          
        </tbody>
      </table>
      
    </div>
  )
}

export default App;
