import React, { useState } from 'react';

function CardHeader(props) {
    return (
        <div className='Block'>
            <p>{props.record && props.record.name}</p>
            <p>{props.record && props.record.phone}</p>
        </div>
    )
}

function Card(props) {
    const click = () => {
        props.onSelect(props.record)
    }
    return (
        <div onClick={click} className='SubBlock'>
            <p>{props.record.name}</p>
            <p>{props.record.phone}</p>
        </div>
    )
}

function Result() {

    const data = [
        {
            name: 'Jon',
            phone: '+380123456789'
        },

        {
            name: 'Alice',
            phone: '+380123123123'
        },

        {
            name: 'Bob',
            phone: '+380123213543'
        }
    ]

    const [selectedCard, setSelectedCard] = useState();
    const showSelected = (card) => setSelectedCard(card);

    return (
        <React.Fragment>
            <CardHeader record={selectedCard}></CardHeader>
            <div className='Block'>
                {
                    data.map((record, index) =>
                        <Card
                            key={`div number-${index}`}
                            record={record}
                            onSelect={showSelected}
                        >
                        </Card>)
                }
            </div>

        </React.Fragment>

    );

}

export default Result;