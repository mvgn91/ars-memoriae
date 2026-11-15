import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const copy = readFileSync(new URL('../COPY-V3.md', import.meta.url), 'utf8');
const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
const approved = [...copy.matchAll(/^> (.+)$/gm)].map(match => match[1]).filter(line => !line.startsWith('Línea opcional') && !line.startsWith('Botón:')).map(line => line.replace(/\*\*/g, ''));
for (const line of approved) assert.ok(visible.includes(line), `Falta copy exacto: ${line}`);
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.equal((html.match(/<section\b/g) || []).length, 6);
const ids = ['sentido', 'que-es-ars', 'como-se-trabaja', 'quien-responde', 'contacto'];
for (const id of ids) {
  assert.ok(html.includes(`id="${id}"`), `Falta momento ${id}`);
  assert.ok(html.includes(`href="#${id}"`), `Falta enlace ${id}`);
}
assert.equal((html.match(/<details\b/g) || []).length, 2);
assert.equal((visible.match(/Por ejemplo/g) || []).length, 1);
assert.doesNotMatch(visible, /minutos?|horas?|duración|veinte|Cuénteme qué guarda|Provisional|andamiaje|inmortalizada|expandible|una sola colección|la demostración/i);
assert.ok(html.includes('src="/armando-ibanez.webp"'));
assert.ok(existsSync(new URL('../dist/armando-ibanez.webp', import.meta.url)));
for (const step of ['Escuchar', 'Comprender', 'Acordar', 'Documentar']) assert.ok(html.includes(`<h3>${step}</h3>`));
for (const href of ['https://wa.me/523322621939', 'mailto:mvgnlabs@proton.me', 'https://mvgn.pages.dev']) assert.ok(html.includes(`href="${href}"`));
console.log(`V3 OK: ${approved.length} textos exactos; hero + 5 momentos; índice; 4 pasos; 2 FAQ; foto; 3 canales; sin duración ni copy retirado.`);
