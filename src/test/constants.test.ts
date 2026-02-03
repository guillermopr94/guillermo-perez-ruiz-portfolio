import { describe, it, expect } from 'vitest';
import {
  SOCIAL_LINKS,
  HERO_DATA,
  MANIFESTO_DATA,
  EXPERIENCE_DATA,
  SKILLS_DATA,
  PROJECTS_DATA,
} from '../../constants';

describe('Constants Validation', () => {
  describe('SOCIAL_LINKS', () => {
    it('should have at least one social link', () => {
      expect(SOCIAL_LINKS.length).toBeGreaterThan(0);
    });

    it('should have valid structure for each link', () => {
      SOCIAL_LINKS.forEach((link) => {
        expect(link).toHaveProperty('name');
        expect(link).toHaveProperty('url');
        expect(link).toHaveProperty('icon');
        expect(typeof link.name).toBe('string');
        expect(typeof link.url).toBe('string');
        expect(link.url).toMatch(/^(https?:\/\/|mailto:)/);
      });
    });

    it('should include expected social platforms', () => {
      const platforms = SOCIAL_LINKS.map((link) => link.name);
      expect(platforms).toContain('LinkedIn');
      expect(platforms).toContain('GitHub');
      expect(platforms).toContain('Email');
    });
  });

  describe('HERO_DATA', () => {
    it('should have all required fields', () => {
      expect(HERO_DATA).toHaveProperty('name');
      expect(HERO_DATA).toHaveProperty('title');
      expect(HERO_DATA).toHaveProperty('tagline');
      expect(HERO_DATA).toHaveProperty('description');
    });

    it('should have non-empty string values', () => {
      expect(HERO_DATA.name.length).toBeGreaterThan(0);
      expect(HERO_DATA.title.length).toBeGreaterThan(0);
      expect(HERO_DATA.tagline.length).toBeGreaterThan(0);
      expect(HERO_DATA.description.length).toBeGreaterThan(0);
    });
  });

  describe('MANIFESTO_DATA', () => {
    it('should have at least one manifesto item', () => {
      expect(MANIFESTO_DATA.length).toBeGreaterThan(0);
    });

    it('should have valid structure for each manifesto item', () => {
      MANIFESTO_DATA.forEach((item) => {
        expect(item).toHaveProperty('title');
        expect(item).toHaveProperty('description');
        expect(item).toHaveProperty('icon');
        expect(typeof item.title).toBe('string');
        expect(typeof item.description).toBe('string');
      });
    });
  });

  describe('EXPERIENCE_DATA', () => {
    it('should have at least one experience entry', () => {
      expect(EXPERIENCE_DATA.length).toBeGreaterThan(0);
    });

    it('should have valid structure for each experience', () => {
      EXPERIENCE_DATA.forEach((exp) => {
        expect(exp).toHaveProperty('id');
        expect(exp).toHaveProperty('role');
        expect(exp).toHaveProperty('company');
        expect(exp).toHaveProperty('period');
        expect(exp).toHaveProperty('description');
        expect(exp).toHaveProperty('achievements');
        expect(exp).toHaveProperty('techStack');
        expect(Array.isArray(exp.achievements)).toBe(true);
        expect(Array.isArray(exp.techStack)).toBe(true);
      });
    });

    it('should have non-empty achievements and tech stack', () => {
      EXPERIENCE_DATA.forEach((exp) => {
        expect(exp.achievements.length).toBeGreaterThan(0);
        expect(exp.techStack.length).toBeGreaterThan(0);
      });
    });
  });

  describe('SKILLS_DATA', () => {
    it('should have at least one skill category', () => {
      expect(SKILLS_DATA.length).toBeGreaterThan(0);
    });

    it('should have valid structure for each category', () => {
      SKILLS_DATA.forEach((category) => {
        expect(category).toHaveProperty('name');
        expect(category).toHaveProperty('icon');
        expect(category).toHaveProperty('skills');
        expect(Array.isArray(category.skills)).toBe(true);
        expect(category.skills.length).toBeGreaterThan(0);
      });
    });
  });

  describe('PROJECTS_DATA', () => {
    it('should have at least one project', () => {
      expect(PROJECTS_DATA.length).toBeGreaterThan(0);
    });

    it('should have valid structure for each project', () => {
      PROJECTS_DATA.forEach((project) => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('tags');
        expect(project).toHaveProperty('status');
        expect(Array.isArray(project.tags)).toBe(true);
      });
    });

    it('should have valid links when provided', () => {
      PROJECTS_DATA.forEach((project) => {
        if (project.link) {
          expect(project.link).toMatch(/^https?:\/\//);
        }
        if (project.repo) {
          expect(project.repo).toMatch(/^https?:\/\//);
        }
      });
    });
  });
});
