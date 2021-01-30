const Home = () => {

  const handleClick = (e) => {
    console.log("hello patty", e)
  }

const handleClickAgain = (name, e) => {
console.log('hello ' +  name, e.target);
} 
 
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick= {(e) => handleClickAgain('Patrick', e)}>Click Me again</button>
    </div>
    );
}
 
export default Home;