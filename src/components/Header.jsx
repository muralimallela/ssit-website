import logo from '../assets/logo.jpg';
import { Navbar } from './Navbar';
const Header = () => {
    return (
        <>
            <img src={logo} alt="logo" width={"100%"} height={"100px"} />
            <Navbar />
        </>
    );
}
export default Header;