import '../assets/css/Home.css'
import '../assets/css/main.css'

import avatar from '../assets/images/avatar.jpg'

const Home = () => {
    return (
        <main>
            <div className='hero'>
                <div>
                    <h1>Marvelous Solomon</h1>
                    <p>Principal Software Engineer @xyz.com</p>
                </div>
                <img className='avatar' src={avatar} />
            </div>
        </main>
    );
}

export default Home;