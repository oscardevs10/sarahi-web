// Genera las ilustraciones SVG de la galería: node scripts/make-art.mjs
import { writeFileSync } from 'node:fs';

let seed = 7;
const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
const out = (name, body, w = 800, h = 520) =>
  writeFileSync(`public/img/${name}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">${body}</svg>`);
const stars = (n, maxY, w = 800) =>
  Array.from({ length: n }, () => `<circle cx="${(rnd() * w).toFixed(0)}" cy="${(rnd() * maxY).toFixed(0)}" r="${(0.6 + rnd() * 1.6).toFixed(1)}" fill="#fff" opacity="${(0.4 + rnd() * 0.6).toFixed(2)}"/>`).join('');

// Montañas al amanecer con lago
out('montanas', `
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7dd3fc"/><stop offset=".6" stop-color="#fbcfe8"/><stop offset="1" stop-color="#fed7aa"/></linearGradient>
  <linearGradient id="lake" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#60a5fa"/><stop offset="1" stop-color="#1e3a8a"/></linearGradient>
  <linearGradient id="m1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6366f1"/><stop offset="1" stop-color="#312e81"/></linearGradient>
  <linearGradient id="m2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e3a8a"/><stop offset="1" stop-color="#172554"/></linearGradient>
</defs>
<rect width="800" height="520" fill="url(#sky)"/>
<circle cx="600" cy="170" r="60" fill="#fde68a"/><circle cx="600" cy="170" r="90" fill="#fde68a" opacity=".25"/>
<g fill="#fff" opacity=".85"><ellipse cx="180" cy="90" rx="70" ry="18"/><ellipse cx="220" cy="75" rx="45" ry="22"/><ellipse cx="520" cy="60" rx="55" ry="14"/><ellipse cx="550" cy="50" rx="30" ry="16"/></g>
<path d="M0 300 110 170l70 70 110-150 120 150 80-70 130 140 90-90 90 80v220H0z" fill="url(#m1)"/>
<path d="M290 90l-40 50 22-8 18 18 16-22 26 10zM110 170l-26 30 16-4 10 12 12-14 16 6zM670 200l-22 26 14-6 8 10 10-12 12 4z" fill="#eef2ff"/>
<path d="M0 340 150 230l120 110 130-120 150 140 110-80 140 100v140H0z" fill="url(#m2)"/>
<path d="M0 360 120 300l120 50 150-60 140 60 130-40 140 50v160H0z" fill="#166534"/>
<path d="M0 380h800v140H0z" fill="url(#lake)"/>
<g fill="#fde68a" opacity=".6"><rect x="560" y="392" width="80" height="4" rx="2"/><rect x="575" y="410" width="50" height="4" rx="2"/><rect x="585" y="428" width="30" height="3" rx="1.5"/></g>
<g stroke="#bfdbfe" stroke-width="3" stroke-linecap="round" opacity=".5"><path d="M80 420h90M260 450h60M420 480h110M140 490h50"/></g>
<g fill="#14532d">${Array.from({ length: 14 }, (_, i) => { const x = i * 60 + 10 + rnd() * 20, h = 30 + rnd() * 25; return `<path d="M${x} 385l12-${h} 12 ${h}z"/>`; }).join('')}</g>
<g stroke="#1e1b4b" stroke-width="3" fill="none" stroke-linecap="round"><path d="M330 130q8-8 16 0 8-8 16 0"/><path d="M380 110q6-6 12 0 6-6 12 0"/><path d="M300 160q5-5 10 0 5-5 10 0"/></g>
`);

