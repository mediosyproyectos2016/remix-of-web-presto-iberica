import csvData from './localizador-tiendas-2026.csv?raw';

export interface Distribuidor {
  id: number;
  nombre: string;
  direccion: string;
  codigoPostal: string;
  ciudad: string;
}

// Toggle to hide the entire localizador section
export const LOCALIZADOR_ENABLED = true;

function parseCSV(raw: string): Distribuidor[] {
  const lines = raw.split('\n');
  const results: Distribuidor[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Parse CSV line handling quoted fields with commas
    const fields: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        if (inQuotes && j + 1 < line.length && line[j + 1] === '"') {
          current += '"';
          j++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        fields.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    fields.push(current.trim());

    if (fields.length < 4) continue;

    const [nombre, direccionRaw, cpRaw, ciudad] = fields;
    const cp = cpRaw.replace(/\D/g, '').padStart(5, '0');

    // Clean address: remove trailing "CP CITY PROVINCE" suffix
    let direccion = direccionRaw;
    const cpNum = cpRaw.replace(/\D/g, '');
    if (cpNum) {
      // Find the CP number in the address and truncate
      const cpIndex = direccion.lastIndexOf(` ${cpNum} `);
      if (cpIndex > 0) {
        direccion = direccion.substring(0, cpIndex);
      } else {
        // Try without trailing space
        const cpIndex2 = direccion.lastIndexOf(` ${cpNum}`);
        if (cpIndex2 > 0 && cpIndex2 + cpNum.length + 1 >= direccion.length - 30) {
          direccion = direccion.substring(0, cpIndex2);
        }
      }
    }

    // Remove trailing dots and spaces
    direccion = direccion.replace(/[\s.]+$/, '');

    results.push({
      id: i,
      nombre,
      direccion,
      codigoPostal: cp,
      ciudad: ciudad.replace(/"/g, ''),
    });
  }

  return results;
}

export const distribuidores: Distribuidor[] = parseCSV(csvData);

export const buscarDistribuidores = (query: string): Distribuidor[] => {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();

  return distribuidores.filter(
    (d) =>
      d.codigoPostal.includes(normalizedQuery) ||
      d.ciudad.toLowerCase().includes(normalizedQuery)
  );
};
