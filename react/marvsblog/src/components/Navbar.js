import '../assets/css/Navbar.css'

const Navbar = () => {
    const topuniverseLink = "https://topuniverse.org"
    const boltcliqLink = "https://boltcliq.com"
    return (
        <div className='Navbar'>
            <div>
            <a href={topuniverseLink} target='_blank'>Top Universe</a>
            <a href={boltcliqLink} target='_blank'>Boltcliq</a>
            </div>
        </div>
    );
}
 
export default Navbar;