// Playa al atardecer
out('playa', `
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7c3aed"/><stop offset=".45" stop-color="#f472b6"/><stop offset="1" stop-color="#fdba74"/></linearGradient>
  <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2563eb"/><stop offset="1" stop-color="#0e7490"/></linearGradient>
  <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#f59e0b"/></linearGradient>
</defs>
<rect width="800" height="300" fill="url(#sky)"/>
${stars(18, 110)}
<circle cx="400" cy="270" r="95" fill="#fb7185"/><circle cx="400" cy="270" r="75" fill="#fde047"/>
<g fill="#fff" opacity=".5"><ellipse cx="160" cy="120" rx="80" ry="10"/><ellipse cx="640" cy="90" rx="90" ry="9"/></g>
<rect y="270" width="800" height="140" fill="url(#sea)"/>
<g fill="#fde047" opacity=".75"><rect x="320" y="285" width="160" height="6" rx="3"/><rect x="345" y="305" width="110" height="5" rx="2.5"/><rect x="365" y="325" width="70" height="4" rx="2"/><rect x="380" y="343" width="40" height="3" rx="1.5"/></g>
<g stroke="#bae6fd" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"><path d="M40 330q20-10 40 0t40 0M600 310q20-10 40 0t40 0M180 370q20-10 40 0t40 0M560 380q20-10 40 0t40 0"/></g>
<path d="M0 395q110-30 230-8t260 0 310-12v145H0z" fill="#e0f2fe" opacity=".9"/>
<path d="M0 405q110-25 230-5t260 0 310-10v130H0z" fill="url(#sand)"/>
<g fill="#fbbf24" opacity=".6">${Array.from({ length: 40 }, () => `<circle cx="${(rnd() * 800).toFixed(0)}" cy="${(420 + rnd() * 100).toFixed(0)}" r="2"/>`).join('')}</g>
<g transform="translate(110 470)">
  <path d="M0 0q20-120 10-240" stroke="#78350f" stroke-width="14" fill="none" stroke-linecap="round"/>
  <g fill="#15803d"><path d="M10-240q-70-30-120 20 60-20 120-20z"/><path d="M10-240q70-35 125 15-62-18-125-15z"/><path d="M10-240q-20-60-80-70 50 25 80 70z"/><path d="M10-240q30-60 90-60-55 20-90 60z"/><path d="M10-240q-40 20-50 90 25-60 50-90z"/><path d="M10-240q45 25 50 95-22-62-50-95z"/></g>
  <circle cx="0" cy="-232" r="8" fill="#78350f"/><circle cx="16" cy="-228" r="8" fill="#78350f"/>
</g>
<g transform="translate(700 460) scale(.8)">
  <path d="M0 0q-18-110-4-220" stroke="#78350f" stroke-width="14" fill="none" stroke-linecap="round"/>
  <g fill="#166534"><path d="M-4-220q-70-30-120 20 60-20 120-20z"/><path d="M-4-220q70-35 125 15-62-18-125-15z"/><path d="M-4-220q-20-60-80-70 50 25 80 70z"/><path d="M-4-220q30-60 90-60-55 20-90 60z"/></g>
</g>
<g transform="translate(520 470)">
  <path d="M0 0v-110" stroke="#fff" stroke-width="5"/>
  <path d="M-80-100q80-70 160 0z" fill="#ec4899"/><path d="M-80-100q27-60 53 0zM27-100q27-60 53 0z" fill="#fff"/>
</g>
<circle cx="300" cy="470" r="22" fill="#fff"/><path d="M278 470h44M300 448q-12 22 0 44" stroke="#ef4444" stroke-width="6" fill="none"/>
<g stroke="#1e1b4b" stroke-width="3" fill="none" stroke-linecap="round"><path d="M560 150q8-8 16 0 8-8 16 0"/><path d="M610 130q6-6 12 0 6-6 12 0"/></g>
`);

