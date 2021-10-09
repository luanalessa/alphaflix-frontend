import { useContext } from 'react-dom';
import { MovieContext } from '../providers/MovieProvider'

export const useMovies = () => {
    const context = useContext(MovieContext);

    return context;
}

