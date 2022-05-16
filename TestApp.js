import React, {useState} from 'react'
import CreateTest from './CreateTest'
import TestForm from './TestForm'
import data from './data'

export default function TestApp(){

    const [newSearch, setNewSearch] = useState("")

    const search = (event) => {
        setNewSearch(event.target.value.toLowerCase()) 
    }

    const filteredData = data.filter((el) => {
        if (newSearch === ''){
        return el;
        }
        else if (el.name.toLowerCase().includes(newSearch))
        {
            return el;
        }
        else{
            for(let i of el.categories){
                if(i.toLowerCase().includes(newSearch)){
                    return el;
                }
            }
        }
    })




    return(
      <div className="test-app">
          <div className="container">
            <CreateTest newSearch={search}/>
            <div className="">
                {filteredData.map((item) => {
                    return (
                        <TestForm 
                        key = {item.id}
                        titele = {item.name}
                        time = {item.duration}
                        amount = {item.questions.length}
                        subject = {item.categories}
                        />
                    );
                })}
            </div>
          </div>
      </div>
    )
}