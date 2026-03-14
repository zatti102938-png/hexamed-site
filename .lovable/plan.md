

## Plan: Complete Site Clone with Image Structure and Missing Pages

### Gap Analysis (Original vs Current Clone)

| Page | Original URL | Current Clone | Status |
|------|-------------|---------------|--------|
| Home | `/` | `/` | Exists, needs image placeholders |
| Produtos (Esaote) | `/produtos/` | `/solucoes` | Exists, different URL |
| Serviços Hub | `/servicos` | `/servicos` | Exists |
| Manutenção | `/manutencao-de-ressonancia-magnetica/` | `/servicos/manutencao` | Exists, different URL |
| Instalação | `/desinstalacao-e-instalacao-de-ressonancia-magnetica/` | `/servicos/instalacao` | Exists |
| Contratos | `/contratos-de-manutencao/` | `/servicos/contratos` | Exists |
| Reparo | `/reparo-de-pecas-ressonancia-magnetica/` | `/servicos/reparo` | Exists |
| Estrutura | `/estrutura/` | `/estrutura` | Exists |
| Contato | `/contato/` | `/contato` | Exists |
| Blog | `/blog/` | Not created | **MISSING** |
| Apoio | `/apoio/` | Not created | **MISSING** |
| HexAI | `/hexai/` | `/solucoes/hexai` | Exists as solution subpage |
| Veterinário | `/Veterinario` | `/solucoes/veterinario` | Exists as solution subpage |
| Visita Técnica | `/visita-tecnica/` | `/servicos/visita-tecnica` | Exists |
| Produtos Mindray | N/A (new) | `/produtos-mindray` | Exists |

### What Will Be Done

#### 1. Create Image Directory Structure
Set up the complete folder structure under `public/images/hexamedical/` with placeholder README files so the user knows exactly what images to upload per folder:

```text
public/images/hexamedical/
├── global/          (logo, favicon, shared backgrounds)
├── home/            (hero banner, product cards, service cards, testimonials, time hexa, CEO, blog thumbnails)
├── produtos/esaote/ (Magnifico Open, S-Scan, O-Scan, G-Scan product photos)
├── servicos/        (manutencao, contratos, instalacao, reparo, visita-tecnica)
├── estrutura/       (lab photos, facility photos)
├── veterinaria/     (Magnifico Vet, Vet-MR Grande, O-Scan Equine)
├── blog/            (article thumbnails)
├── mindray/
│   ├── detector-flat/
│   ├── digieye-330/
│   ├── digieye-350/
│   └── mobileye/
```

Each folder gets a `_IMAGE_MAP.md` file listing exactly which images are needed, with filenames and dimensions.

#### 2. Create Missing Pages

**Blog Hub** (`/blog`) -- listing page with article cards linking to individual posts. Content from the original site shows 4+ articles. Template: hero + grid of cards.

**Apoio** (`/apoio`) -- "Materiais de Apoio" page with embedded YouTube videos grid. Original has ~8+ tutorial videos about Esaote S-Scan usage.

**HexAI dedicated page** (`/hexai`) -- Currently exists as `/solucoes/hexai` but the original site has a dedicated landing page at `/hexai/` with a distinct full-page layout (hero with dark gradient, "Aumente sua produção em até 40%", compatibility section, pre-installation flow). Create a proper standalone page.

**Veterinário dedicated page** (`/area-veterinaria`) -- The original has a completely different header/nav for the vet section. Create a standalone page with the 3 vet products (Magnifico Vet, Vet-MR Grande, O-Scan Equine).

#### 3. Update Navigation to Match Original

Original nav structure:
- PRODUTOS (dropdown: RM products)
- SERVIÇOS (dropdown: service pages)
- ESTRUTURA
- BLOG
- APOIO
- CONTATO
- CTA button: "ÁREA VETERINÁRIA"

Update `navigation.ts` to add Apoio and keep Produtos Mindray as a sub-item or separate section.

#### 4. Add Routes in App.tsx

New routes:
- `/blog` -- BlogHub page
- `/apoio` -- Apoio page
- `/hexai` -- HexAI standalone page
- `/area-veterinaria` -- Veterinário standalone page

#### 5. Update All Components with Image Path Constants

Create `src/data/images.ts` with a centralized image map so every component references the correct path from `public/images/hexamedical/...`. This makes it trivial to swap in real images later -- change one file.

#### 6. Ensure Visual Consistency

- All hero sections use the same pattern (dark overlay + background image + centered title + subtitle)
- Cards use consistent border-radius, padding, hover effects
- CTAs use the primary orange color consistently
- Dark sections use `bg-dark-surface` + `text-white`

### Files to Create
- `public/images/hexamedical/global/_IMAGE_MAP.md`
- `public/images/hexamedical/home/_IMAGE_MAP.md`
- `public/images/hexamedical/produtos/esaote/_IMAGE_MAP.md`
- `public/images/hexamedical/servicos/_IMAGE_MAP.md`
- `public/images/hexamedical/estrutura/_IMAGE_MAP.md`
- `public/images/hexamedical/veterinaria/_IMAGE_MAP.md`
- `public/images/hexamedical/blog/_IMAGE_MAP.md`
- `public/images/hexamedical/mindray/detector-flat/_IMAGE_MAP.md`
- `public/images/hexamedical/mindray/digieye-330/_IMAGE_MAP.md`
- `public/images/hexamedical/mindray/digieye-350/_IMAGE_MAP.md`
- `public/images/hexamedical/mindray/mobileye/_IMAGE_MAP.md`
- `src/data/images.ts` (centralized image path map)
- `src/pages/BlogHub.tsx`
- `src/pages/Apoio.tsx`
- `src/pages/HexAIPage.tsx`
- `src/pages/AreaVeterinaria.tsx`

### Files to Edit
- `src/App.tsx` (add 4 new routes)
- `src/data/navigation.ts` (add Apoio, restructure to match original)
- `src/components/layout/Footer.tsx` (add Apoio link)
- `src/pages/Index.tsx` (reference image constants instead of inline gradients)
- `src/components/sections/BlogHighlight.tsx` (link to `/blog` routes)
- `src/components/sections/HexAIHighlight.tsx` (link to `/hexai`)

### Estimated Scope
~16 new files, ~6 edited files. All pages follow existing Layout + section component patterns.

