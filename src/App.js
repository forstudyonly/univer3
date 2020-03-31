import React, { Component } from "react";
import './App.css';
import $ from 'jquery';
import MovieCard from "./MovieCard";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.mainPage()
        }
        mainPage() {
            const urlString = "https://api.themoviedb.org/3/search/movie?api_key=2128891bdad7bfd6290c2b054c8767ee&language=en-US&page=1&include_adult=false&query=step"
            $.ajax({
                url: urlString,
                success: (showMovie) => {
                    const results = showMovie.results
                    var movieCards = []
                    results.forEach((movie) => {
                        movie.poster_src = "https://image.tmdb.org/t/p/w200" + movie.poster_path
                        const movieCard = <MovieCard key = {movie.id} movie={movie}/>
                        movieCards.push(movieCard)
                    })
                    this.setState({rows:movieCards})

                },
                error :(xhr,status,err) => {
                    console.error("Error data" + status + err)
                }
            })
        }
    filter(){
        const urlString = "https://api.themoviedb.org/3/movie/popular?api_key=2128891bdad7bfd6290c2b054c8767ee&language=en-US&page=1"
        $.ajax({
            url: urlString,
            success: (searchMovie) => {
                const results = searchMovie.results
                var movieCards = []
                    results.sort(function (a,b) {
                        if(a.popularity > b.popularity)
                        {
                            return 1;
                        }
                        if(a.popularity < b.popularity)
                        {
                            return -1;
                        }
                        return 0
                    })
                results.forEach((movie) => {
                    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
                    const movieCard = <MovieCard key = {movie.id} movie={movie}/>
                    movieCards.push(movieCard)
                })
                this.setState({rows:movieCards})
            },
            error :(xhr,status,err) => {
                console.error("Error data" + status + err)
            }
    })
    }
render(){
    return <div className="App">
       <input className="button" type="button" onClick= {this.mainPage.bind(this)} value = "popular movie filter"/>
        {this.state.rows}
    </div>
}
} export default App;

