function App() {
  const css = `
    :root{
      --bg: #0a0d12;
      --bg-soft: #0e131a;
      --card: #121822;
      --text: #e7ebf0;
      --muted: #a6b0c0;
      --accent: #9bd2ff;
      --accent-strong: #69b9ff;
      --line: rgba(255,255,255,0.08);
      --focus: #2e95ff;
      --success: #1dd1a1;
      --danger: #ff6b6b;
      --gold: #c9a86a;
    }
    * { box-sizing: border-box; }
    body, #root { background: var(--bg); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"; }
    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; display: block; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .section { padding: 96px 0; }
    .section-sm { padding: 64px 0; }

    header { position: sticky; top: 0; z-index: 50; background: linear-gradient(to bottom, rgba(10,13,18,0.9), rgba(10,13,18,0.6) 60%, rgba(10,13,18,0)); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line); }
    .nav { display: flex; align-items: center; justify-content: space-between; padding: 18px 0; }
    .brand { display: flex; align-items: center; gap: 12px; }
    .logo { width: 36px; height: 36px; border: 1px solid var(--line); border-radius: 6px; display: grid; place-items: center; font-weight: 700; letter-spacing: 1px; color: var(--gold); }
    .brand-name { font-weight: 600; letter-spacing: 0.06em; color: var(--text); }
    .nav-links { display: none; gap: 20px; }
    .nav-links a { color: var(--muted); font-size: 14px; transition: color .2s ease; }
    .nav-links a:hover { color: var(--text); }
    @media (min-width: 960px) { .nav-links { display: flex; } }

    .hero { position: relative; overflow: hidden; padding: 120px 0 96px; background: radial-gradient(1200px 600px at 80% -20%, rgba(36,81,140,0.15), transparent 60%), radial-gradient(900px 480px at 20% -10%, rgba(201,168,106,0.12), transparent 60%), linear-gradient(to bottom, rgba(255,255,255,0.02), transparent); border-bottom: 1px solid var(--line); }
    .hero-grid { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
    @media (min-width: 1024px) { .hero-grid { grid-template-columns: 1.1fr 1fr; gap: 56px; } }
    .eyebrow { color: var(--gold); letter-spacing: .18em; font-size: 12px; text-transform: uppercase; margin-bottom: 14px; display: inline-block; }
    .hero h1 { font-size: clamp(36px, 6vw, 64px); line-height: 1.05; margin: 0 0 18px; letter-spacing: -0.02em; }
    .hero p { color: var(--muted); font-size: clamp(16px, 2vw, 19px); line-height: 1.6; margin: 0 0 28px; max-width: 720px; }
    .cta { display: flex; flex-wrap: wrap; gap: 14px; }
    .btn { display: inline-flex; align-items: center; justify-content: center; height: 46px; padding: 0 20px; border-radius: 8px; border: 1px solid var(--line); background: linear-gradient(180deg, #0f1622, #0b1119); color: var(--text); font-weight: 600; letter-spacing: .02em; cursor: pointer; transition: transform .15s ease, border-color .2s ease, background .2s ease, color .2s ease, box-shadow .2s ease; }
    .btn:hover { transform: translateY(-1px); border-color: rgba(255,255,255,0.18); box-shadow: 0 8px 24px rgba(0,0,0,0.35); }
    .btn-primary { background: linear-gradient(180deg, rgba(105,185,255,0.18), rgba(105,185,255,0.06)); border: 1px solid rgba(105,185,255,0.35); color: #dff0ff; }
    .btn-primary:hover { background: linear-gradient(180deg, rgba(105,185,255,0.25), rgba(105,185,255,0.10)); border-color: rgba(105,185,255,0.5); }
    .link { display: inline-flex; align-items: center; gap: 8px; color: var(--muted); font-weight: 600; border-bottom: 1px solid transparent; }
    .link:hover { color: var(--text); border-bottom-color: var(--line); }
    .hero-art { position: relative; min-height: 380px; border-radius: 16px; overflow: hidden; border: 1px solid var(--line); background: linear-gradient(135deg, #0e131a, #0b0f14); }
    .hero-art::before, .hero-art::after { content: ""; position: absolute; inset: 0; background-size: 40px 40px; opacity: 0.12; pointer-events: none; }
    .hero-art::before { background-image: linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px); }
    .hero-art::after { background: radial-gradient(800px 280px at 60% 0%, rgba(35,121,255,0.25), transparent 60%); opacity: .28; }
    .hero-art .placeholder { position: absolute; inset: 0; display: grid; place-items: center; color: var(--muted); font-size: 14px; letter-spacing: .06em; text-transform: uppercase; }

    .headline { font-size: clamp(28px, 4.2vw, 40px); letter-spacing: -0.01em; margin: 0 0 16px; }
    .lead { color: var(--muted); font-size: 18px; line-height: 1.7; margin: 0 0 8px; }
    .copy { color: var(--muted); line-height: 1.8; font-size: 16px; }

    .grid-2 { display: grid; grid-template-columns: 1fr; gap: 28px; }
    @media (min-width: 900px) { .grid-2 { grid-template-columns: 1fr 1fr; gap: 32px; } }
    .grid-3 { display: grid; grid-template-columns: 1fr; gap: 22px; }
    @media (min-width: 900px) { .grid-3 { grid-template-columns: repeat(3, 1fr); gap: 24px; } }

    .card { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00)); border: 1px solid var(--line); border-radius: 14px; padding: 24px; }
    .card:hover { border-color: rgba(255,255,255,0.14); }

    .enviz-wrap { margin-top: 28px; }
    .enviz-box { height: 460px; border: 1px dashed rgba(155,210,255,0.35); background: linear-gradient(180deg, rgba(105,185,255,0.10), rgba(105,185,255,0.03)); border-radius: 14px; display: grid; place-items: center; color: #cfe8ff; text-align: center; letter-spacing: .08em; text-transform: uppercase; font-size: 13px; }
    .caption { color: var(--muted); font-size: 14px; line-height: 1.7; margin-top: 14px; }

    .tech-row { display: grid; grid-template-columns: 1fr; gap: 18px; }
    @media (min-width: 860px) { .tech-row { grid-template-columns: 1fr 1fr; gap: 20px; } }
    .tech { display: flex; gap: 16px; align-items: flex-start; padding: 22px; border: 1px solid var(--line); border-radius: 14px; background: var(--bg-soft); }
    .tech .icon { width: 44px; height: 44px; border-radius: 10px; display: grid; place-items: center; background: linear-gradient(180deg, rgba(105,185,255,0.18), rgba(105,185,255,0.06)); border: 1px solid rgba(105,185,255,0.28); flex: 0 0 44px; }
    .tech h4 { margin: 2px 0 6px; font-size: 18px; }
    .tech p { margin: 0; color: var(--muted); line-height: 1.7; }

    .point { padding: 20px; border: 1px solid var(--line); border-radius: 12px; background: var(--bg-soft); }
    .point h5 { margin: 0 0 8px; font-size: 16px; color: #dfe6f2; }
    .point p { margin: 0; color: var(--muted); }

    .form { margin-top: 10px; display: grid; grid-template-columns: 1fr; gap: 14px; max-width: 720px; }
    .field { display: grid; gap: 8px; }
    label { color: #d4dae5; font-size: 14px; }
    input[type="text"], input[type="email"] { height: 46px; padding: 0 14px; border-radius: 10px; border: 1px solid var(--line); background: #0b1118; color: var(--text); outline: none; transition: border-color .15s ease, box-shadow .15s ease; }
    input::placeholder { color: #6b778c; }
    input:focus { border-color: rgba(105,185,255,0.55); box-shadow: 0 0 0 4px rgba(105,185,255,0.12); }
    .submit { height: 48px; border-radius: 10px; border: 1px solid rgba(201,168,106,0.35); background: linear-gradient(180deg, rgba(201,168,106,0.18), rgba(201,168,106,0.08)); color: #f7f1e6; font-weight: 700; letter-spacing: .02em; cursor: pointer; transition: transform .15s ease, border-color .2s ease, background .2s ease; }
    .submit:hover { transform: translateY(-1px); border-color: rgba(201,168,106,0.55); }

    footer { border-top: 1px solid var(--line); background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0)); }
    .foot { display: grid; grid-template-columns: 1fr; gap: 18px; align-items: center; padding: 28px 0; }
    @media (min-width: 860px) { .foot { grid-template-columns: auto 1fr auto; } }
    .foot-links { display: flex; flex-wrap: wrap; gap: 16px; }
    .foot-links a { color: var(--muted); font-size: 14px; }
    .foot-links a:hover { color: var(--text); }
    .copyr { color: var(--muted); font-size: 13px; text-align: left; }

    html { scroll-behavior: smooth; }
  `;

  return (
    <div>
      <style>
        {css}
      </style>

      <header aria-label="Primary Navigation">
        <div className="container nav">
          <div className="brand">
            <div className="logo" aria-label="XY4">XY4</div>
            <div className="brand-name">XY4</div>
          </div>
          <nav className="nav-links" aria-label="Sections">
            <a href="#model">Model</a>
            <a href="#experience">Digital Off-Plan</a>
            <a href="#technology">Technology</a>
            <a href="#thesis">Investment Thesis</a>
            <a href="#access">Request Access</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home" aria-label="Hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">Ultra-Prime Architectural Equity</span>
              <h1>The Unbuilt World. Now Investable.</h1>
              <p>XY4 is the first platform to offer fractional ownership of tokenized architectural IP for the world's most visionary, unbuilt residences.</p>
              <div className="cta">
                <a className="btn btn-primary" href="#experience">Explore a Digital Off-Plan Investment</a>
                <a className="link" href="#access" aria-label="Request Access">Request Access
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{marginLeft: 6}}>
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="hero-art" role="img" aria-label="Abstract architectural rendering placeholder">
              <div className="placeholder">Abstract Architectural Rendering Placeholder</div>
            </div>
          </div>
        </section>

        <section className="section" id="model" aria-label="The XY4 Model">
          <div className="container">
            <h2 className="headline">A New Asset Class for the Modern Family Office.</h2>
            <p className="lead">We identify and curate architectural designs from world‑renowned and emerging architects. Instead of funding construction, you invest directly in the asset with the highest potential for appreciation: the intellectual property itself.</p>
            <p className="copy">Our process is precise and institutional: (1) XY4 secures exclusive rights to ultra‑prime architectural plans. (2) We tokenize the IP into institutional‑grade security tokens. (3) We present the investment opportunity to our members through an immersive digital experience.</p>
          </div>
        </section>

        <section className="section" id="experience" aria-label="The Digital Off-Plan Experience">
          <div className="container">
            <h2 className="headline">See the Future. Before it's Built.</h2>
            <p className="copy">This is where pre‑construction becomes tangible. Step inside a 1:1 scale, photoreal environment and conduct true design‑phase due diligence.</p>
            <div className="enviz-wrap">
              <div className="enviz-box" role="img" aria-label="Embedded Enviz Interactive 3D Walkthrough Placeholder">
                [Embedded Enviz Interactive 3D Walkthrough Here]
              </div>
              <p className="caption">Powered by Enviz, the XY4 platform transforms blueprints into explorable, 1:1 scale digital environments. Validate spatial flow, experience the design firsthand, and invest with unparalleled clarity.</p>
            </div>
          </div>
        </section>

        <section className="section" id="technology" aria-label="How it Works: The Technology">
          <div className="container">
            <h2 className="headline">Institutional-Grade Security. Unprecedented Liquidity.</h2>
            <div className="tech-row">
              <div className="tech">
                <div className="icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="#9bd2ff" strokeWidth="1.5" />
                    <path d="M12 12l8-4.5M12 12L4 7.5M12 12v9" stroke="#9bd2ff" strokeWidth="1.5" opacity=".8"/>
                  </svg>
                </div>
                <div>
                  <h4>Immersive Visualization.</h4>
                  <p>Our white‑label platform, powered by Enviz's industry‑leading XR technology, converts native Revit and SketchUp files into explorable spaces. This is our “digital off‑plan” due diligence tool.</p>
                </div>
              </div>
              <div className="tech">
                <div className="icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l7 3v6.5c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-3z" stroke="#9bd2ff" strokeWidth="1.5"/>
                    <path d="M9 12l2 2 4-4" stroke="#9bd2ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity=".9"/>
                  </svg>
                </div>
                <div>
                  <h4>Asset Tokenization.</h4>
                  <p>Powered by Tokeny, we convert architectural IP rights into compliant security tokens. This ensures secure, transparent, and liquid ownership, managed entirely on‑chain.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="thesis" aria-label="The Investment Thesis">
          <div className="container">
            <h2 className="headline">Why Invest in Architectural IP?</h2>
            <div className="grid-3" role="list">
              <div className="point" role="listitem">
                <h5>Early Access</h5>
                <p>Invest at the earliest possible stage—the design phase—to capture maximum value appreciation.</p>
              </div>
              <div className="point" role="listitem">
                <h5>Portfolio Diversification</h5>
                <p>Introduce a non‑correlated asset class to your portfolio, entirely divorced from traditional real estate market cycles.</p>
              </div>
              <div className="point" role="listitem">
                <h5>Liquidity</h5>
                <p>Tokenized ownership provides a pathway to secondary market liquidity, a feature unheard of in early‑stage development.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="access" aria-label="Contact and Access">
          <div className="container">
            <h2 className="headline">Join a Coterie of Visionary Investors.</h2>
            <p className="copy">Access to the XY4 platform is by invitation only. Please submit your details to begin the qualification process.</p>
            <form className="form" action="#" method="post" onSubmit={(e)=>{e.preventDefault(); alert('Thank you. Our team will be in touch.');}}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your full name" required />
              </div>
              <div className="field">
                <label htmlFor="firm">Family Office / Firm</label>
                <input id="firm" name="firm" type="text" placeholder="Firm or family office name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="name@firm.com" required />
              </div>
              <button className="submit" type="submit">Request Access</button>
            </form>
          </div>
        </section>
      </main>

      <footer aria-label="Footer">
        <div className="container foot">
          <div className="brand">
            <div className="logo" aria-label="XY4">XY4</div>
            <div className="brand-name" style={{color:'var(--muted)'}}>XY4</div>
          </div>
          <nav className="foot-links" aria-label="Footer Links">
            <a href="#home">About XY4</a>
            <a href="#technology">Technology</a>
            <a href="#thesis">Investment Thesis</a>
            <a href="#access">Contact</a>
            <a href="#" onClick={(e)=>{e.preventDefault(); alert('Privacy Policy — bespoke terms available upon request.');}}>Privacy Policy</a>
          </nav>
          <div className="copyr">© 2025 XY4 Ltd. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
