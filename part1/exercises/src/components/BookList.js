export default function BookList() {
   let pageTitle = "Lovely Books";
   let book1 = <a href="https://m.media-amazon.com/images/I/413EAYqKuSL._SX331_BO1,204,203,200_.jpg"/> ;
   let book2 = "";
   let book3 = "";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Nothing here!" />
         <img src={book2} alt="Nothing here!" />
         <img src={book3} alt="Nothing here!" />
      </div>      
   );
}