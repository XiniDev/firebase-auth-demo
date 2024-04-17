import { useState } from 'react'
import Auth from '@components/Auth';
import './App.css'

function App() {
    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Auth/>
        </div>
    );
}

export default App
