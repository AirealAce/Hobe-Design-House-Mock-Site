import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, ChevronDown } from "lucide-react";

export default function Header() {
  const menuItems = [
    { label: "Login/Register", href: "/auth" },
    { label: "Contact Us", href: "/contact" },
    { label: "Submit a Ticket", href: "/support" },
  ];

  const resourceItems = [
    { label: "Documentation", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">Hobe Design</a>
        </Link>

        <nav className="flex items-center gap-6">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-sm font-medium hover:text-primary">
                {item.label}
              </a>
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                Resources <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {resourceItems.map((item) => (
                <DropdownMenuItem key={item.href}>
                  <Link href={item.href}>
                    <a className="w-full">{item.label}</a>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  );
}