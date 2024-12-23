import React from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

interface NavItem {
  label: string;
  section: string;
}

const navItems: NavItem[] = [
  { label: "Home", section: "hero" },
  { label: "Skills", section: "skills" },
  { label: "Portfolio", section: "portfolio" },
  { label: "Contact", section: "contact" },
];

const Navigation = ({ onNavigate = () => {} }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white border-b z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <div className="text-2xl font-bold">Portfolio</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Button
              key={item.section}
              variant="ghost"
              onClick={() => handleNavClick(item.section)}
              className="text-base font-medium hover:text-primary"
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-white">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.section}
                    variant="ghost"
                    onClick={() => handleNavClick(item.section)}
                    className="w-full justify-start text-base font-medium"
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
