
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
    backgroundPosition: isMobile ? "58% center" : "80% center",
    padding: isMobile ? "24px 20px 48px" : "40px 24px",
  }}
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, rgba(255,244,232,0.9) 0%, rgba(255,244,232,0.7) 15%, rgba(255,244,232,0.2) 28%, rgba(255,244,232,0) 40%)",
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

      </div>
      <div style={{ marginTop: 18, fontSize: isMobile ? 22 : 28, fontWeight: 600, color: "#B8895A" }}>

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
      </a>

      <a href="#contacts" style={{ color: "#FFFFFF", textDecoration: "none" }}>

      </a>
    </nav>
  </div>

  <div
    style={{
      position: "relative",
      zIndex: 2,
      textAlign: "left",
      maxWidth: isMobile ? 310 : 620,
      marginLeft: isMobile ? 0 : 48,
      paddingTop: isMobile ? 24 : 120,
    }}
  >
    <h1
      style={{
        margin: 0,
        fontSize: isMobile ? 34 : 62,
        lineHeight: isMobile ? 1.05 : 1.08,
        fontWeight: 900,
        color: "#6B3A0A",
        letterSpacing: isMobile ? "-0.5px" : "-1px",
      }}
    >
      КОГДА КАЖЕТСЯ,
      <br />
      ЧТО ПОРА
      <br />
      ЧТО-ТО МЕНЯТЬ
    </h1>

    <div
  style={{
    marginTop: 28,
    width: isMobile ? 320 : "fit-content",
    maxWidth: isMobile ? "calc(100vw - 48px)" : 520,
    background: isMobile ? "rgba(255, 248, 240, 0.94)" : "transparent",
    borderRadius: isMobile ? 18 : 0,
    padding: isMobile ? "18px 18px" : 0,
    boxShadow: isMobile ? "0 12px 28px rgba(80, 45, 20, 0.18)" : "none",
  }}
>
  <p
    style={{
      margin: 0,
      fontSize: isMobile ? 17 : 24,
      lineHeight: isMobile ? 1.45 : 1.45,
      color: isMobile ? "#4A2A14" : "#9A6A3A",
      fontWeight: 600,
    }}
  >
    Для мам в декрете.
    <br />
    Для тех, кто ищет дополнительный доход.
    <br />
    Для тех, кто хочет работать удалённо.
    <br />
    Для тех, кто понимает, что будущее уже меняется — и хочет успеть занять в нём своё место.
  </p>

  <p
    style={{
      margin: "18px 0 0",
      fontSize: isMobile ? 15 : 20,
      lineHeight: 1.6,
      color: isMobile ? "#4A2A14" : "#6B4226",
      fontWeight: 600,
      fontStyle: "italic",
    }}
  >
    Поделюсь своим опытом перехода
    <br />
     в новую онлайн-сферу.
    <br />
    Покажу направления, которые сегодня осваивают обычные люди без опыта.
  </p>
</div>

    <div
      style={{
        marginTop: 36,
        display: "flex",
        gap: 16,
        flexDirection: isMobile ? "column" : "row",
        flexWrap: "wrap",
      }}
    >



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

    <div
      style={{
        maxWidth: isMobile ? "100%" : 620,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: isMobile ? 42 : 52,
          lineHeight: 1.08,
          color: "#6B3A0A",
          letterSpacing: "-1px",
          textTransform: "uppercase",
          fontWeight: 900,
          wordBreak: "break-word",
        }}
      >
        ДАВАЙТЕ
        <br />
        ЗНАКОМИТЬСЯ!
      </h2>

      <p style={{ ...sectionTextStyle, textAlign: "left", margin: "28px 0 0" }}>
        Меня зовут Татьяна.
      </p>

      <p style={{ ...sectionTextStyle, textAlign: "left", margin: "18px 0 0" }}>
        После переезда в другую страну, я столкнулась с теми же вопросами, что и многие: новый язык, новая среда и поиск
        возможностей для развития.

      </p>

      <p style={{ ...sectionTextStyle, textAlign: "left", margin: "18px 0 0" }}>
        Мне хотелось найти не просто дополнительный источник дохода, а современное направление,
          в котором можно расти шаг за шагом независимо от профессии и места проживания.
      </p>

      <p style={{ ...sectionTextStyle, textAlign: "left", margin: "18px 0 0" }}>
        Так я познакомилась с MetaBox. Меня привлекло то, что здесь создана целая экосистема для обучения и развития:
        даже человек без опыта может шаг за шагом освоить современные AI-инструменты
        и научиться применять их на практике.

        В процессе обучения рядом находятся наставники и коучи, которые помогают разобраться в материалах и отвечают
        на возникающие вопросы. Кроме того, внутри экосистемы есть возможности для поиска проектов и
        работы через собственную биржу труда.
      </p>

      <p style={{ ...sectionTextStyle, textAlign: "left", margin: "18px 0 0" }}>
        Сегодня я продолжаю изучать AI-инструменты,
        открываю для себя новые цифровые возможности и развиваюсь вместе с сообществом единомышленников.
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
        <div>✔️ Искала возможность заработка онлайн и нашла её в MetaBox</div>
        <div>✔️ Использую современные AI-инструменты в работе</div>
        <div>✔️ Делюсь своим опытом и открытиями </div>
        <div>✔️ Верю,что учиться новому можно в любом возрасте </div>
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
              "Покажу, какие AI-инструменты можно использовать в работе и повседневных задачах.",
              "Расскажу о возможностях онлайн-развития без привязки к стране проживания.",
              "Познакомлю с экосистемой MetaBox: обучением, инструментами и сообществом.",
              "Объясню, как устроена биржа труда внутри платформы.",
              "Поделюсь своим опытом освоения новых цифровых инструментов.",
              "Покажу, с чего можно начать, если раньше вы не работали с AI."
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