import styles from "./NavBar.module.css"
import mealPic from "../../assets/meals.jpeg"
import CartButton from "./CartButton"

function NavBar(){
      return (
        <>
          <header className={styles.header}>
            <h1>ReactMeals</h1>
            <CartButton />
          </header>
          <div className={styles.mainImage}>
            <img src={mealPic} alt="Meal"></img>
          </div>
        </>
      );
}


export default NavBar;