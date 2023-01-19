import React from "react";
import estilos from './styles/Home.css';
import { useSearchParams } from "react-router-dom";
import { MediaScrollContainer } from "../components/MediaScrollContainer";
import { FormSearch } from "../components/FormSearch";
import { SearchView } from "./SearchView";
import { HeaderHome } from "../components/HeaderHome";
import { CollectionsScrollContainer } from "../components/CollectionsScrollContainer";




export function Home() {
    const [ query ] = useSearchParams();
    const valor = query.get('search')

    if(!valor) {
        return (
            <>
                < HeaderHome />
                <main>
                    < FormSearch />
                    < MediaScrollContainer 
                        mediaType={'movie'}
                        headerTitle={'Trending Movies'}
                        />
                    < MediaScrollContainer 
                        mediaType={'tv'}
                        headerTitle={'Top series'}
                        />
                    
                    < CollectionsScrollContainer />
                    
                </main>
            </>
        );
    } else{
        return (
            <>
                < HeaderHome />
                <main>
                    < FormSearch />
                    < SearchView />
                </main>
            </>
        );
    }
}