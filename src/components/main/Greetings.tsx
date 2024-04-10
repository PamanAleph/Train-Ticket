function Greetings() {
  
  
  const date = new Date();
  const hours = date.getHours();
  
  let greetings = "Selamat Pagi";
  if (hours >= 12 && hours < 17) {
    greetings = "Selamat Siang";
  } else if (hours >= 17 && hours < 19) {
    greetings = "Selamat Sore";
  } else if (hours >= 19) {
    greetings = "Selamat Malam";
  }

  return (
    <h1 className="text-3xl">
      {greetings}, <span className="font-bold">mau kemana ?</span>
    </h1>
  );
}

export default Greetings;
