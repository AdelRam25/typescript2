
interface Name {
    name: string;  
  }
  

  const Greetings: React.FC<Name> = ({ name }) => {
    return <h1 className="text-3xl text-center font-bold underline">Hello {name} !</h1>; 
  };
  
  export default Greetings;  
  