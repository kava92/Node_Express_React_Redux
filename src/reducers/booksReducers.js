"use strict"

//BOOKS REDUCERS
export function booksReducers(state = {books:[]}, action){
    switch(action.type){
        case "POST_BOOK" :
        // let books = state.books.concat(action.payload);
        // return {books};
        return {books:[...state.books, ...action.payload]}
        break;
        case "DELETE_BOOK" :
        //Create the copy of the curremt array of books
        const currentBookToDelete = [...state.books]
        //Determine at which index in books array is the book to be deleted
        const indexToDelete = currentBookToDelete.findIndex(
            function(book){
                return book.id === action.payload.id;
            }
        )
        //Use slice to remove the book at the specifed index
        return {books: [...currentBookToDelete.slice(0, indexToDelete),
        ...currentBookToDelete.slice(indexToDelete + 1)]}
        break;
        case "UPDATE_BOOK":
        //Create a copy of the current array of books
        const currentBookToUpdate = [...state.books]
        //Determinare at which index in books array is the book to be deleted
        const indextToUpdate = currentBookToUpdate.findIndex(
            function(book){
                return book.id === action.payload.id;
            }
        )
        //Create a new book object with the new valuse and with the same array index of the item we want to replace.
        //To achice this we will use ...spread but we could use concat methods too
        const newBookToUpdate = {
            ...currentBookToUpdate[indextToUpdate],
            title: action.payload.title
        }
        //This Log has the purpose to show you how newBookToUpdate looks like
        console.log("what is it newBookToUpdate", newBookToUpdate);
        //use slice to remoce the book at the specified index, replace with the new object and concatenate witht he rest of items in the array
        return {books: [...currentBookToUpdate.slice(0, indextToUpdate), newBookToUpdate,
                ...currentBookToUpdate.slice(indextToUpdate+1 )]}
        break;
    }
    return state
}