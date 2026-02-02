import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Since constants.tsx uses React components (icons), we need to mock React
// for the Node environment if we import it directly.
// Alternatively, we can extract the data if it becomes too complex.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Import data (we'll use a trick to ignore React components if needed)
// For now, let's try importing it directly with tsx
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
      <h3>${cat.name}</h3>
      <div class="skill-list">
        ${cat.skills.map((skill) => `<span class="skill-item">${skill}</span>`).join(', ')}
      </div>
    </div>
  `,
  ).join('');

  const contactHTML = SOCIAL_LINKS.map(
    (link) => `
    <div class="contact-link">
      <strong>${link.name}:</strong> ${link.url.replace('mailto:', '').replace('https://', '')}
    </div>
  `,
  ).join('');

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
          --text: #334155;
          --text-light: #64748b;
          --border: #e2e8f0;
        }
        * {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact;
        }
        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.5;
          color: var(--text);
          margin: 0;
          padding: 0;
          font-size: 10pt;
        }
        .container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
        }
        header {
          border-bottom: 2px solid var(--primary);
          padding-bottom: 20px;
          margin-bottom: 30px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .header-main h1 {
          margin: 0;
          font-size: 28pt;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: -0.025em;
        }
        .header-main h2 {
          margin: 5px 0 0;
          font-size: 14pt;
          font-weight: 600;
          color: var(--accent);
        }
        .header-contact {
          text-align: right;
          font-size: 9pt;
          color: var(--text-light);
        }
        .summary {
          margin-bottom: 30px;
          font-style: italic;
          color: var(--text);
          border-left: 4px solid var(--accent);
          padding-left: 15px;
        }
        section h2 {
          font-size: 16pt;
          font-weight: 700;
          color: var(--primary);
          border-bottom: 1px solid var(--border);
          padding-bottom: 5px;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .experience-item {
          margin-bottom: 25px;
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          font-weight: 700;
          font-size: 11pt;
          color: var(--primary);
        }
        .exp-company {
          font-weight: 600;
          color: var(--accent);
          margin-bottom: 5px;
        }
        .exp-description {
          margin: 5px 0;
          font-weight: 500;
        }
        .exp-achievements {
          margin: 5px 0;
          padding-left: 20px;
        }
        .exp-achievements li {
          margin-bottom: 3px;
        }
        .exp-tech {
          margin-top: 8px;
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .tech-tag {
          background: #f1f5f9;
          color: #475569;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 8pt;
          font-weight: 600;
          border: 1px solid #e2e8f0;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .skill-category h3 {
          font-size: 10pt;
          margin: 0 0 5px;
          color: var(--primary);
          text-transform: uppercase;
        }
        .skill-list {
          font-size: 9pt;
          color: var(--text-light);
        }
        @media print {
          body {
            padding: 0;
          }
          .container {
            padding: 20px;
            max-width: 100%;
          }
          .no-print {
            display: none;
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
          <h2>Experience</h2>
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
  console.log('PDF generated successfully at:', outputPath);
}

run().catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
