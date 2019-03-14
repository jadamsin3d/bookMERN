import React from "react"

function Books(props) {
    return(
        <div className="bookItem">
            <img src={props.item.volumeInfo.imageLinks.thumbnail} />
            <h3>{props.item.volumeInfo.title}</h3>
            <p>{props.item.volumeInfo.authors}</p>
            <p>{props.item.volumeInfo.description}</p>
            <span><a type="button" href={props.item.saleInfo.buyLink}>Buy!</a></span>
            <button onClick={() => props.saveBook(props.item.id)}>Save</button>
        </div>
    )
}

export default Books;