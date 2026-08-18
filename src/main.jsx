import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Clock3,
  Flame,
  Instagram,
  MapPin,
  Menu,
  Phone,
  ShoppingBag,
  Star,
  X,
  Utensils,
  ChevronRight,
} from "lucide-react";
import "./styles.css";

const menuItems = [
  {
    id: 1,
    name: "Beef Kothu",
    category: "Kothu",
    description:
      "Tender beef, chopped parotta, egg, onion, curry leaves and our signature spices.",
    price: "₹180",
    tag: "Signature",
  },
  {
    id: 2,
    name: "Chicken Kothu",
    category: "Kothu",
    description:
      "Juicy chicken tossed with fresh parotta, egg and authentic Kolathur masala.",
    price: "₹160",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Egg Kothu",
    category: "Kothu",
    description:
      "Classic street-style kothu with fluffy eggs, parotta and flavourful spices.",
    price: "₹120",
    tag: "Classic",
  },
  {
    id: 4,
    name: "Kolathur Special Kothu",
    category: "Kothu",
    description:
      "Our loaded special with premium ingredients, egg, spicy gravy and secret masala.",
    price: "₹220",
    tag: "Chef's Pick",
  },
  {
    id: 5,
    name: "Plain Parotta",
    category: "Parotta",
    description:
      "Flaky, layered parotta cooked hot on the tawa and served fresh.",
    price: "₹40",
    tag: "Fresh",
  },
  {
    id: 6,
    name: "Chicken Parotta",
    category: "Parotta",
    description:
      "Soft flaky parotta paired with juicy chicken masala and onion.",
    price: "₹150",
    tag: "Popular",
  },
  {
    id: 7,
    name: "Beef Parotta",
    category: "Parotta",
    description:
      "Layered parotta served with tender beef masala and curry leaves.",
    price: "₹170",
    tag: "Special",
  },
  {
    id: 8,
    name: "Chilli Chicken",
    category: "Sides",
    description:
      "Spicy, crispy chicken tossed with peppers, onion and our house sauce.",
    price: "₹180",
    tag: "Hot",
  },
  {
    id: 9,
    name: "Kadai Chicken",
    category: "Sides",
    description:
      "South Indian style chicken cooked with onion, tomato, pepper and spices.",
    price: "₹200",
    tag: "Special",
  },
  {
    id: 10,
    name: "Fresh Lime Soda",
    category: "Drinks",
    description:
      "Freshly squeezed lime with chilled soda. Sweet or salty — your choice.",
    price: "₹50",
    tag: "Cool",
  },
  {
    id: 11,
    name: "Rose Milk",
    category: "Drinks",
    description: "Cold, creamy rose milk — the perfect match for spicy kothu.",
    price: "₹60",
    tag: "Favourite",
  },
  {
    id: 12,
    name: "Falooda",
    category: "Drinks",
    description:
      "Rich chilled falooda with rose syrup, milk, vermicelli and toppings.",
    price: "₹100",
    tag: "Sweet",
  },
];

