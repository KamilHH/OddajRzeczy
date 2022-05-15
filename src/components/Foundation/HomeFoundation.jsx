import React, {useEffect, useState} from 'react';
import Decoration from '../../assets/Decoration.svg'
import FoundationButton from "./FoundationButton";
import {foundations, locals, organizations} from "./data";
import Posts from "./Posts";
import Pagination from "./Pagination";

const HomeFoundation = () => {
    const [selected, setSelected] = useState("foundations")
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(3)

//list for buttons
    const list = [
        {
            id: 'foundations',
            title: 'Fundacjom'
        },
        {
            id: 'locals',
            title: 'Lokalnym zbiórkom'
        },
        {
            id: 'organizations',
            title: 'Organizacjom pozarządowym'
        },
    ];
//change data on button click
    useEffect(() => {
        switch (selected) {
            case "foundations":
                setData(foundations);
                break;
            case "locals":
                setData(locals);
                break;
            case "organizations":
                setData(organizations);
                break;
            default:
                setData(foundations)
        }
    }, [selected]);

    //current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = (number) => setCurrentPage(number)

    return (
        <div className="foundation" id="foundation">
            <h1 className="foundation__heading">Komu pomagamy ?</h1>
            <img src={Decoration} alt="" className="foundation__decor"/>
            <div className="foundation__button-container">
                {list.map(e => {
                    return (
                        <FoundationButton
                            key={e.id}
                            id={e.id}
                            title={e.title}
                            active={selected === e.id}
                            setSelected={setSelected}
                            setCurrentPage={setCurrentPage}
                        />
                    )
                })}
            </div>
            <p className="foundation__text">
                W naszej bazie znajdziesz listę zweryfikowanych
                fundacji, z którymi współpracujemy. Możesz sprawdzić czym się
                zajmują, komu pomagają i czego potrzebują.</p>
            <Posts data={currentPosts}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} />
        </div>
    );
};

export default HomeFoundation;