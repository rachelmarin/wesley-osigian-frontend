import React, { Component } from 'react';

class BookList extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        fetch('/api/v1/books/')
            .then(resp => resp.json())
            .then(data => {
                this.setState({book: data})
            })
    }

    render() {
        const books = this.state.books.map((book, index) => 
            <BookCard
                key={index} 
                description={book.description}
                name={book.name}
                imageUrl={book['image-url']} 
            />
        )

        return (
            <div>{books}</div>
        )
    }
}
