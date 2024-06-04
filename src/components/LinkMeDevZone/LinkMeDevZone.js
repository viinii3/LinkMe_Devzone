import React from "react";
import "./LinkMeDevZone.css";
import logo from "./logo.png";
import backgroud from "./fundo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";

function LinkMeDevZone() {
  return (
    <div className="containerMaster">
      <div class="container">
        <section class="header">
          <div class="info">
            <img src={logo}></img>
            <h1>DevZone Innovations</h1>
          </div>
          <div class="paragrafo">
            <p>
              Bem-vindo à DevZone! Somos uma vibrante e inovadora startup
              dedicada a criar soluções digitais que impulsionam o sucesso
              empresarial. Nosso foco apaixonado reside em desenvolver sites de
              todos os tipos, sob medida para atender às necessidades
              específicas de cada negócio.
            </p>
          </div>
        </section>
        <section class="btns">
          <div class="site-btn">
            <a href="https://devzoneinnovations.com.br/">
              <TbWorld />
            </a>
          </div>
          <div class="contato-btn">
            <a href="https://wa.me/5511912125307">
              <FaWhatsapp />
            </a>
          </div>
          <div class="github-btn">
            <a href="https://github.com/viinii3">
              <FaGithub />
            </a>
          </div>
          <div class="linkedin-btn">
            <a href="https://www.linkedin.com/in/marcosvclementec/">
              <FaLinkedinIn />
            </a>
          </div>
        </section>
        <div className="footer">
          <p>
            Copyright DevZone Innovations - 2024. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LinkMeDevZone;
