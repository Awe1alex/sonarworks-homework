import useFetch from "../hooks/useFetch";
import classes from './TextComponents.module.css';

const TextComponent = ({name}) => {
    const { response, isLoading } = useFetch(name)

    return (
        <div className={classes.textContainer}>
            {isLoading && <div className={classes.loader}></div>}
            {!isLoading && response && 
                <>
                    <h1>{response.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: response.content}}></div>
                </>    
            }
        </div>
    )
}

export default TextComponent