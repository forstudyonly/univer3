import React from "react";

class MovieCard extends React.Component{
    showMovie(){
        const url ="https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render(){
        return <table>
            <tbody>
            <tr>
                <td>
                    <img width="100" alt="poster" src = {this.props.movie.poster_src}/>
                </td>
                <td>
                    <h3>{this.props.movie.title}</h3>
                    <p>{this.props.movie.overview}</p>
                    <input className = "button" type = "button" onClick = {this.showMovie.bind(this)} value="View"/>
                </td>
            </tr>
            </tbody>
        </table>
    }
}

export default MovieCard