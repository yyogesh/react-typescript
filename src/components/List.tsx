import React from 'react'
import { IPeople } from '../models/state.interface'


type ListProp = {
    people: IPeople[]
}

const List: React.FC<ListProp> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person, index) => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.img} />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }
    return (
        <div>
            <ul>
                {renderList()}
            </ul>
        </div>
    )
}

export default List
