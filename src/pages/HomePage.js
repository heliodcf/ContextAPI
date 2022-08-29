const profileimg= 'https://i.imgur.com/i1gsj0v.png';

const HomePage = () => {
  return (
    <div className="HomePage">
        <h1>Oi!!! Me nome é...</h1>
        <img src={profileimg} className="profile" alt='profile' />
        </div>
  )
}

export default HomePage