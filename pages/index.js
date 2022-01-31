import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

//Next Imports
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keyword" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          ultrices purus quis mollis ullamcorper. Vivamus vitae tempor risus.
          Aliquam hendrerit magna sit amet faucibus vehicula. Aliquam eget ante
          finibus, itae est. Sed quis bibendum mi. Nullam a eros cursus,
          venenatis ex nec, malesuada magna. Phasellus quis quam diam. Praesent
          feugiat faucibus
        </p>
        <p className={styles.text}>
          massa, eu pulvinar nisl egestas a. Aenean sit amet ligula at ligula
          mattis vehicula nec a elit. Proin ornare nisi eros, a tristique neque
          convallis non. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Aliquam semper suscipit ligula et tristique lorem vel justo
          facilisis egestas. Vivamus quis tempor risus, congue venenatis lacus.
          Mauris eget viverra libero.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
