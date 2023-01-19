import estilos from './styles/FormSearch.css';
import icon from '../assets/icons/searchIcon.svg';
import { useSearchParams } from "react-router-dom";


export function FormSearch() {
    const [searchParams, setSearchParams] = useSearchParams();
    const inputValue = searchParams.get('search') ?? '';
    
    const onSearchForm = (event) => {
        event.preventDefault()
    }
    
    const onChangeInput = (event) => {
        setSearchParams({ search: event.target.value });
    }

    return (
        <form 
            onSubmit={onSearchForm}
            className="inputSearchContainer">
                <input 
                    className="inputSearch" 
                    type="text"
                    value={inputValue} 
                    placeholder="search movies or series" 
                    onChange={onChangeInput}/>
                <button className="btn-search">
                    <img className="searchIcon" src={icon} alt="" />
                </button>
        </form>
    );
}