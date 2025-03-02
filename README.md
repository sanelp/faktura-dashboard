# Faktura Dashboard

## Beskrivelse
Faktura Dashboard er et prosjekt for å hente ut og vise fakturadata ved hjelp av OCR (Optical Character Recognition). Brukeren kan laste opp en faktura som bilde, og systemet vil analysere bildet og presentere fakturainformasjonen i et lettlest format.

## Funksjoner
- Laster opp fakturaer som bilder
- Bruker OCR til å tolke tekst fra fakturaene
- Viser fakturadetaljer i en strukturert visning
- Eksporterer data til JSON og CSV
- Enkel og responsiv brukeropplevelse

## Teknologier
- **Python** for OCR-behandling
- **React** for frontend-grensesnitt
- **Pytesseract** for tekstgjenkjenning
- **CSV og JSON** for lagring av data

## Installasjon
### Krav
- **Node.js** (for React-frontend)
- **Python 3** (for OCR-behandling)
- **Pytesseract** installert

### Oppsett
1. **Klon dette repositoriet:**
   ```bash
   git clone <repository-url>
   cd faktura-dashboard
   ```

2. **Installer avhengigheter for frontend:**
   ```bash
   cd frontend
   npm install
   ```

3. **Installer avhengigheter for backend:**
   ```bash
   pip install -r requirements.txt
   ```

## Bruk
1. **Start OCR-serveren:**
   ```bash
   python server.py
   ```

2. **Start frontend:**
   ```bash
   cd frontend
   npm start
   ```

3. **Åpne nettleseren og naviger til:**
   ```
   http://localhost:3000
   ```

## Videre arbeid
- Forbedre OCR-nøyaktigheten
- Legge til flere fakturaformater
- Utvide med databaselagring
- Implementere autentisering for sikker tilgang

---
Dette prosjektet er fortsatt under utvikling. Tilbakemeldinger og bidrag er velkomne!

