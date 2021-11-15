import { useEffect, useState, useContext } from "react";
import styles from "../styles/components/MenuBox.module.css";
import Link from "next/link";
import Router from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

const pages = [
  { href: "/", title: "Home" },
  { href: "/about", title: "Sobre Nós" },
  { href: "https://github.com/DaviReisVieira", title: "Contato" },
];

export default function MenuBox() {
  const { data: session, status } = useSession();

  function handleRoute(type: string) {
    if (type == "Cadastrar") {
      Router.push("/auth/signup");
    } else if (type == "Entrar") {
      Router.push("/auth/login");
    }
  }

  return (
    <header className={styles.container}>
      <Link href="/">
        <a className={styles.logoText}>My News</a>
      </Link>
      <div className={styles.links}>
        {pages.map((page, index) => (
          <Link key={`page_${index}`} href={page.href}>
            <a>{page.title}</a>
          </Link>
        ))}
        {session && (
          <Link key={`page_saves`} href={"/mynews"}>
            <a>Suas Notícias</a>
          </Link>
        )}
      </div>
      <div className={styles.buttonsContainer}>
        {!session && <button onClick={() => signIn()}>Entrar</button>}
        {session && <button onClick={() => signOut()}>Sair</button>}
      </div>
    </header>
  );
}
