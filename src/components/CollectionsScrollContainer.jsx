import React from "react";
import { CollectionContainer } from "./CollectionContainer";
import estilos from './styles/CollectionsScrollContainer.css';

export function CollectionsScrollContainer() {
    return (
        <section className="collections-container">
            <h2 className="collections-title">The best collections</h2>
            <div className="trending-scrollContainer">
                < CollectionContainer
                    collectionId={1241} />

                < CollectionContainer
                    collectionId={264 } />

                < CollectionContainer
                    collectionId={230 } />

                < CollectionContainer
                    collectionId={10 } />

                < CollectionContainer
                    collectionId={948485 } />

                < CollectionContainer
                    collectionId={556 } />
            </div>
        </section>
    );
}