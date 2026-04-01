/* GLOBAL STYLES */
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');

:root {
    --brand-red: #b31d24;
    --onyx-black: #111111;
    --header-height: 140px;
}

body { margin: 0; font-family: 'Montserrat', sans-serif; background: #fff; color: var(--onyx-black); }

[span_2](start_span)/* MARQUEE FEATURE[span_2](end_span) */
.promo-bar { background: var(--brand-red); color: white; height: 35px; display: flex; align-items: center; overflow: hidden; position: relative; }
.marquee-text { position: absolute; white-space: nowrap; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; animation: scrolling 20s linear infinite; }
@keyframes scrolling { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }

[span_3](start_span)/* HEADER & NAV[span_3](end_span) */
.master-header { position: fixed; top: 0; width: 100%; z-index: 9999; background: white; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
header { padding: 20px; text-align: center; border-bottom: 1px solid #eee; }
.logo { font-family: 'Bodoni Moda', serif; font-size: 28px; text-transform: uppercase; letter-spacing: 5px; font-weight: 700; color: black; text-decoration: none; }
nav { background: #333; padding: 10px 0; text-align: center; }
nav a { color: white; text-decoration: none; margin: 0 20px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; }

/* MAIN CONTENT */
main { margin-top: var(--header-height); padding: 40px 20px; min-height: 60vh; }

[span_4](start_span)/* TRUSTEE CARDS[span_4](end_span) */
.trustee-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; max-width: 1200px; margin: auto; }
.trustee-card { border: 1px solid #eee; padding: 15px; text-align: center; border-radius: 5px; }
.trustee-card img { width: 100%; height: 250px; object-fit: cover; margin-bottom: 10px; }

/* FOOTER */
footer { background: #222; color: white; text-align: center; padding: 30px; font-size: 12px; }
