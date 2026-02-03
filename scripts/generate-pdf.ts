import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

import {
  HERO_DATA,
  EXPERIENCE_DATA,
  SKILLS_DATA,
  SOCIAL_LINKS,
} from '../constants';

const generateHTML = () => {
  const { name, title, description } = HERO_DATA;

  const experienceHTML = EXPERIENCE_DATA.map(
    (exp) => `
    <div class="experience-item">
      <div class="exp-header">
        <span class="exp-role">${exp.role}</span>
        <span class="exp-period">${exp.period}</span>
      </div>
      <div class="exp-company">${exp.company} | ${exp.location}</div>
      <p class="exp-description">${exp.description}</p>
      <ul class="exp-achievements">
        ${exp.achievements.map((ach) => `<li>${ach}</li>`).join('')}
      </ul>
      <div class="exp-tech">
        ${exp.techStack.map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
    </div>
  `,
  ).join('');

  const skillsHTML = SKILLS_DATA.map(
    (cat) => `
    <div class="skill-category">
      <h3>⚡ ${cat.name}</h3>
      <div class="skill-list">
        ${cat.skills.map((skill) => `<span class="skill-item">${skill}</span>`).join(' • ')}
      </div>
    </div>
  `,
  ).join('');

  // Create clickable contact links
  const contactHTML = SOCIAL_LINKS.map((link) => {
    const displayText = link.url
      .replace('mailto:', '')
      .replace('https://', '')
      .replace('www.', '');
    const icon =
      link.name === 'Email'
        ? '📧'
        : link.name === 'LinkedIn'
          ? '💼'
          : link.name === 'GitHub'
            ? '🐙'
            : link.name === 'Twitter'
              ? '🐦'
              : '🔗';
    return `
      <div class="contact-link">
        <span class="contact-icon">${icon}</span>
        <strong>${link.name}:</strong> 
        <a href="${link.url}" target="_blank">${displayText}</a>
      </div>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Resume - ${name}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
      <style>
        :root {
          --primary: #0f172a;
          --accent: #38bdf8;
          --secondary: #6366f1;
          --text: #334155;
          --text-light: #64748b;
          --border: #e2e8f0;
          --bg-light: #f8fafc;
        }
        * {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          color: var(--text);
          margin: 0;
          padding: 0;
          font-size: 10pt;
          background: white;
        }
        .container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
        }
        header {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          color: white;
          padding: 30px;
          margin: -40px -40px 30px -40px;
          border-radius: 0 0 20px 20px;
        }
        .header-main h1 {
          margin: 0;
          font-size: 32pt;
          font-weight: 800;
          color: white;
          letter-spacing: -0.025em;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header-main h2 {
          margin: 8px 0 0;
          font-size: 16pt;
          font-weight: 600;
          color: var(--accent);
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        .header-contact {
          margin-top: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          font-size: 9pt;
        }
        .contact-link {
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255,255,255,0.9);
        }
        .contact-icon {
          font-size: 12pt;
        }
        .contact-link a {
          color: var(--accent);
          text-decoration: none;
          font-weight: 600;
        }
        .contact-link a:hover {
          text-decoration: underline;
        }
        .summary {
          margin-bottom: 30px;
          font-style: italic;
          color: var(--text);
          background: var(--bg-light);
          border-left: 4px solid var(--accent);
          padding: 15px 20px;
          border-radius: 8px;
          line-height: 1.7;
        }
        section h2 {
          font-size: 18pt;
          font-weight: 700;
          color: var(--primary);
          border-bottom: 3px solid var(--accent);
          padding-bottom: 8px;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        section h2::before {
          content: '▸';
          color: var(--accent);
          font-size: 24pt;
        }
        .experience-item {
          margin-bottom: 25px;
          padding: 15px;
          background: var(--bg-light);
          border-radius: 10px;
          border-left: 4px solid var(--secondary);
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-weight: 700;
          font-size: 12pt;
          color: var(--primary);
          margin-bottom: 5px;
        }
        .exp-period {
          font-size: 9pt;
          color: var(--accent);
          font-weight: 600;
          background: white;
          padding: 2px 10px;
          border-radius: 12px;
          border: 1px solid var(--border);
        }
        .exp-company {
          font-weight: 600;
          color: var(--secondary);
          margin-bottom: 8px;
          font-size: 10.5pt;
        }
        .exp-description {
          margin: 8px 0;
          font-weight: 500;
          line-height: 1.6;
        }
        .exp-achievements {
          margin: 10px 0;
          padding-left: 20px;
        }
        .exp-achievements li {
          margin-bottom: 5px;
          line-height: 1.5;
        }
        .exp-tech {
          margin-top: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .tech-tag {
          background: white;
          color: var(--secondary);
          padding: 3px 10px;
          border-radius: 6px;
          font-size: 8pt;
          font-weight: 700;
          border: 1.5px solid var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .skill-category {
          background: var(--bg-light);
          padding: 15px;
          border-radius: 10px;
          border: 2px solid var(--border);
        }
        .skill-category h3 {
          font-size: 11pt;
          margin: 0 0 10px;
          color: var(--primary);
          font-weight: 700;
        }
        .skill-list {
          font-size: 9pt;
          color: var(--text);
          line-height: 1.8;
        }
        .skill-item {
          font-weight: 500;
        }
        @media print {
          body {
            padding: 0;
          }
          .container {
            padding: 20px;
            max-width: 100%;
          }
          a {
            color: var(--accent) !important;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <div class="header-main">
            <h1>${name}</h1>
            <h2>${title}</h2>
          </div>
          <div class="header-contact">
            ${contactHTML}
          </div>
        </header>

        <div class="summary">
          ${description}
        </div>

        <section>
          <h2>Professional Experience</h2>
          ${experienceHTML}
        </section>

        <section style="page-break-before: auto;">
          <h2>Skills & Expertise</h2>
          <div class="skills-grid">
            ${skillsHTML}
          </div>
        </section>
      </div>
    </body>
    </html>
  `;
};

async function run() {
  const executablePath = fs.existsSync(
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  )
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : undefined;

  console.log('Using executablePath:', executablePath || 'Default (Bundled)');

  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  const html = generateHTML();
  await page.setContent(html, { waitUntil: 'networkidle0' });

  const outputPath = path.join(rootDir, 'public', 'cv.pdf');

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    },
  });

  await browser.close();
  console.log('✅ PDF generated successfully at:', outputPath);
}

run().catch((err) => {
  console.error('❌ Error generating PDF:', err);
  process.exit(1);
});
