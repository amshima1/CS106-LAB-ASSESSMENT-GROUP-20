/* Footer Styles */
.main-footer {
    background-color: var(--brand-red);
    color: var(--pure-white);
    padding: 60px 20px 40px 20px;
    text-align: center;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
}

.newsletter h3 {
    font-family: 'Cinzel', serif;
    letter-spacing: 3px;
    margin-bottom: 20px;
    font-size: 1.2rem;
}

.newsletter-form {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}

.newsletter-form input {
    padding: 12px;
    border: 1px solid var(--pure-white);
    background: transparent;
    color: white;
    width: 70%;
    outline: none;
}

.newsletter-form input::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

.newsletter-form button {
    padding: 12px 20px;
    background-color: var(--pure-white);
    color: var(--brand-red);
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
}

.newsletter-form button:hover {
    background-color: #f0f0f0;
}

/* Social Media Handles */
.social-links {
    margin-bottom: 30px;
}

.social-links a {
    color: var(--pure-white);
    text-decoration: none;
    margin: 0 15px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: 0.3s;
}

.social-links a:hover {
    opacity: 0.7;
}

.social-links i {
    margin-right: 5px;
    font-size: 1.1rem;
}

.copyright {
    font-size: 0.7rem;
    letter-spacing: 1px;
    opacity: 0.8;
    margin-top: 20px;
}
