import {  useState } from "react";
import type { FormEvent } from "react";
import { FaPhone, FaTelegram, FaEnvelope, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";


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
      throw new Error("Помилка відправки");
    }

    setSuccessMessage("ДЯКУЄМО! Наш менеджер скоро зв'яжеться з Вами!");
    setName("");
    setPhone("");
    setComment("");
  } catch (err) {
    console.error(err);
    alert("Помилка при відправці");
  } finally {
    setLoading(false);
  }
};

  const sectionTitleStyle = {
    margin: 0,
    fontSize: 32,
    color: "#4A0F28",
    textAlign: "center" as const,
  };

  const sectionTextStyle = {
    margin: "12px auto 0",
    maxWidth: 760,
    color: "#5E4B55",
    fontSize: 18,
    lineHeight: 1.6,
    textAlign: "center" as const,
  };

  const cardStyle = {
    background: "#FFFFFF",
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
      background: "#5A1432",
      color: "#FFFFFF",
      textDecoration: "none",
      fontWeight: 700,
      transition: "0.2s",
    };
  const buttonPrimaryStyle = {
    display: "inline-block",
    background: "#4A0F28",
    color: "#FFFFFF",
    textDecoration: "none",
    borderRadius: 10,
    padding: "14px 22px",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
  };

  const buttonSecondaryStyle = {
    display: "inline-block",
    background: "#FFFFFF",
    color: "#4A0F28",
    textDecoration: "none",
    borderRadius: 10,
    padding: "14px 22px",
    fontWeight: 700,
    border: "1px solid #D9C3CF",
    cursor: "pointer",
  };



  return (
    <div style={{ background: "#F6F3F5", color: "#2F2430" }}>
      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            " url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "40px 24px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 40px",
            color: "#FFFFFF",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src="/LOGO/logo-bagira.png"
              alt="Багіра"
              style={{
                width: window.innerWidth < 768 ? 110 : 170,
                height: "auto",
                objectFit: "contain",
                borderRadius: 0,
                background: "rgba(255,255,255,0.08)",
              }}
            />
          </div>

          <nav
            style={{
              position: "absolute",
              top: 20,
              right: 40,
              display: "flex",
              gap: 24,
              color: "#fff",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            <a href="#about" style={{ color: "#FFFFFF", textDecoration: "none" }}>
              Про нас
            </a>
            <a href="#jobs" style={{ color: "#FFFFFF", textDecoration: "none" }}>
              Вакансії
            </a>
            <a href="#contacts" style={{ color: "#FFFFFF", textDecoration: "none" }}>
              Контакти
            </a>
          </nav>
        </div>

        <div
          style={{
            maxWidth: 900,
            textAlign: "center",
            color: "#FFFFFF",
            background: "rgba(40, 17, 27, 0.55)",
            padding: "32px 28px",
            borderRadius: 24,
            backdropFilter: "blur(2px)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 56,
              color: "#FFFFFF",
              textShadow: "0 3px 10px rgba(0,0,0,0.07",
              lineHeight: 1.1,
              fontWeight: 800,
            }}
          >
            ПІДБЕРЕМО НЕРУХОМІСТЬ БЕЗ СТРЕСУ ТА РИЗИКІВ
          </h1>

          <p
            style={{
              margin: "20px auto 0",
              maxWidth: 760,
              fontSize: 22,
              lineHeight: 1.5,
              color: "#F3EAF0",
            }}
          >
            Перевірені об’єкти • Реальні ціни • Повний супровід угоди
          </p>

          <p
            style={{
              margin: "18px auto 0",
              maxWidth: 760,
              fontSize: 18,
              lineHeight: 1.5,
              color: "#F3EAF0",
            }}
          >
            Працюємо з перевіреними об&apos;єктами та супроводжуємо вас до передачі ключів
          </p>
            <div
              style={{
                marginTop: 12,
                fontSize: 16,
                color: "#ffffff",
                opacity: 0.9,
              }}
            >
             Працюємо в Ірпені, Бучі, Гостомелі та прилеглих населених пунктах
           </div>

          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="tel:+380753549445" style={buttonPrimaryStyle}>
              📞 Отримати консультацію
            </a>

            <a
              href="https://t.me/bagirarieltor"
              target="_blank"
              rel="noreferrer"
              style={buttonSecondaryStyle}
            >
              Написати в Telegram
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
            { value: "10+", label: "років досвіду" },
            { value: "600+", label: "клієнтів" },
            { value: "300+", label: "угод" },
            { value: "100%", label: "уваги до клієнта" },
          ].map((item) => (
            <div key={item.label} style={{ ...cardStyle, textAlign: "center" }}>
              <div style={{ fontSize: 42, fontWeight: 800, color: "#4A0F28" }}>{item.value}</div>
              <div style={{ marginTop: 8, color: "#6E5B65", fontSize: 16 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div
            style={{
              minHeight: 520,
              borderRadius: 20,
              backgroundImage: "url('/agent-photo.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          />

          <div>
            <h2 style={{ ...sectionTitleStyle, textAlign: "left" }}>Про мене та мою команду</h2>

            <p style={{ ...sectionTextStyle, textAlign: "left", margin: "16px 0 0" }}>
              Вітаємо в «Багіра»!
            </p>

            <p style={{ ...sectionTextStyle, textAlign: "left", margin: "12px 0 0" }}>
              Ми — команда професіоналів у сфері нерухомості, яка допомагає клієнтам безпечно
              купувати, продавати, інвестувати та знаходити найкращі рішення під свій запит.
            </p>

            <p style={{ ...sectionTextStyle, textAlign: "left", margin: "12px 0 0" }}>
              Ми працюємо на ринку вже багато років, добре знаємо кожний куточок у радіусі 100 км
              від Києва, супроводжуємо клієнта на кожному етапі та беремо на себе всі складні
              питання: перевірку документів, переговори, організацію переглядів і повний супровід
              угоди.
            </p>

            <p style={{ ...sectionTextStyle, textAlign: "left", margin: "12px 0 0" }}>
              Наша мета — зробити процес з нерухомістю максимально простим, зрозумілим і безпечним
              для вас.
            </p>

            <div
              style={{
                marginTop: 24,
                display: "grid",
                gap: 10,
                color: "#4A0F28",
                fontWeight: 600,
              }}
            >
              <div>✔️ Багато років досвіду на ринку нерухомості</div>
              <div>✔️ Працюємо в Ірпені, Бучі, Гостомелі та прилеглих населених пунктах</div>
              <div>✔️ Перевіряємо документи перед угодою</div>
              <div>✔️ Допомагаємо уникнути ризиків і переплат</div>
              <div>✔️ Супроводжуємо клієнта до результату</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#F1EBEF" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={sectionTitleStyle}>Наші послуги</h2>
          <p style={sectionTextStyle}>Допомагаємо продати, здати або знайти житло під ваш запит</p>

          <div
            style={{
              marginTop: 36,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {[
              "Підбір квартири під ваш бюджет і запит",
              "Продаж нерухомості",
              "Інвестиції в нерухомість",
              "Оренда житла",
              "Повний юридичний супровід",
              "Консультація по ринку",
            ].map((service) => (
              <div key={service} style={cardStyle}>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#4A0F28" }}>{service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", ...cardStyle, textAlign: "center" }}>
          <h2 style={sectionTitleStyle}>Не знаєте, яку квартиру обрати?</h2>
          <p style={sectionTextStyle}>
            На ринку багато варіантів, але не всі безпечні. Ми підберемо перевірені об&apos;єкти,
            які підходять саме вам, і допоможемо уникнути помилок.
          </p>

          <div style={{ marginTop: 28 }}>
            <a href="tel:+380753549445" style={buttonPrimaryStyle}>
              📞 Зателефонувати зараз
            </a>
          </div>
        </div>
      </section>


<section style={{ padding: "80px 24px", background: "#4A0F28", color: "#FFFFFF" }}>
  <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
    <h2 style={{ margin: 0, fontSize: 38 }}>Маємо багато класних варіантів для перегляду</h2>

    <p
      style={{
        margin: "16px auto 0",
        maxWidth: 760,
        fontSize: 20,
        lineHeight: 1.6,
        color: "#F3EAF0",
      }}
    >
      Для отримання додаткової інформації та запису телефонуйте прямо зараз
    </p>

    <div
      style={{
        marginTop: 28,
        display: "grid",
        gap: 10,
        justifyContent: "center",
        fontSize: 22,
        fontWeight: 700,
      }}
    >
      <a href="tel:+380753549445" style={{ color: "#FFFFFF", textDecoration: "none" }}>
        +38 (075) 354 94 45
      </a>
    </div>
  </div>
</section>

<section style={{ padding: "80px 24px" }}>
  <div style={{ maxWidth: 760, margin: "0 auto", ...cardStyle }}>
    <h2 style={sectionTitleStyle}>Залиште заявку</h2>
    <p style={sectionTextStyle}>Ми підберемо для вас варіанти та передзвонемо протягом години</p>

    <form onSubmit={handleSubmit} style={{ marginTop: 28, display: "grid", gap: 14 }}>
      <input
        placeholder="Ваше ім'я"
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
        placeholder="Коментар"
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
        {loading ? "Відправляємо..." : "Отримати варіанти"}
      </button>
    </form>
  </div>
</section>

<section style={{ padding: "60px 24px", background: "#F6F3F5" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
    <h2 style={{ fontSize: 32, margin: 0, color: "#4A0F28" }}>
      Ми на платформах нерухомості
    </h2>

    <p
      style={{
        marginTop: 16,
        color: "#5E4B55",
        fontSize: 18,
        lineHeight: 1.6,
        maxWidth: 760,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      Наші актуальні об’єкти також представлені на популярних платформах нерухомості.
    </p>

    <div
      style={{
        marginTop: 28,
        display: "flex",
        gap: 16,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <a
        href="https://dom.ria.com/uk/agency-31606.html"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          padding: "14px 24px",
          borderRadius: 12,
          background: "#4A0F28",
          color: "#FFFFFF",
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        Переглянути на DOM.RIA
      </a>

      <a
        href="https://0933549445.rieltor.ua/"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          padding: "14px 24px",
          borderRadius: 12,
          border: "1px solid #4A0F28",
          color: "#FFFFFF",
          textDecoration: "none",
          fontWeight: 700,
          background: "#4A0F28",
          transition: "0.2s",
        }}
      >
        Переглянути на RIELTOR.UA
      </a>
    </div>
  </div>
</section>

<section id="contacts" style={{ padding: "80px 24px 100px", background: "#F1EBEF" }}>
  <div style={{ maxWidth: 1000, margin: "0 auto" }}>
    <h2 style={sectionTitleStyle}>Контакти</h2>
    <p style={sectionTextStyle}>Зв&apos;яжіться з нами зручним для вас способом</p>

    <div
      style={{
        marginTop: 36,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 20,
      }}
    >
      <a
        href="tel:+380753549445"
        style={contactButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#7A1B45")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#5A1432")}
      >
        <FaPhone /> Телефон
      </a>

      <a
        href="https://t.me/bagirarieltor"
        target="_blank"
        rel="noreferrer"
        style={contactButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#7A1B45")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#5A1432")}
      >
        <FaTelegram /> Telegram
      </a>

      <a
        href="mailto:ukrainarealtorbagira@gmail.com"
        style={contactButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#7A1B45")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#5A1432")}
      >
        <FaEnvelope /> Email
      </a>
    </div>

    <h2 style={{ ...sectionTitleStyle, marginTop: 56 }}>Соціальні мережі</h2>

    <div
      style={{
        marginTop: 36,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 20,
      }}
    >
      <a
        href="https://instagram.com/bagira.irpin"
        target="_blank"
        rel="noreferrer"
        style={contactButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#7A1B45")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#5A1432")}
      >
        <FaInstagram /> Instagram
      </a>

      <a
        href="https://www.tiktok.com/@bagira.irpin"
        target="_blank"
        rel="noreferrer"
        style={contactButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#7A1B45")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#5A1432")}
      >
        <FaTiktok /> TikTok
      </a>

      <a
        href="https://www.youtube.com/@bagira-irpin"
        target="_blank"
        rel="noreferrer"
        style={contactButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#7A1B45")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#5A1432")}
      >
        <FaYoutube /> YouTube
      </a>
    </div>
  </div>
</section>

<section id="jobs" style={{ padding: "80px 24px" }}>
  <div style={{ maxWidth: 1000, margin: "0 auto", ...cardStyle, textAlign: "center" }}>
    <h2 style={sectionTitleStyle}>Вакансії</h2>
    <p style={sectionTextStyle}>
      Шукаємо активних рієлторів у команду Bagira. Якщо вам цікава нерухомість, продажі та
      розвиток — зв&apos;яжіться з нами.
    </p>

    <div style={{ marginTop: 28 }}>
      <a href="tel:+380753549445" style={buttonPrimaryStyle}>
        📞 Дізнатись про вакансії
      </a>
    </div>
  </div>
</section>

<div style={{ marginTop: 40 }}>
  <h2>Квартири в містах</h2>

  <ul>
    <li><a href="/kvartiry-irpen">Квартири в Ирпені</a></li>
    <li><a href="/kvartiry-bucha">Квартири в Бучі</a></li>
    <li><a href="/kvartiry-gostomel">Квартири в Гостомелі</a></li>
  </ul>
</div>
</div>
);

}