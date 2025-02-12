// Footer.tsx
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t py-6">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        {/* Social Icons */}
        <div className="mb-4 flex space-x-4">
          <a
            href="https://github.com/KDasaradha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/dasaradha-rami-reddy-kesari-b8471417b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
        </div>
        {/* Footer Text */}
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kesari Dasaradh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
