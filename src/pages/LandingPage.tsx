import { useState, type FormEvent } from "react";
import {
  FaPhone,
  FaTelegram,
  FaEnvelope,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const colors = {
  page: "#F6F3F5",
  cream: "#F8F3ED",
  light: "#F1EBEF",
  brown: "#6B3A0A",
  midBrown: "#8B5A2B",
  softBrown: "#B8895A",
  button: "#C58A4A",
  buttonHover: "#B67A3A",
  text: "#2F2430",
};

export default function LandingPage() {
  const [, setSuccessMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          comment,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }

      setSuccessMessage("Спасибо! Я скоро свяжусь с Вами!");
      setName("");
      setPhone("");
      setComment("");
    } catch (err) {
      console.error(err);
      alert("Ошибка при отправке");
    } finally {
      setLoading(false);
    }
  };

  const cardStyle = {
    background: colors.cream,
    border: "1px solid #E7D8C9",
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
  };

  const contactButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "14px 18px",
    borderRadius: 12,
    background: colors.button,
    color: "#FFFFFF",
    textDecoration: "none",
    fontWeight: 700,
    transition: "0.2s",
  };

  const buttonPrimaryStyle = {
    display: "inline-block",
    background: colors.button,
    color: "#FFFFFF",
    textDecoration: "none",
    borderRadius: 10,
    padding: "14px 22px",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
  };

  return (
    <div className="landing-page">
      <style>{`
        .landing-page {
          background: ${colors.page};
          color: ${colors.text};
          overflow-x: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          background-image: url('/images/rybka_tanya.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 80% center;
          padding: 40px 24px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(255,244,232,0.9) 0%,
            rgba(255,244,232,0.92) 32%,
            rgba(255,244,232,0.45) 48%,
            rgba(255,244,232,0.05) 68%,
            rgba(255,244,232,0) 100%
          );
          z-index: 1;
        }

        .hero-header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 28px 48px;
          box-sizing: border-box;
          z-index: 3;
        }

        .hero-name {
          font-size: 52px;
          font-weight: 800;
          color: ${colors.softBrown};
          line-height: 1;
        }

        .hero-subtitle {
          margin-top: 18px;
          font-size: 28px;
          font-weight: 600;
          color: ${colors.softBrown};
        }

        .hero-nav {
          display: flex;
          gap: 28px;
          font-weight: 600;
          font-size: 18px;
          padding-top: 8px;
        }

        .hero-nav a {
          color: #FFFFFF;
          text-decoration: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 620px;
          margin-left: 48px;
          padding-top: 120px;
          text-align: left;
        }

        .hero-title {
          margin: 0;
          font-size: 62px;
          line-height: 1.08;
          font-weight: 900;
          color: ${colors.brown};
          letter-spacing: -1px;
        }

        .hero-lead {
          margin: 28px 0 0;
          max-width: 520px;
          font-size: 24px;
          line-height: 1.45;
          color: #9A6A3A;
          font-weight: 500;
        }

        .hero-small {
          margin: 28px 0 0;
          max-width: 520px;
          font-size: 18px;
          line-height: 1.7;
          color: ${colors.midBrown};
        }

        .hero-actions {
          margin-top: 36px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-button {
          display: inline-block;
          text-decoration: none;
          border-radius: 10px;
          padding: 16px 28px;
          font-weight: 700;
          font-size: 17px;
        }

        .hero-button-primary {
          background: ${colors.softBrown};
          color: #FFFFFF;
        }

        .hero-button-secondary {
          background: rgba(255,255,255,0.72);
          color: #9A6A3A;
          border: 1px solid ${colors.softBrown};
        }

        .section {
          padding: 80px 24px;
        }

        .section-tight {
          padding: 80px 24px 20px;
        }

        .section-light {
          background: ${colors.light};
        }

        .section-cream {
          background: ${colors.cream};
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          margin: 0;
          font-size: 32px;
          color: ${colors.brown};
          text-align: center;
        }

        .section-text {
          margin: 12px auto 0;
          max-width: 760px;
          color: ${colors.midBrown};
          font-size: 18px;
          line-height: 1.6;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .about-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          align-items: center;
        }

        .about-image {
          width: 100%;
          height: 760px;
          object-fit: cover;
          object-position: center center;
          border-radius: 28px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }

        .about-content {
          max-width: 620px;
        }

        .about-title {
          margin: 0;
          font-size: 52px;
          line-height: 1.08;
          color: ${colors.brown};
          letter-spacing: -1px;
          text-transform: uppercase;
          font-weight: 900;
        }

        .about-text {
          text-align: left;
          margin: 18px 0 0;
        }

        .about-checklist {
          margin-top: 28px;
          display: grid;
          gap: 12px;
          color: ${colors.midBrown};
          font-weight: 700;
          font-size: 17px;
        }

        .help-grid {
          margin-top: 36px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .contact-grid {
          margin-top: 36px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        .form-card {
          max-width: 760px;
          margin: 0 auto;
        }

        .form {
          margin-top: 28px;
          display: grid;
          gap: 14px;
        }

        .field {
          padding: 14px;
          border-radius: 10px;
          border: 1px solid #D9C3CF;
          font-size: 16px;
          font-family: inherit;
        }

        @media (max-width: 900px) {
          .hero {
            min-height: auto;
            align-items: flex-start;
            background-position: center top;
            padding: 24px 20px 44px;
          }

          .hero::before {
            background: linear-gradient(
              90deg,
              rgba(255,244,232,0.86) 0%,
              rgba(255,244,232,0.74) 58%,
              rgba(255,244,232,0.35) 100%
            );
          }

          .hero-header {
            position: relative;
            padding: 0;
            display: block;
          }

          .hero-name {
            font-size: 32px;
            line-height: 1.05;
            max-width: 240px;
          }

          .hero-subtitle {
            margin-top: 8px;
            font-size: 18px;
          }

          .hero-nav {
            display: none;
          }

          .hero-content {
            margin-left: 0;
            padding-top: 150px;
            max-width: 340px;
          }

          .hero-title {
            font-size: 42px;
            line-height: 1.08;
            letter-spacing: -0.5px;
          }

          .hero-lead {
            font-size: 18px;
            line-height: 1.45;
            margin-top: 22px;
          }

          .hero-small {
            font-size: 15px;
            line-height: 1.55;
            margin-top: 22px;
          }

          .hero-actions {
            margin-top: 28px;
            display: grid;
            gap: 12px;
            max-width: 100%;
          }

          .hero-button {
            width: 100%;
            box-sizing: border-box;
            text-align: center;
            padding: 14px 18px;
            font-size: 16px;
          }

          .section,
          .section-tight {
            padding: 56px 18px;
          }

          .section-title {
            font-size: 28px;
          }

          .section-text {
            font-size: 16px;
            line-height: 1.55;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .about-image {
            height: 420px;
            border-radius: 22px;
          }

          .about-title {
            font-size: 34px;
          }

          .about-content {
            max-width: none;
          }

          .help-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 420px) {
          .hero {
            background-position: 58% top;
          }

          .hero-content {
            max-width: 315px;
            padding-top: 130px;
          }

          .hero-title {
            font-size: 38px;
          }

          .hero-lead {
            font-size: 17px;
          }

          .hero-small {
            font-size: 14px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="hero-header">
          <div>
            <div className="hero-name">Татьяна Рыбко</div>
            <div className="hero-subtitle">партнер MetaBox</div>
          </div>

          <nav className="hero-nav">
            <a href="#about">обо мне</a>
            <a href="#jobs">возможности</a>
            <a href="#contacts">контакты</a>
          </nav>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            ЖИЗНЬ,
            <br />
            КОТОРУЮ ВЫ
            <br />
            СОЗДАЕТЕ.
          </h1>

          <p className="hero-lead">
            Помогу разобраться в MetaBox, освоить современные AI-инструменты и
            открыть новые возможности для дохода.
          </p>

          <p className="hero-small">
            Для тех, кто ищет дополнительный доход.
            <br />
            Для тех, кто хочет освоить AI с нуля.
            <br />
            Практично. Пошагово. Поддержка на каждом этапе.
          </p>

          <div className="hero-actions">
            <a href="#contacts" className="hero-button hero-button-primary">
              📞 Получить консультацию
            </a>

            <a
              href="https://t.me/rybka_yara"
              target="_blank"
              rel="noreferrer"
              className="hero-button hero-button-secondary"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container stats-grid">
          {[
            { value: "💡", label: "AI-инструменты" },
            { value: "🤝", label: "Поддержка" },
            { value: "🌍", label: "Онлайн" },
            { value: "🚀", label: "Результат" },
          ].map((item) => (
            <div key={item.label} style={{ ...cardStyle, textAlign: "center" }}>
              <div style={{ fontSize: 42, fontWeight: 800, color: colors.midBrown }}>
                {item.value}
              </div>
              <div
                style={{
                  marginTop: 8,
                  color: "#6B4E3D",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section section-cream">
        <div className="about-grid">
          <img
            src="/images/rybka_t.jpg"
            alt="Татьяна Рыбко"
            className="about-image"
          />

          <div className="about-content">
            <h2 className="about-title">
              Как я начала все заново
              <br />в другой стране
            </h2>

            <p className="section-text about-text" style={{ marginTop: 28 }}>
              Меня зовут Татьяна.
            </p>

            <p className="section-text about-text">
              Сейчас я живу в Германии и знаю, как непросто начать всё заново в
              другой стране. Я столкнулась с языковым барьером, новыми правилами
              и поиском возможностей для заработка.
            </p>

            <p className="section-text about-text">
              Даже имея профессию разработчика, я понимала, что найти подходящую
              работу бывает непросто. Поэтому я начала искать современные способы
              заработка онлайн.
            </p>

            <p className="section-text about-text">
              Так я познакомилась с MetaBox. Уже во время первой презентации я
              поняла, что хочу стать частью этой команды и развиваться вместе с
              людьми, которые смотрят в будущее.
            </p>

            <p className="section-text about-text">
              Сегодня я помогаю другим людям разобраться в возможностях
              платформы, освоить AI-инструменты и открыть для себя новые
              источники дохода.
            </p>

            <div className="about-checklist">
              <div>✔️ Живу и развиваюсь в Германии</div>
              <div>✔️ Искала возможность заработка онлайн и нашла её в MetaBox</div>
              <div>✔️ Использую современные AI-инструменты в работе</div>
              <div>✔️ Помогаю новичкам разобраться в платформе</div>
              <div>✔️ Сопровождаю на первых шагах обучения</div>
            </div>
          </div>
        </div>
      </section>

      <section id="jobs" className="section section-light">
        <div className="container">
          <h2 className="section-title">Чем я могу быть полезной</h2>
          <p className="section-text">
            Делюсь своим опытом и помогаю освоить современные инструменты для
            новых возможностей и дополнительного дохода.
          </p>

          <div className="help-grid">
            {[
              "Покажу сервисы, которые помогают экономить время и работать эффективнее.",
              "Расскажу о современных направлениях заработка и вариантах развития онлайн.",
              "Помогу разобраться в платформе и отвечу на вопросы на первых этапах.",
              "Онлайн-формат позволяет обучаться и развиваться независимо от страны проживания.",
              "Покажу, как использовать привычные сервисы для обучения, общения и работы.",
              "Не оставлю один на один с информацией — помогу двигаться поэтапно.",
            ].map((service) => (
              <div key={service} style={cardStyle}>
                <div style={{ fontSize: 18, fontWeight: 700, color: colors.midBrown }}>
                  {service}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: 1000, margin: "0 auto", ...cardStyle, textAlign: "center" }}>
          <h2 className="section-title">Готовы узнать больше?</h2>
          <p className="section-text">
            Я сама прошла путь от поиска возможностей в новой стране до знакомства
            с MetaBox.
            <br />
            С удовольствием поделюсь своим опытом и отвечу на ваши вопросы.
          </p>

          <div style={{ marginTop: 28 }}>
            <a href="tel:+4915155688729" style={buttonPrimaryStyle}>
              📞 позвонить сейчас
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="form-card" style={cardStyle}>
          <h2 className="section-title">
            Оставьте мне короткое сообщение, и я свяжусь с Вами
          </h2>
          <p className="section-text">
            А что если начать сейчас?
            <br />
            <br />
            Не обязательно иметь опыт в IT или разбираться в технологиях.
            <br />
            <br />
            Главное — желание развиваться и использовать возможности, которые
            доступны сегодня каждому.
            <br />
            <br />
            Я расскажу о современных инструментах, обучении, вариантах развития и
            помогу сделать первый шаг.
          </p>

          <form onSubmit={handleSubmit} className="form">
            <input
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="field"
            />
            <input
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="field"
            />
            <textarea
              placeholder="Короткое сообщение"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={5}
              className="field"
              style={{ resize: "vertical" }}
            />
            <button type="submit" style={buttonPrimaryStyle} disabled={loading}>
              {loading ? "Отправляем..." : "Получить обратную связь"}
            </button>
          </form>
        </div>
      </section>

      <section id="contacts" className="section section-light" style={{ paddingBottom: 100 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 className="section-title">Контакты</h2>
          <p className="section-text">Звяжитесь со мной удобным для Вас способом</p>

          <div className="contact-grid">
            <a
              href="tel:+4915155688729"
              style={contactButtonStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = colors.buttonHover)}
              onMouseLeave={(e) => (e.currentTarget.style.background = colors.button)}
            >
              <FaPhone /> Телефон
            </a>

            <a
              href="https://t.me/rybka_yara"
              target="_blank"
              rel="noreferrer"
              style={contactButtonStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = colors.buttonHover)}
              onMouseLeave={(e) => (e.currentTarget.style.background = colors.button)}
            >
              <FaTelegram /> Telegram
            </a>

            <a
              href="mailto:tanyarybko28@gmail.com"
              style={contactButtonStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = colors.buttonHover)}
              onMouseLeave={(e) => (e.currentTarget.style.background = colors.button)}
            >
              <FaEnvelope /> Email
            </a>
          </div>

          <h2 className="section-title" style={{ marginTop: 56 }}>
            Социальные сети
          </h2>

          <div className="contact-grid">
            <a
              href="https://www.instagram.com/tanij_r?igsh=MWZxdGkxOGM2ZzAx&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              style={contactButtonStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = colors.buttonHover)}
              onMouseLeave={(e) => (e.currentTarget.style.background = colors.button)}
            >
              <FaInstagram /> Instagram
            </a>

            <a
              href="https://www.tiktok.com/@yara....r?_r=1"
              target="_blank"
              rel="noreferrer"
              style={contactButtonStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = colors.buttonHover)}
              onMouseLeave={(e) => (e.currentTarget.style.background = colors.button)}
            >
              <FaTiktok /> TikTok
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
