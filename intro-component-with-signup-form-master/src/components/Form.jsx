import ButtonGreen from "./ButtonGreen";
import ButtonViolet from "./ButtonViolet";
import Footer from "./Footer";
function Form() {
  /* TODO: bisogna scrivere la logica per il form, al massimo uso il form che avevo gia fatto
  forse non conviene ma e da provare, in alternativa cera un video carino di GreatStack che 
  puo tornare utile. */
  const handleSubmit = (e) => {
    // BUG: sembra esserci un errore in questa stringa ====> preventDefault(e.target)
    console.log(e.target);
  };
  return (
    <>
      <div>
        <ButtonViolet />
        <div className="bg-white rounded-xl p-6 w-full shadow-2 shadow-darkBlue/25 lg:p-8">
          <form action="#" className="grid gap-4" onClick={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border border-grayishBlue rounded-md p-3 pl-5 placeholder:font-semibold placeholder:text-base placeholder:text-darkBlue"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border border-grayishBlue rounded-md p-3 pl-5 placeholder:font-semibold placeholder:text-base placeholder:text-darkBlue"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border border-grayishBlue rounded-md p-3 pl-5 placeholder:font-semibold placeholder:text-base placeholder:text-darkBlue"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border border-grayishBlue rounded-md p-3 pl-5 placeholder:font-semibold placeholder:text-base placeholder:text-darkBlue"
            />
            <ButtonGreen />
          </form>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Form;
