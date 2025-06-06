"use client";
import { FC, useEffect } from "react";
import Button from "@/components/Button";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";


const navItems = [
  {
    href: "#intro",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#faqs",
    label: "Faqs",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Footer: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  const handleClickNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = new URL(e.currentTarget.href, window.location.href);
    const hash = url.hash;

    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded full bg-green-400 animate-bounce"></div>
            <span className="uppercase">One spot available for next month</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="text-4xl md:text-7xl lg:text-8xl mt-8 "
                ref={scope}
              >
                Enough talk. Let&apos;s make something great together.
              </h2>
              <Button
                variant="secondary"
                className="mt-8"
                iconAfter={
                  <div className="size-6 overflow-hidden">
                    <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                }
              >
                jjorgemachuca@gmail.com
              </Button>
            </div>
            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label} onClick={handleClickNavItem}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
                <div className="flex items-center justify-end gap-4">
                  <a
                    href="https://github.com/Machvca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="w-8 h-8 text-white hover:text-red-orange-500" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/machvca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="w-8 h-8 text-white hover:text-red-orange-500" />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Jorge Machuca &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
