
import PropTypes from 'prop-types';
const Mark = ({mark}) => {

    const {title}=mark
    return (
        <div className='bg-slate-300 p-4 m-4 rounded-xl'>
         
         <h1 className='text-2xl'>{title}</h1>
            
        </div>
    );
};

Mark.propTypes=
{
    mark:PropTypes.object.isRequired
}
export default Mark;