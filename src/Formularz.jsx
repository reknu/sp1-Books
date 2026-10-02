import { useState } from 'react'
import React,{useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.css';



function Formularz(){

    const bookTitle = useRef(null)
    const bookAuthor = useRef(null)
    const rodzajBook = useRef(null)

    const handleSubmit = (event) =>{
        event.preventDefault()

        console.log("tytul: " + bookTitle.current.value + ", autor: " + bookAuthor.current.value + ", gatunek: " + rodzajBook.current.value)
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label htmlFor="bookTitle">Tytuł książki</label>
                    <input ref={bookTitle} type="text" class="form-control" id="bookTitle" />
                </div>
                <div class="form-group">
                    <label htmlFor="bookAuthor">Autor książki</label>
                    <input ref={bookAuthor} type="text" class="form-control" id="bookAuthor" />
                </div>
                <div class="form-group">
                    <label htmlFor="bookType">Gatunek książki</label>
                    <select  ref={rodzajBook} id="rodzajBook" class="form-select">
                        <option value=""></option>
                        <option value="1">Powieść</option>
                        <option value="2">Kryminał</option>
                        <option value="3">Fantastyka</option>
                        <option value="4">Biografia</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Dodaj</button>
            </form>
        </div>
        
    )
    
}

export default Formularz