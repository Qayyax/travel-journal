import React from 'react'
import Card from './components/Card'
import Nav from './components/Nav'
import data from './data'

export default function App() {
    const dataArray = data.map(item => <Card key={item.title} item={item} />)
    return (
        <div>
            <Nav />
            <main>
            {dataArray}
            </main>
        </div>
    )
}