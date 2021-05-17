import React from "react";
import styles from "./ZglosBladView.module.scss";
import errorImage from "../../assets/images/table.svg";

const ZglosBladView = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionLeft}>
        <h1>Zglos Błąd View.js</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          laoreet, massa eu laoreet faucibus, magna sem rutrum enim, eu finibus
          felis arcu pharetra nisi. Nulla porta pretium facilisis. Proin eget
          aliquam ipsum. Nam ac mi et mauris elementum luctus luctus in justo.
          Nulla est magna, rhoncus vel pulvinar sed, lacinia ac tortor.
          Pellentesque leo erat, auctor vel vestibulum consequat, dapibus vel
          massa. Sed sagittis, orci at vulputate accumsan, nulla sapien euismod
          est, vitae tincidunt urna elit eget urna. Sed venenatis convallis
          augue, in tempus mauris. Nam pulvinar est nibh, ut pellentesque erat
          fermentum nec. Vestibulum volutpat neque arcu. Morbi fermentum libero
          sit amet vestibulum semper. Fusce et neque ac orci hendrerit commodo.
          Vestibulum nec tincidunt justo. Aenean imperdiet quam sed augue porta,
          ut pharetra erat hendrerit. Maecenas purus odio, accumsan nec leo
          vitae, dignissim blandit odio. Aenean ut lectus posuere, gravida enim
          nec, semper quam. Phasellus ullamcorper placerat porta. Nam porta nisl
          risus, ut viverra neque blandit eget. In hac habitasse platea
          dictumst. Pellentesque aliquet urna et venenatis tempor. Nam ut
          aliquet nibh, ac volutpat ligula. Nunc id nibh tortor. Curabitur
          mollis lacinia arcu, a ultricies ligula varius non. Quisque tempus
          turpis dictum eleifend feugiat. Donec ac viverra libero, a malesuada
          purus. Mauris id erat convallis, congue urna nec, finibus magna. Nulla
          id urna vitae augue venenatis imperdiet.
        </p>
        <h1>Chłopaki bierzemy się za projekt!!!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          laoreet, massa eu laoreet faucibus, magna sem rutrum enim, eu finibus
          felis arcu pharetra nisi. Nulla porta pretium facilisis. Proin eget
          aliquam ipsum. Nam ac mi et mauris elementum luctus luctus in justo.
          Nulla est magna, rhoncus vel pulvinar sed, lacinia ac tortor.
          Pellentesque leo erat, auctor vel vestibulum consequat, dapibus vel
          massa. Sed sagittis, orci at vulputate accumsan, nulla sapien euismod
          est, vitae tincidunt urna elit eget urna. Sed venenatis convallis
          augue, in tempus mauris. Nam pulvinar est nibh, ut pellentesque erat
          fermentum nec. Vestibulum volutpat neque arcu. Morbi fermentum libero
          sit amet vestibulum semper. Fusce et neque ac orci hendrerit commodo.
          Vestibulum nec tincidunt justo. Aenean imperdiet quam sed augue porta,
          ut pharetra erat hendrerit. Maecenas purus odio, accumsan nec leo
          vitae, dignissim blandit odio. Aenean ut lectus posuere, gravida enim
          nec, semper quam. Phasellus ullamcorper placerat porta. Nam porta nisl
          risus, ut viverra neque blandit eget. In hac habitasse platea
          dictumst. Pellentesque aliquet urna et venenatis tempor. Nam ut
          aliquet nibh, ac volutpat ligula. Nunc id nibh tortor. Curabitur
          mollis lacinia arcu, a ultricies ligula varius non. Quisque tempus
          turpis dictum eleifend feugiat. Donec ac viverra libero, a malesuada
          purus. Mauris id erat convallis, congue urna nec, finibus magna. Nulla
          id urna vitae augue venenatis imperdiet.
        </p>
      </div>

      <div className={styles.sectionRight}>
        <img
          className={styles.errorImage}
          src={errorImage}
          alt="FavNote logo"
        />
      </div>
    </div>
  );
};

export default ZglosBladView;
