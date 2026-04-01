[span_7](start_span)/* MODULE: HOME SLIDER[span_7](end_span) */
const slides = [
    { title: "Midnight Silk Gown", desc: "Hand-stitched premium elegance." },
    { title: "Executive Slim-Fit", desc: "Professional elegance for the boardroom." },
    { title: "Summer Boho Line", desc: "Lightweight and breathable fabrics." }
];

let currentSlide = 0;

function updateSlider() {
    const titleEl = document.getElementById('slide-title');
    const descEl = document.getElementById('slide-desc');
    if (titleEl && descEl) {
        titleEl.innerText = slides[currentSlide].title;
        descEl.innerText = slides[currentSlide].desc;
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

if (document.getElementById('slider-container')) {
    setInterval(nextSlide, 4000); [span_8](start_span)// Auto-advance every 4s[span_8](end_span)
}

[span_9](start_span)/* MODULE: STAR RATINGS[span_9](end_span) */
function setRating(stars) {
    alert(`Thank you! You rated this product ${stars} stars.`);
}

[span_10](start_span)/* MODULE: APPOINTMENT FORM[span_10](end_span) */
function handleAppointment(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you ${name}! Your appointment was received.`);
    event.target.reset();
}
