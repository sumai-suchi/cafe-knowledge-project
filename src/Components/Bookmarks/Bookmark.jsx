import PropTypes from "prop-types";
import Mark from "../Mark/Mark";


const Bookmark = ({bookmark,Reading}) => {

    return (
        <div className="md:w-1/3 bg-gray-400">

            <div className="" >
                <p className="text-3xl font-bold m-4 text-center">Reading Time:{Reading}</p>
            </div>

            <h2 className="text-3xl font-bold m-4 text-center ">Bookmarks:{bookmark.length}</h2>
            {
                bookmark.map((mark,inx)=> <Mark key={inx} mark={mark}></Mark>)
            }
            
        </div>
    );
};

Bookmark.propTypes=
{
    bookmark:PropTypes.array.isRequired,
    Reading:PropTypes.number
}

export default Bookmark;