import React,{useState} from 'react';

const App=()=>{
  const [fullname,SetFullname]=useState({
    fname:"",
    lname: "",
    email:"",
  });

  
  
 
 const inputEvent=(event)=>{
    SetFullname(event.target.value);

    const value=event.target.value;
    const name=event.target.name;
    SetFullname((preValue)=>{
      if(name==='fName'){
        return {
          fname:value,
          lname:preValue.lname,
          email:preValue.email,
        } 
      }
      if(name==='lName'){+
        return {
          fname:preValue.fname,
          lname:value,
          email:preValue.email,
        } 
      }
      if(name==='eMail'){
        return {
          fname:preValue.fname,
          lname:preValue.lname,
          email:value,
        } 
      }
    })

 }

 const onsubmit=(event)=>{
   event.preventDefault();
  //  alert("form submitted"); 
  
 }
  return (
    <>
    <form onSubmit={onsubmit}>
      <h1>{`Hello ${fullname.fname} ${fullname.lname} ${fullname.email}`}</h1>
      <input type="text"
        placeholder="first name"
        name='fName'
        onChange={inputEvent}
        value={fullname.fname}
      />
      <br/>
      <input type="text"
        placeholder="last"
        name='lName'
        onChange={inputEvent}
        value={fullname.lname}
      />
      <br/>
      <input type="text"
        placeholder="email"
        name='eMail'
        onChange={inputEvent}
        value={fullname.email}
      />
      <br/>
      <button >click</button>
      </form>
    </>
  );
}
export default App;