export default function BookList() {
  let pageTitle = "My favorite Books!";
  let book1 =
    "https://m.media-amazon.com/images/I/91EBMA21mAL._AC_UF1000,1000_QL80_.jpg";
  let book2 =
    "https://m.media-amazon.com/images/I/919qKnUFhuL._AC_UF1000,1000_QL80_.jpg";
  let book3 =
    "https://m.media-amazon.com/images/I/B1eAVSHxJ4L._AC_UF1000,1000_QL80_.jpg";

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="The Once and Future Witches by Alix E. Harrow" width = {203} height ={306}  />
      <img src={book2} alt="Sundial by Catriona Ward" width = {203} height ={306}/>
      <img src={book3} alt="Circe by Madeline Miller" width = {203} height ={306}/>
    </div>
  );
}
