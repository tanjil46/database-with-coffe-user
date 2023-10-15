import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-center gap-6">
            
            <Link to='/'>Home</Link>
            <Link to='/addcoffee'>ADDcoffee</Link>
            <Link to='/updatecoffee'>Update</Link>
            <Link to='/singup'>Sing Up</Link>
        </div>
    );
};

export default Header;