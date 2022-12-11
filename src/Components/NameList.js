import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ["Ravi", "Kiran", "Reddy"]
    // return (
    //     <div>
    //         <h3>Using maps</h3>
    //         {/* <h5>{names[0]}</h5>
    //     <h5>{names[1]}</h5>
    //     <h5>{names[2]}</h5> */}

    //         {
    //             names.map(item => <h5>{item}</h5>)
    //         }
    //     </div>
    // )



    // const names = ["Burra", "Vamshi", "Goud"]
    // const namesList = names.map(itm => <h5>{itm}</h5>)
    // return <div key={1}>{namesList}</div>

    const persons = [
        {
            id:1,
            name: "Ravikiran",
            age:21,
            role: "FSD"
        },
        {
            id:2,
            name: "Vamshi",
            age:21,
            role: "MME"
        },
        {
            id:3,
            name: "Nikhil",
            age:21,
            role: "Student"
        }
    ]
    //rendered in person.js file
    // const personsList = persons.map(person=>(
    //     <div>{person.name} is {person.age} old & he is {person.role}</div>
    // ))

    const personList = persons.map(person => (
        <Person key={person.id} person = {person}/>
    ))
    return <div>{personList}</div>
}

export default NameList