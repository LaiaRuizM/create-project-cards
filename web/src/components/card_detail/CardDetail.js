import '../../styles/layouts/Preview.scss';
import '../../styles/layouts/Card.scss';
import cover from '../../images/proyecto.jpg';
import '../../styles/layouts/LandingPage.scss';

const CardDetail = ({ dataDetail }) => {
  return (
    <>
      <h1 className="landingPage__title">Proyectos y ya estaría...</h1>
      <h2 className="landingPage__subtitle">
        Escaparate en línea para recoger ideas a través de la tecnología.
      </h2>
      <img className="image" src={cover} alt="Project photography" />
      <section className="autor">
        <article className="articleProject">
          <small className="articleProject__subtitle">
            Personal Project Card
          </small>
          <hr className="articleProject__line" />

          <h2 className="articleProject__title">
            {dataDetail.name || 'Elegant Workspace'}
          </h2>
          <p className="articleProject__slogan">
            {dataDetail.slogan || 'Diseños Exclusivos'}
          </p>
          <p className="articleProject__desc">
            {dataDetail.desc ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet faucibus commodo tellus lectus lobortis. '}
          </p>
          <div className="articleProject__technologies">
            <p className="articleProject__technologies--text">
              {dataDetail.technologies || 'React JS - HTML - CSS'}
            </p>
            <span className="articleProject__technologies--icons">
              <a
                href={
                  dataDetail.demo.startsWith('https://')
                    ? dataDetail.demo
                    : null
                }
                target="_blank"
                className="link__icons"
                rel="noreferrer"
              >
                <i className="fa-solid fa-globe"></i>
              </a>
              <a
                href={
                  dataDetail.repo.startsWith('https://')
                    ? dataDetail.repo
                    : null
                }
                target="_blank"
                className="link__icons"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </span>
          </div>
        </article>

        <article className="info-autor">
          <div
            className="info-autor__image"
            style={{ backgroundImage: `url(${dataDetail.image})` }}
          ></div>
          <p className="info-autor__job">
            {dataDetail.job || 'Full Stack Developer'}
          </p>
          <p className="info-autor__name">
            {dataDetail.autor || 'Emmelie Björklund'}
          </p>
        </article>
      </section>
    </>
  );
};

export default CardDetail;

// obj estático en app.js.
// Copy HTML de profile y card -> en el return => El CardDetail,lo rendizaremos desde el back-end
