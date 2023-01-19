const Auth = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTkyNTE1OTk1MWY5MjFkMzkyMjBmZWNkZWE3OTQ4ZCIsInN1YiI6IjYzMDNjMjQ0ZmI1Mjk5MDA3ZDY2YzY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HNABgmkHGz8FmdTboWKZdlsdyZ3N7zL8DTJ9Vr4iaE4';
const Auth2 = '0e925159951f921d39220fecdea7948d';
const URL_API = 'https://api.themoviedb.org/3/';

export function getCollections( collectionId, setter){
    fetch(`${URL_API}/collection/${collectionId}`, {
        headers: {
            Authorization: `Bearer ${Auth}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
    }).then(response => response.json())
        .then(data => {
            setter(data)
        })
}