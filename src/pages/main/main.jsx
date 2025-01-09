import { useEffect, useState } from 'react';
import { PeopleElement } from '../../components/peopleElememt/peopleElememt';
import { getUsers } from '../../components/request/request-users.js';
import './main.scss';

// Function to trim text to five words//
const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
        return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
};
// finally //

export const Main = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoadingPromo] = useState(false);
    const [error, setError] = useState({
        status: false,
        message: "",
    });

// obtaining user data with preloader
    useEffect(() => {
        setIsLoadingPromo(true);
        getUsers()
            .then(({ data }) => {
                setProducts(data.map((elem) => ({ ...elem })));
            })
            .catch((error) =>
                setError({ status: true, message: Error(error).message })
            )
            .finally(() => setIsLoadingPromo(false));sdfsdfs
    }, []);

    console.log(products);

    if (isLoading) {
        return <div className="loading__container">loading...</div>;
    }
    if (error.status) {
        return <div className="loading__container">{error.message}</div>;
    }
// finally //

    return (
        <div className="mainContainer">
            <div className="mainContainer__left">
                <div className="mainContainer__left__search">
                    <input className="mainContainer__left__search-input" placeholder='Search'></input>
                    <div className="mainContainer__left__search-magnifier"></div>
                </div>

                <div className="mainContainer__left__groups">
                    <div className="mainContainer__left__groups-header">Groups</div>
                    <PeopleElement
                        name={'Friends Forever'}
                        date={'Today, 9.52pm'}
                        lastText={'Hahahahah!'}
                    />
                </div>

                <div className="mainContainer__left__people">
                    <div className="mainContainer__left__people-header">People</div>
                    <div className='mainContainer__left__people__scrollElement'>
                        {products.map((product) => {
                            const lastPost = product.posts[product.posts.length - 1];
                            const truncatedLastText = truncateText(lastPost.sentence, 5);
                            return (
                                <PeopleElement
                                    {...product}
                                    key={product.id}
                                    lastText={truncatedLastText}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="mainContainer__right"></div>
        </div>
    );
}
