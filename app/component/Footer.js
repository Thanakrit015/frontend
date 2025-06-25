export default function Footer() {
    return (
         <footer className="bg-dark text-white py-4 mt-auto">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <p className="mb-2 mb-md-0">
                    &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
                </p>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                        <a href="/about" className="text-white text-decoration-none">About</a>
                    </li>
                    <li className="list-inline-item mx-3">
                        <a href="/contact" className="text-white text-decoration-none">Contact</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/privacy" className="text-white text-decoration-none">Privacy</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
