function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    © 2024 Jessica Salemme
                </p>
                <p className="footer-text">
                    This work is licensed under a{' '}
                    <a
                        href="https://creativecommons.org/licenses/by/4.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Creative Commons Attribution 4.0 International License
                    </a>
                </p>
                <div className="ai-disclosure">
                    <a href="https://www.aihonestybadge.com" target="_blank" rel="noopener">
                        <img src="https://www.aihonestybadge.com/badges/ai-assisted.svg" alt="AI Assisted Badge" style={{ maxWidth: '190px', height: 'auto' }} />
                    </a>
                    <p className="footer-text ai-disclosure-text">
                        AI assistance was used during the development of this portfolio to help problem-solve when stuck on code issues. AI tools provided guidance on debugging and implementation, while the design and content are my own work.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
