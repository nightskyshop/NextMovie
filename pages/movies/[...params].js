import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../components/Seo";

export default function Detail() {
    const router = useRouter();
    const [title, id] = router.query.params;
    const [movie, setMovie] = useState();

    const getMovie = async () => {
        const data = await (
            await fetch(
                `/api/movies/${id}`
            )
        ).json();
        console.log(data);
        setMovie(data);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className="container">
            <Seo title={title} />
            <h1>{title || <h4>Title Loading...</h4>}</h1>
            {!movie && <h4>Movie Detail Loading...</h4>}
            {movie ? (
                <div className="movie">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                    <p>{movie.overview}</p>
                </div>
            ) : null}
            <style jsx>{`
                .container {
                    max-width: 600px;
                    margin-right: auto;
                    margin-left: auto;
                    padding: 0 1em;
                }
                .movie img {
                    display: block;
                    width: 100%;
                    max-width: 500px;
                    margin-right: auto;
                    margin-left: auto;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie h4 {
                    font-size: 1.2rem;
                }
                .movie p {
                    font-size: 1rem;
                }
            `}</style>
        </div>
    );
}