import React from "react"
import ReactDom from "react-dom"
import Card from "./Card"
import contacts from "../contacts"
function createCard(contact){
return(
  <Card 
    key={contact.id}
    name={contact.name}
    imgURL={contact.img}
    Phone={contact.phone}
    Email={contact.email}
  />
)
}
function App() {
    return (
      <div>
          <h1 className="heading">My Contacts</h1>
          {contacts.map(createCard)}
        {/* <Card
        name={contact[0].name}
        imgURL={contact[0].img}
        Phone={contact[0].phone}
        Email={contact[0].email}
         />
        <Card
        name={contact[1].name}
        imgURL={contact[1].img}
        Phone={contact[1].phone}
        Email={contact[1].email}
         />
         <Card
        name={contact[2].name}
        imgURL={contact[2].img}
        Phone={contact[2].phone}
        Email={contact[2].email}
         /> */}
      </div>
    );
  }



export default App;