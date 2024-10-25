
import profile from '../../assets/images/profile.png'
const Header = () => {
    return ( 
        <div className='flex justify-between p-4 items-center border-b-2 max-w-7xl mx-auto '>
             <h1 className='text-3xl font-bold'>Cafe Knowledge</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;