import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="http://localhost:3000/posts/a-journey-through-shimla" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/qa.webp" alt="" fill className={styles.image} />       
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
          A Journey Through Shimla:<br></br>
          <Link href="http://localhost:3000/posts/a-journey-through-shimla">Exploring the Beauty of Snowfall</Link>
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Kunal Solanki</span>
            <span className={styles.date}> - 12.10.2023</span>
          </div>
        </div>
      </Link>
      <Link href="http://localhost:3000/posts/this-is-coding-blog" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p.webp" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Coding
          </span>
          <h3 className={styles.postTitle}>
            This is coding blog: React Blog
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Shyam Yadav</span>
            <span className={styles.date}> - 10.10.2022</span>
          </div>
        </div>
      </Link>
      <Link href="http://localhost:3000/posts/rabdi-recipe-rabri-sweet-thickened-milk" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/b.webp" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
          Rabdi Recipe | Rabri – Sweet Thickened Milk
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Ankit Sharma</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="http://localhost:3000/posts/the-boho-white-dress-of-my-dreams" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/dress.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
          THE BOHO WHITE DRESS OF MY DREAMS
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Avanish</span>
            <span className={styles.date}> - 10.2.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
