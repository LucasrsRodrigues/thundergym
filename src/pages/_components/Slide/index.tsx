import { useState } from 'react';
import styles from './styles.module.scss';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { SlideItem } from './SlideItem';

import slideCss from './slideCss.module.scss';


export function Slide() {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapperSlide}>
          <AwesomeSlider>
            <div data-src="/slide/slide1.jpg" >
              <div className={styles.sliderContent}>
                <div className={styles.sliderTop}>
                  <h2><span>Thunder</span>Gym</h2>
                  <h2>CROSSFIT STUDIO</h2>
                </div>

                <div className={styles.wrapper}>
                  <h2>Somos uma comunidade!</h2>
                  <p>
                    Valorizamos o trabalho em equipe e a ajuda mútua acima de tudo!
                    Enquanto nossos treinadores ficarão contentes em ajudar no crescimento do seu condicionamento físico
                    em aulas individuais, você também sempre encontrará um colega
                    suporte, já que nosso treinamento em grupo é limitado a apenas 10 pessoas ...
                  </p>
                  <p>
                    Isso é muito diferente de academias de grandes redes com classes de dezenas ...
                    Nossa vibração de camaradagem é o que torna o treinamento com a gente ainda mais
                    eficiente!
                  </p>
                </div>
              </div>
            </div>
            <div data-src="/slide/slide2.jpg" >
              <div className={styles.sliderContent}>
                <div className={styles.sliderTop}>
                  <h2><span>Thunder</span>Gym</h2>
                  <h2>CROSSFIT STUDIO</h2>
                </div>

                <div className={styles.wrapper}>
                  <p>
                    Nossas instalações oferecem um amplo local para o seu CrossFit e
                    prática de fitness. Em nosso ginásio de 20.000 pés quadrados, você
                    certamente terá espaço de manobra mais do que suficiente!
                  </p>

                  <p>
                    Além disso, nossa localização no centro da cidade é o que nos torna tão atraentes para
                    tantas pessoas ... Área espaçosa dessa escala é mais do que
                    o suficiente para o treinamento em grupo, bem como para o
                    individuais.
                  </p>

                  <p>
                    Trabalhando em diversos movimentos funcionais
                    (como empurrar, puxar, agachar, levantar e correr)
                    nunca foi tão fácil e confortável!
                  </p>
                </div>
              </div>
            </div>

            <div data-src="/slide/slide3.jpg" >
              <div className={styles.sliderContent}>
                <div className={styles.sliderTop}>
                  <h2><span>Thunder</span>Gym</h2>
                  <h2>CROSSFIT STUDIO</h2>
                </div>

                <div className={styles.wrapper}>
                  <p>
                    Levamos as necessidades de nossos participantes de perto.
                    Nosso ginásio está totalmente equipado com ferramentas e engrenagens de primeira linha
                    apenas, como:
                  </p>
                  <ul>
                    <li>Bumper plates</li>
                    <li>Kettlebells</li>
                    <li>Med Balls</li>
                    <li>Squat stands, racks and rings</li>
                    <li>Pull-up rings</li>
                    <li>Barras e pesos de levantamento de peso</li>
                    <li>
                      Plataformas de levantamento de peso <br /> e piso de borracha
                    </li>
                    <li>
                      Inúmeros acessórios
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </AwesomeSlider>
        </div>
      </div>
    </section>
  )
}