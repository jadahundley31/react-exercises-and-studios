export default function BookList() {
   let pageTitle = "My favorite Books";
   let book1 = <a href="https://m.media-amazon.com/images/I/413EAYqKuSL._SX331_BO1,204,203,200_.jpg"/> ;
   let book2 = <a href="https://m.media-amazon.com/images/I/510toWaUfNL._SY346_.jpg"/>;
   let book3 = <a href="https://m.media-amazon.com/images/I/515LvF4rxkL.jpg"/>;

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Love is a Beast" />
         <img src={book2} alt="Truth in the Ashes" />
         <img src={book3} alt="Strange Justice" />
      </div>      
   );
}