// Ciudad de noche
{
  seed = 11;
  let b = '', r = '', x = 0;
  while (x < 800) {
    const w = 50 + rnd() * 60, h = 140 + rnd() * 250, y = 430 - h;
    const shade = ['#1e1b4b', '#27235e', '#312e81'][Math.floor(rnd() * 3)];
    b += `<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${w.toFixed(0)}" height="${h.toFixed(0)}" fill="${shade}"/>`;
    if (rnd() > 0.6) b += `<rect x="${(x + w / 2 - 2).toFixed(0)}" y="${(y - 30).toFixed(0)}" width="4" height="30" fill="${shade}"/><circle cx="${(x + w / 2).toFixed(0)}" cy="${(y - 32).toFixed(0)}" r="4" fill="#f43f5e"/>`;
    for (let wy = y + 14; wy < 420; wy += 22)
      for (let wx = x + 10; wx < x + w - 12; wx += 16)
        if (rnd() > 0.45) {
          const c = rnd() > 0.85 ? '#f9a8d4' : '#fde047';
          b += `<rect x="${wx.toFixed(0)}" y="${wy.toFixed(0)}" width="8" height="11" rx="1.5" fill="${c}"/>`;
          if (wy > 330) r += `<rect x="${wx.toFixed(0)}" y="${(860 - wy - 11).toFixed(0)}" width="8" height="4" fill="${c}" opacity=".35"/>`;
        }
    x += w + 3;
  }
  out('ciudad', `
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b0620"/><stop offset=".7" stop-color="#2e1065"/><stop offset="1" stop-color="#9d174d"/></linearGradient>
  <linearGradient id="water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e1b4b"/><stop offset="1" stop-color="#0b0620"/></linearGradient>
</defs>
<rect width="800" height="520" fill="url(#sky)"/>
${stars(80, 260)}
<circle cx="650" cy="90" r="40" fill="#fef3c7"/><circle cx="668" cy="78" r="36" fill="#140b30"/>
<circle cx="650" cy="90" r="70" fill="#fef3c7" opacity=".08"/>
<path d="M120 60l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#fff"/>
<path d="M500 40 420 90" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>
${b}
<rect y="430" width="800" height="90" fill="url(#water)"/>
${r}
<g stroke="#a5b4fc" stroke-width="2" stroke-linecap="round" opacity=".3"><path d="M40 470h80M300 490h120M560 465h90M680 500h60"/></g>
`);
}

// Espacio
seed = 23;
out('espacio', `
<defs>
  <radialGradient id="bg" cx=".3" cy=".3" r="1"><stop offset="0" stop-color="#4c1d95"/><stop offset=".5" stop-color="#1e1b4b"/><stop offset="1" stop-color="#030014"/></radialGradient>
  <radialGradient id="neb" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ec4899" stop-opacity=".55"/><stop offset="1" stop-color="#ec4899" stop-opacity="0"/></radialGradient>
  <linearGradient id="pl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fdba74"/><stop offset=".5" stop-color="#f472b6"/><stop offset="1" stop-color="#7c3aed"/></linearGradient>
  <linearGradient id="ring" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fde68a" stop-opacity=".2"/><stop offset=".5" stop-color="#fde68a"/><stop offset="1" stop-color="#fde68a" stop-opacity=".2"/></linearGradient>
</defs>
<rect width="800" height="520" fill="url(#bg)"/>
<ellipse cx="600" cy="380" rx="260" ry="160" fill="url(#neb)"/>
<ellipse cx="160" cy="120" rx="200" ry="110" fill="url(#neb)" opacity=".6"/>
${stars(160, 520)}
<g fill="#fff"><path d="M120 400l5 13 13 5-13 5-5 13-5-13-13-5 13-5z"/><path d="M700 80l4 10 10 4-10 4-4 10-4-10-10-4 10-4z"/></g>
<path d="M620 150 520 210" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/><circle cx="622" cy="149" r="4" fill="#fff"/>
<g transform="translate(360 280) rotate(-18)">
  <ellipse rx="190" ry="44" fill="none" stroke="url(#ring)" stroke-width="16" opacity=".9"/>
  <circle r="110" fill="url(#pl)"/>
  <path d="M-105-30q105 20 210 0M-110 10q110 22 220 0M-95 50q95 18 190 0" stroke="#fff" stroke-width="8" fill="none" opacity=".18"/>
  <path d="M-190 0a190 44 0 0 0 380 0" fill="none" stroke="url(#ring)" stroke-width="16"/>
</g>
<circle cx="640" cy="120" r="26" fill="#cbd5e1"/><circle cx="632" cy="112" r="6" fill="#94a3b8"/><circle cx="650" cy="128" r="4" fill="#94a3b8"/>
<g transform="translate(150 330) rotate(35)">
  <path d="M0-50q18 20 18 60H-18q0-40 18-60z" fill="#f8fafc"/>
  <circle cy="-8" r="8" fill="#38bdf8" stroke="#1e3a8a" stroke-width="3"/>
  <path d="M-18 10l-12 16h12zM18 10l12 16H18z" fill="#ef4444"/>
  <path d="M-10 12q10 40 10 40 0 0 10-40z" fill="#fbbf24"/>
</g>
`);

