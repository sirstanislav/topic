import "./About.css";
import React from "react";

export default function About() {
  return (
    <section className="about">
      <div className="about__logo"></div>
      <p className="about__info">
        Topic был сделан, чтоб собрать вместе популярные хештеги. А так же для
        популяризаций нюдсов. <br></br> <br></br>{" "}
        <a
          className="about__link"
          href="https://twitter.com/jsunderhood/status/1162273172290334724"
          target="_blank"
          rel="noreferrer"
        >
          Ссылка
        </a>{" "}
        для парней где рассказывают как хорошо сделать красивое ню фото.
        <br></br> <br></br>В планах сделать темную тему. Показывать кол-во
        лайков, если запросы к API твиттера не будут превышать лимита. Исправить
        недочеты.<br></br> <br></br>Обратная связь{" "}
        <a
          className="about__link"
          href="https://twitter.com/sirstanis"
          target="_blank"
          rel="noreferrer"
        >
          @sirstanis
        </a>
      </p>
    </section>
  );
}
