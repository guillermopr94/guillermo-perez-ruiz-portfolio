import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { SOCIAL_LINKS } from '../constants';

describe('Footer Component', () => {
  it('should render without crashing', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should display the brand logo with correct text', () => {
    render(<Footer />);
    const brandElement = screen.getByText(/GPR/);
    expect(brandElement).toBeInTheDocument();
    expect(screen.getByText(/\.dev/)).toBeInTheDocument();
  });

  it('should render the tagline', () => {
    render(<Footer />);
    const tagline = screen.getByText(/Tech Lead & Senior Full-Stack Engineer/i);
    expect(tagline).toBeInTheDocument();
  });

  it('should render all social links', () => {
    render(<Footer />);
    SOCIAL_LINKS.forEach((link) => {
      const linkElement = screen.getByLabelText(link.name);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', link.url);
      expect(linkElement).toHaveAttribute('target', '_blank');
      expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('should display the current year in copyright', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(
      new RegExp(`© ${currentYear} Guillermo Pérez Ruiz`),
    );
    expect(copyright).toBeInTheDocument();
  });

  it('should display the "Let\'s Connect" heading', () => {
    render(<Footer />);
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
  });

  it('should have accessibility attributes for social links', () => {
    render(<Footer />);
    const socialLinks = screen.getAllByRole('link');
    const externalLinks = socialLinks.filter(
      (link) => link.getAttribute('target') === '_blank',
    );

    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAttribute('aria-label');
    });
  });

  it('should render the tech stack mention', () => {
    render(<Footer />);
    expect(screen.getByText(/Built with React, Tailwind/)).toBeInTheDocument();
  });
});
