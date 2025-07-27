import Link from 'next/link';
import { UserCircle, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background text-foreground">
      <div className="container mx-auto py-12 px-4">
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Brand Card */}
          <div className="bg-card border border-border rounded-2xl shadow p-6 flex flex-col items-center space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <UserCircle className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">Accountable</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Building trust, one line of code at a time.
            </p>
          </div>

          {/* Quick Links Card */}
          <div className="bg-card border border-border rounded-2xl shadow p-6 flex flex-col items-center space-y-4">
            <h4 className="font-headline font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links Card */}
          <div className="bg-card border border-border rounded-2xl shadow p-6 flex flex-col items-center space-y-4">
            <h4 className="font-headline font-semibold text-lg">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Accountable. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
