
import type { FormEvent } from "react";
import { FaPhone, FaTelegram, FaEnvelope, FaInstagram, FaTiktok} from "react-icons/fa";
import {useEffect, useState} from "react";

export default function LandingPage() {
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth <= 768);
  checkMobile();

  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
}, []);
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

    setSuccessMessage("Спасибо! я скоро свяжусь с Вами!");
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

  const sectionTitleStyle = {
    margin: 0,
    fontSize: 32,
    color: "#6B3A0A",
    textAlign: "center" as const,
  };

  const sectionTextStyle = {
    margin: "12px auto 0",
    maxWidth: 760,
    color: "#8B5A2B",
    fontSize: 18,
    lineHeight: 1.6,
    textAlign: "center" as const,
  };

  const cardStyle = {
    background: "#F8F3ED",
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
      background: "#C58A4A",
      color: "#FFFFFF",
      textDecoration: "none",
      fontWeight: 700,
      transition: "0.2s",
    };
  const buttonPrimaryStyle = {
    display: "inline-block",
    background: "#C58A4A",
    color: "#FFFFFF",
    textDecoration: "none",
    borderRadius: 10,
    padding: "14px 22px",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={{ background: "#F6F3F5", color: "#2F2430",width: "100%", overflowX: "hidden"  }}>
      <section
  style={{
    minHeight: "100vh",
    position: "relative",
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    backgroundImage: "url('/images/rybka_tanya.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    alignItems: isMobile ? "flex-start" : "center",
    backgroundPosition: isMobile ? "center center" : "80% center",
    padding: isMobile ? "24px 20px 48px" : "40px 24px",
  }}
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, rgba(255,244,232,0.88) 0%, rgba(255,244,232,0.92) 32%, rgba(255,244,232,0.45) 48%, rgba(255,244,232,0.05) 68%, rgba(255,244,232,0) 100%)",
      zIndex: 1,
    }}
  />

  <div
    style={{
      top: 0,
      left: 0,
      width: "100%",
      justifyContent: isMobile ? "flex-start" : "space-between",
      alignItems: isMobile ? "flex-start" : "center",
      boxSizing: "border-box",
      zIndex: 3,
      position: isMobile ? "relative" : "absolute",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      padding: isMobile ? "0" : "28px 48px",
    }}
  >
    <div>
      <div style={{ fontSize: isMobile ? 36 : 52, fontWeight: 800, color: "#B8895A", lineHeight: 1 }}>
        Татьяна Рыбко
      </div>
      <div style={{ marginTop: 18, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: "#B8895A" }}>
        партнер MetaBox
      </div>
    </div>

    <nav
      style={{
        display: isMobile ? "none" : "flex",
        gap: 28,
        fontWeight: 600,
        fontSize: 18,
      }}
    >
      <a href="#about" style={{ color: "#FFFFFF", textDecoration: "none" }}>
        обо мне
      </a>
      <a href="#jobs" style={{ color: "#FFFFFF", textDecoration: "none" }}>
        возможности
      </a>
      <a href="#contacts" style={{ color: "#FFFFFF", textDecoration: "none" }}>
        контакты
      </a>
    </nav>
  </div>

  <div
    style={{
      position: "relative",
      zIndex: 2,
      textAlign: "left",
      maxWidth: isMobile ? "100%" : 620,
      marginLeft: isMobile ? 0 : 48,
      paddingTop: isMobile ? 12 : 120,
    }}
  >
    <h1
      style={{
        margin: 0,
        fontSize: isMobile ? 42 : 62,
        lineHeight: isMobile ? 1.05 : 1.08,
        fontWeight: 900,
        color: "#6B3A0A",
        letterSpacing: "-1px",
      }}
    >
      ЖИЗНЬ,
      <br />
      КОТОРУЮ ВЫ
      <br />
      СОЗДАЕТЕ.
    </h1>

    <p
      style={{
        margin: "28px 0 0",
        maxWidth: isMobile ? 260 : 520,
        fontSize: isMobile ? 18 : 24,
        lineHeight: 1.45,
        color: "#9A6A3A",
        fontWeight: 500,
      }}
    >
      Помогу разобраться в MetaBox, освоить современные AI-инструменты
      и открыть новые возможности для дохода.
    </p>

    <p
      style={{
        margin: "28px 0 0",
        maxWidth: isMobile ? 260 : 520,
        fontSize: isMobile ? 14 : 18,
        lineHeight: 1.7,
        color: "#8B5A2B",
      }}
    >
      Для тех, кто ищет дополнительный доход.
      <br />
      Для тех, кто хочет освоить AI с нуля.
      <br />
      Практично. Пошагово. Поддержка на каждом этапе.
    </p>

    <div
      style={{
        marginTop: 36,
        display: "flex",
        gap: 16,
        flexDirection: isMobile ? "column" : "row",
        flexWrap: "wrap",
      }}
    >
      <a
        href="#contacts"
        style={{
          display: "inline-block",
          background: "#B8895A",
          color: "#FFFFFF",
          textDecoration: "none",
          borderRadius: 10,
          padding: "16px 28px",
          fontWeight: 700,
          fontSize: 17,
          border: "none",
          width: isMobile ? "100%" : "auto",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        📞 Получить консультацию
      </a>

      <a
        href="https://t.me/rybka_yara"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          background: "rgba(255,255,255,0.65)",
          color: "#9A6A3A",
          textDecoration: "none",
          borderRadius: 10,
          padding: "16px 28px",
          fontWeight: 700,
          fontSize: 17,
          border: "1px solid #B8895A",
          width: isMobile ? "100%" : "auto",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        Написать в Telegram
      </a>
    </div>
  </div>
</section>

      <section style={{ padding: "80px 24px 20px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {[
              { value: '💡', label: 'AI-инструменты' },
              { value: '🤝', label: 'Поддержка' },
              { value: '🌍', label: 'Онлайн' },
              { value: '🚀', label: 'Результат' },
          ].map((item) => (
            <div key={item.label} style={{ ...cardStyle, textAlign: "center" }}>
              <div style={{ fontSize: 42, fontWeight: 800, color: "#8B5A2B" }}>{item.value}</div>
              <div style={{ marginTop: 8, color: "#6B4E3D", fontSize: 16,fontWeight:600 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={{ padding: "80px 24px", background: "#F8F3ED" }}>
  <div
    style={{
      maxWidth: 1400,
      margin: "0 auto",
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: isMobile ? "1fr" : "1.15fr 0.85fr",
      gap: isMobile ? 28 : 56,
    }}
  >
    <img
      src="/images/rybka_t.jpg"
      alt="Татьяна Рыбко"
      style={{
        width: "100%",
        height: isMobile ? 360 : 760,
        objectFit: "cover",
        objectPosition: "center center",
        borderRadius: 28,
        boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
      }}
    />

    <div style={{ maxWidth: 620 }}>
      <h2
        style={{
          margin: 0,
          fontSize: 52,
          lineHeight: 1.08,
          color: "#6B3A0A",
          letterSpacing: "-1px",
          textTransform: "uppercase",
          fontWeight: 900,
        }}
      >
        Как я начала все заново
        <br />
        в другой стране
      </h2>

      <p style={{ ...sectionTextStyle, textAlign: "left", margin: "28px 0 0" }}>
        Меня зовут Татьяна.
      </p>

      <p style={{ ...sectionTextStyle, textAlign: "left", margin: "18px 0 0" }}>
        Сейчас я живу в Германии и знаю, как непросто начать всё заново в другой стране.
        Я столкнулась с языковым барьером, новыми правилами и поиском возможностей для заработка.
      </p>

      <p style={{ ...sectionTextStyle, textAlign: "left", margin: "18px 0 0" }}>
        Даже имея профессию разработчика, я понимала, что найти подходящую работу бывает непросто.
        Поэтому я начала искать современные способы заработка онлайн.
      </p>

      <p style={{ ...sectionTextStyle, textAlign: "left", margin: "18px 0 0" }}>
        Так я познакомилась с MetaBox. Уже во время первой презентации я поняла,
        что хочу стать частью этой команды и развиваться вместе с людьми,
        которые смотрят в будущее.
      </p>

      <p style={{ ...sectionTextStyle, textAlign: "left", margin: "18px 0 0" }}>
        Сегодня я помогаю другим людям разобраться в возможностях платформы,
        освоить AI-инструменты и открыть для себя новые источники дохода.
      </p>

      <div
        style={{
          marginTop: 28,
          display: "grid",
          gap: 12,
          color: "#8B5A2B",
          fontWeight: 700,
          fontSize: 17,
        }}
      >
        <div>✔️ Живу и развиваюсь в Германии</div>
        <div>✔️ Искала возможность заработка онлайн и нашла её в MetaBox</div>
        <div>✔️ Использую современные AI-инструменты в работе</div>
        <div>✔️ Помогаю новичкам разобраться в платформе</div>
        <div>✔️ Сопровождаю на первых шагах обучения</div>
      </div>
    </div>
  </div>
</section>

      <section style={{ padding: "80px 24px", background: "#F1EBEF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={sectionTitleStyle}>Чем я могу быть полезной</h2>
          <p style={sectionTextStyle}>Делюсь своим опытом и помогаю освоить современные инструменты для новых возможностей и дополнительного дохода.</p>

          <div
            style={{
              marginTop: 36,
              display: "grid",
              gridTemplateColumns:  isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {[
              "Покажу сервисы, которые помогают экономить время и работать эффективнее.",
              "Расскажу о современных направлениях заработка и вариантах развития онлайн.",
              "Помогу разобраться в платформе и отвечу на вопросы на первых этапах.",
              "Онлайн-формат позволяет обучаться и развиваться независимо от страны проживания.",
              "Покажу, как использовать привычные сервисы для обучения, общения и работы.",
              "Не оставлю один на один с информацией — помогу двигаться поэтапно."
            ].map((service) => (
              <div key={service} style={cardStyle}>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#8B5A2B" }}>{service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", ...cardStyle, textAlign: "center" }}>
          <h2 style={sectionTitleStyle}>Готовы узнать больше?</h2>
          <p style={sectionTextStyle}>
            Я сама прошла путь от поиска возможностей в новой стране до знакомства с MetaBox.
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




<section style={{ padding: "80px 24px" }}>
  <div style={{ maxWidth: 760, margin: "0 auto", ...cardStyle }}>
    <h2 style={sectionTitleStyle}>Оставьте мне короткое сообщение и я свяжусь с Вами</h2>
    <p style={sectionTextStyle}>А что если начать сейчас?

Не обязательно иметь опыт в IT или разбираться в технологиях.

Главное — желание развиваться и использовать возможности, которые доступны сегодня каждому.

Я расскажу о современных инструментах, обучении, вариантах развития и помогу сделать первый шаг.
</p>

    <form onSubmit={handleSubmit} style={{ marginTop: 28, display: "grid", gap: 14 }}>
      <input
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: 14,
          borderRadius: 10,
          border: "1px solid #D9C3CF",
          fontSize: 16,
        }}
      />
      <input
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{
          padding: 14,
          borderRadius: 10,
          border: "1px solid #D9C3CF",
          fontSize: 16,
        }}
      />
      <textarea
        placeholder="Короткое сообщение"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={5}
        style={{
          padding: 14,
          borderRadius: 10,
          border: "1px solid #D9C3CF",
          fontSize: 16,
          resize: "vertical",
        }}
      />
      <button type="submit" style={buttonPrimaryStyle} disabled={loading}>
        {loading ? "Отправляем..." : "Получить обратную связь"}
      </button>
    </form>
  </div>
</section>


<section id="contacts" style={{ padding: "80px 24px 100px", background: "#F1EBEF" }}>
  <div style={{ maxWidth: 1000, margin: "0 auto" }}>
    <h2 style={sectionTitleStyle}>Контакты</h2>
    <p style={sectionTextStyle}>Звяжитесь со мной удобным для Вас способом</p>

    <div
      style={{
        marginTop: 36,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 20,
      }}
    >
      <a
        href="tel:+4915155688729"
        style={contactButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#B67A3A")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#C58A4A")}
      >
        <FaPhone /> Телефон
      </a>

      <a
        href="https://t.me/rybka_yara"
        target="_blank"
        rel="noreferrer"
        style={contactButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#B67A3A")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#C58A4A")}
      >
        <FaTelegram /> Telegram
      </a>

      <a
        href="mailto:tanyarybko28@gmail.com"
        style={contactButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#B67A3A")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#C58A4A")}
      >
        <FaEnvelope /> Email
      </a>
    </div>

    <h2 style={{ ...sectionTitleStyle, marginTop: 56 }}>Социальные сети</h2>

    <div
      style={{
        marginTop: 36,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 20,
      }}
    >
      <a
        href="https://www.instagram.com/tanij_r?igsh=MWZxdGkxOGM2ZzAx&utm_source=qr"
        target="_blank"
        rel="noreferrer"
        style={contactButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#B67A3A")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#C58A4A")}
      >
        <FaInstagram /> Instagram
      </a>

      <a
        href="https://www.tiktok.com/@yara....r?_r=1"
        target="_blank"
        rel="noreferrer"
        style={contactButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#B67A3A")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#C58A4A")}
      >
        <FaTiktok /> TikTok
      </a>


    </div>
  </div>
</section>
</div>
);

}