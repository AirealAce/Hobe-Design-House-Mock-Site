import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const menuItems = [
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const resourceItems = [
    { label: "Documentation", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Logo */}
          <Link href="/">
            <a className="text-xl font-bold text-primary">Hobe Design</a>
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-sm font-medium hover:text-primary transition-colors">
                {item.label}
              </a>
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                Resources <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {resourceItems.map((item) => (
                <DropdownMenuItem key={item.href}>
                  <Link href={item.href}>
                    <a className="w-full">{item.label}</a>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="icon" className="ml-2">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </nav>
      </div>
    </header>
  );
}