const categories = ["All", "Kothu", "Parotta", "Sides", "Drinks"];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showMenuImage, setShowMenuImage] = useState(false);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? menuItems
        : menuItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="app">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>🔥 AUTHENTIC KADAI KOTHU SPECIALS</span>
          <span className="topbar-dot">•</span>
          <span>FRESHLY MADE TO ORDER</span>
          <span className="topbar-dot">•</span>
          <span>DINE IN · TAKE AWAY · DELIVERY</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="Go home">
            <img src="/assets/kolathur-logo.png" alt="Kolathur Kothu logo" />
            <span>
              KOLATHUR <b>KOTHU</b>
            </span>
          </button>

          <nav className={mobileOpen ? "nav-links open" : "nav-links"}>
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("menu")}>Menu</button>
            <button onClick={() => scrollTo("story")}>Our Story</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
            <a className="nav-order" href="tel:+91 90000 00000">
              <Phone size={16} /> Order Now
            </a>
          </nav>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-dark">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="kicker">
                <span />
                BORN IN KOLATHUR, LOVED EVERYWHERE
              </div>

              <h1>
                KOLATHUR
                <em>KOTHU</em>
                <strong>PAROTTA</strong>
              </h1>

              <p className="hero-lead">
                Big flavour. Hot kadai. Proper South Indian soul. Experience
                authentic street-style kothu parotta made fresh with our bold,
                house-blended masala.
              </p>

              <div className="hero-actions">
                <button className="btn btn-yellow" onClick={() => scrollTo("menu")}>
                  Explore Menu <ArrowRight size={18} />
                </button>
                <button className="btn btn-outline" onClick={() => scrollTo("contact")}>
                  Find Us <MapPin size={18} />
                </button>
              </div>

              <div className="hero-meta">
                <div>
                  <Flame size={18} />
                  <span>HOT & FRESH</span>
                </div>
                <div>
                  <Star size={18} />
                  <span>AUTHENTIC TASTE</span>
                </div>
                <div>
                  <Utensils size={18} />
                  <span>PREMIUM INGREDIENTS</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-ring" />
              <img
                src="/assets/kolathur-logo.png"
                alt="Kolathur Kothu Parotta Kadai"
                className="hero-logo"
              />
              <div className="hero-stamp">
                <span>THE</span>
                <b>KADAI</b>
                <span>EXPERIENCE</span>
              </div>
            </div>
          </div>
        </section>

        <section className="story-strip">
          <div className="container story-strip-inner">
            <div>
              <span className="strip-icon">✦</span>
              <strong>EVERY CHOP TELLS A STORY</strong>
            </div>
            <div>
              <span className="strip-icon">✦</span>
              <strong>BORN IN KOLATHUR</strong>
            </div>
            <div>
              <span className="strip-icon">✦</span>
              <strong>LOVED EVERYWHERE</strong>
            </div>
          </div>
        </section>

        <section id="menu" className="section menu-section">
          <div className="container">
            <div className="section-heading">
              <div className="kicker centered">
                <span />
                OUR MENU
                <span />
              </div>
              <h2>HOT FROM THE <em>KADAI</em></h2>
              <p>
                Our favourites are chopped, tossed and served hot. Pick your
                craving and let the kadai do the talking.
              </p>
            </div>

            <div className="menu-preview">
              <div className="menu-preview-copy">
                <span className="mini-label">AUTHENTIC KADAI SPECIALS</span>
                <h3>See the menu.<br />Smell the masala.<br /><em>Come hungry.</em></h3>
                <p>
                  From classic egg kothu to our loaded Kolathur Special, every
                  plate is prepared fresh when you order.
                </p>
                <button className="btn btn-red" onClick={() => setShowMenuImage(true)}>
                  View Full Menu <ChevronRight size={18} />
                </button>
              </div>
              <button className="menu-board-button" onClick={() => setShowMenuImage(true)}>
                <img src="/assets/menu-board.png" alt="Kolathur Kothu menu board" />
                <span>Tap to enlarge</span>
              </button>
            </div>

            <div className="category-row" aria-label="Menu categories">
              {categories.map((category) => (
                <button
                  key={category}
                  className={activeCategory === category ? "category active" : "category"}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="food-grid">
              {filteredItems.map((item, index) => (
                <article className="food-card" key={item.id}>
                  <div className="food-image">
                    <img
                      src={index % 3 === 0 ? "/assets/menu-board.png" : "/assets/kolathur-logo.png"}
                      alt={item.name}
                    />
                    <span className="food-tag">{item.tag}</span>
                  </div>
                  <div className="food-info">
                    <div className="food-title-row">
                      <h3>{item.name}</h3>
                      <strong>{item.price}</strong>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="section story-section section-dark">
          <div className="container story-grid">
            <div className="story-image-wrap">
              <img src="/assets/menu-board.png" alt="Kolathur Kothu food and menu" />
              <div className="story-badge">
                <b>100%</b>
                <span>MADE<br />FRESH</span>
              </div>
            </div>

            <div className="story-copy">
              <div className="kicker">
                <span />
                OUR STORY
              </div>
              <h2>FROM <em>KOLATHUR</em><br />TO YOUR TABLE.</h2>
              <p>
                Kolathur Kothu is built around one simple idea: serve the kind
                of kothu that makes you stop after the first bite. We bring
                together flaky parotta, fresh ingredients, fiery masala and the
                theatre of a hot kadai.
              </p>
              <p>
                No shortcuts. No sitting around. Your plate starts when your
                order starts.
              </p>

              <div className="story-points">
                <div><Flame /><span><b>Hot & Fresh</b> Cooked to order, every time.</span></div>
                <div><Star /><span><b>Authentic Taste</b> House-style South Indian flavours.</span></div>
                <div><Utensils /><span><b>Proper Portions</b> Generous plates made to satisfy.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section experience-section">
          <div className="container">
            <div className="section-heading">
              <div className="kicker centered">
                <span />
                WHY KOLATHUR KOTHU
                <span />
              </div>
              <h2>THE <em>KADAI</em> EXPERIENCE</h2>
            </div>

            <div className="experience-grid">
              <div className="experience-card">
                <div className="experience-number">01</div>
                <Flame size={32} />
                <h3>Chopped Hot</h3>
                <p>That unmistakable kadai sound and aroma, right when your plate is made.</p>
              </div>
              <div className="experience-card">
                <div className="experience-number">02</div>
                <Star size={32} />
                <h3>Bold Masala</h3>
                <p>Balanced spice and flavour inspired by the streets of Tamil Nadu.</p>
              </div>
              <div className="experience-card">
                <div className="experience-number">03</div>
                <Utensils size={32} />
                <h3>Made With Care</h3>
                <p>Fresh ingredients, generous portions and a whole lot of passion.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="offer-section">
          <div className="container offer-card">
            <div>
              <span className="mini-label">EVERY WEDNESDAY</span>
              <h2>HAPPY <em>HOURS</em></h2>
              <p>6:30 PM — 8:00 PM</p>
              <small>Special discounts on selected kothu items.</small>
            </div>
            <div className="offer-icon">🔥</div>
          </div>
        </section>

        <section id="contact" className="section contact-section section-dark">
          <div className="container">
            <div className="contact-grid">
              <div>
                <div className="kicker">
                  <span />
                  COME HUNGRY
                </div>
                <h2>LET'S MAKE<br /><em>SOME KOTHU.</em></h2>
                <p className="contact-lead">
                  Dine in, take away or call us for your order. Bring your
                  appetite — we'll handle the kadai.
                </p>
              </div>

              <div className="contact-card">
                <div className="contact-item">
                  <MapPin />
                  <div>
                    <span>VISIT US</span>
                    <strong>Kolathur Kothu Parotta Kadai</strong>
                    <p>Your Kolathur branch address goes here</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Clock3 />
                  <div>
                    <span>OPENING HOURS</span>
                    <strong>Daily · 11:00 AM — 11:30 PM</strong>
                    <p>Wednesday Happy Hours · 6:30 PM — 8:00 PM</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone />
                  <div>
                    <span>CALL / WHATSAPP</span>
                    <a href="tel:+91 90000 00000"><strong>+971 50 000 0000</strong></a>
                    <p>Replace with your actual Indian number</p>
                  </div>
                </div>

                <div className="contact-actions">
                  <a className="btn btn-yellow" href="tel:+91 90000 00000">
                    <Phone size={18} /> Call Now
                  </a>
                  <a
                    className="btn btn-outline"
                    href="https://wa.me/919000000000"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>KOLATHUR KOTHU PAROTTA KADAI</strong>
            <p>Born in Kolathur, loved everywhere.</p>
          </div>
          <div className="socials">
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="tel:+91 90000 00000" aria-label="Phone"><Phone size={20} /></a>
            <a href="#menu" aria-label="Menu"><ShoppingBag size={20} /></a>
          </div>
          <div>© {new Date().getFullYear()} Kolathur Kothu. All rights reserved.</div>
        </div>
      </footer>

      {showMenuImage && (
        <div className="modal-backdrop" onClick={() => setShowMenuImage(false)}>
          <div className="menu-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowMenuImage(false)} aria-label="Close">
              <X />
            </button>
            <img src="/assets/menu-board.png" alt="Full Kolathur Kothu menu" />
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
