import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Entrenamiento Comercial',
    /*Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,*/
    Svg: require('@site/static/img/lucurna-sales-small.svg').default,
    description: (
      <>
        Guía práctica para acompañar a los especialistas Inmobiliarios
        a convertirse en Directores de Experiencias de Progreso.
      </>
    ),
  },
  {
    title: 'Enfocado en el Sector Inmobiliario',
    Svg: require('@site/static/img/lucurna-real-state-small.svg').default,
    description: (
      <>
        Diseñado especialmente para las necesidades del sector inmobiliario.
      </>
    ),
  },
  {
    title: 'Asistido por Inteligencia Artificial',
    Svg: require('@site/static/img/lucurna-ia-small.svg').default,
    description: (
      <>
        ROY es el agente de inteligencia artificial que acompaña todo el proceso.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
