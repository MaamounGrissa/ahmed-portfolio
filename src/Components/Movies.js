import React from 'react';
import axios from 'axios';

function Movies() {
    const [movies, setMovies] = React.useState([]);
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        axios.get('https://online-movie-database.p.rapidapi.com/auto-complete', {
            params: {q: search},
            headers: {
                'X-RapidAPI-Key': 'b8630dc2bamsh169615709508bcbp162695jsn727caf34ef0f',
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        }).then(function (response) {
            setMovies(response.data.d);
        }).catch(function (error) {
            console.error(error);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    console.log(movies)

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }

  return (
    <div> 
        <div>
            <input className='search-input' 
                    type="text" 
                    placeholder="Search" 
                    value={search} 
                    onChange={handleChangeSearch} 
            />
        </div>
        <h2>Movies :</h2>
        <ul>
    {
        movies?.map((product) => {
            return (
                <li key={product.id}>
                    <h3>{product.l}</h3>
                    <p>{product.s}</p>
                    <img className='product-image' src={product.i?.imageUrl} alt={product.l} />
                </li>
            )
        })
    }
        </ul>
    </div>
  )
}

export default Movies