// Campo de flores
seed = 31;
const flower = (x, y, s, c) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0v60" stroke="#15803d" stroke-width="4"/><path d="M0 40q-18-4-20-18 16 2 20 18z" fill="#22c55e"/>${[0, 72, 144, 216, 288].map((a) => `<ellipse rx="9" ry="16" cy="-14" fill="${c}" transform="rotate(${a})"/>`).join('')}<circle r="8" fill="#fde047"/></g>`;
const colors = ['#f472b6', '#fb7185', '#a78bfa', '#fff', '#f97316', '#38bdf8'];
out('flores', `
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bae6fd"/><stop offset="1" stop-color="#fef9c3"/></linearGradient>
  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#86efac"/><stop offset="1" stop-color="#16a34a"/></linearGradient>
</defs>
<rect width="800" height="520" fill="url(#sky)"/>
<g transform="translate(140 110)"><circle r="55" fill="#fde047"/><g stroke="#fde047" stroke-width="6" stroke-linecap="round">${Array.from({ length: 12 }, (_, i) => { const a = (i * Math.PI) / 6; return `<path d="M${(Math.cos(a) * 70).toFixed(0)} ${(Math.sin(a) * 70).toFixed(0)}L${(Math.cos(a) * 88).toFixed(0)} ${(Math.sin(a) * 88).toFixed(0)}"/>`; }).join('')}</g></g>
<g fill="#fff"><ellipse cx="520" cy="90" rx="70" ry="22"/><ellipse cx="560" cy="72" rx="42" ry="26"/><ellipse cx="490" cy="80" rx="30" ry="18"/><ellipse cx="700" cy="150" rx="50" ry="14"/></g>
<path d="M0 300q200-60 400-10t400-20v250H0z" fill="#4ade80"/>
<path d="M0 340q200-40 420 0t380-10v190H0z" fill="url(#g1)"/>
${Array.from({ length: 34 }, () => 330 + rnd() * 170).sort((a, b) => a - b).map((y) => flower((rnd() * 800).toFixed(0), y.toFixed(0), (0.5 + ((y - 330) / 170) * 0.9).toFixed(2), colors[Math.floor(rnd() * colors.length)])).join('')}
<g transform="translate(600 250)"><ellipse rx="14" ry="9" fill="#fbbf24"/><path d="M-6-9v18M2-9v18" stroke="#1c1917" stroke-width="3"/><ellipse cx="-4" cy="-14" rx="10" ry="7" fill="#fff" opacity=".8"/><ellipse cx="6" cy="-13" rx="8" ry="6" fill="#fff" opacity=".8"/></g>
<g transform="translate(300 220)"><path d="M0 0q-20-20-30 0 10 20 30 0z" fill="#f472b6"/><path d="M0 0q20-20 30 0-10 20-30 0z" fill="#a78bfa"/><path d="M0-8v16" stroke="#1c1917" stroke-width="3" stroke-linecap="round"/></g>
`);

console.log('Ilustraciones generadas');
