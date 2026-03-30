import springBackground from '../assets/images/spring.png'

function Home() {
    return (
        <div
            style={{
                minHeight: '100vh',
                width: '100%',
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${springBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
        </div>
    )
}

export default Home
