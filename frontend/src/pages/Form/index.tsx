import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function Form() {

    const params = useParams();

    return (
        <FormCard movieId ={`${params.movieId}`}/>
    )

    //Constante usada como dados mocados(para teste)
    /* const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    }; */
}

export default Form;