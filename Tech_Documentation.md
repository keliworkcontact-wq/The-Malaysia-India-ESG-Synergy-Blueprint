# Technical Documentation: HUL ESG & Malaysia-India Strategic Portfolio

## 1. Technical Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 (Vite) | Core application structure and UI logic. |
| **Styling** | Tailwind CSS 4 | Utility-first styling for modern minimalist design. |
| **Animations** | Framer Motion | Smooth transitions and interactive UI elements. |
| **Icons** | Lucide-React | Consistent, accessible SVG iconography. |
| **Data Visualization** | Recharts | 5-year trend analysis and ESG metric charts. |
| **Process Mapping** | ReactFlow | Interactive, responsive hierarchical mindmap. |
| **Data Parsing** | PapaParse | Client-side CSV parsing for ESG audit data. |

## 2. CSV Parsing Logic

The application utilizes `PapaParse` for robust handling of the HUL ESG dataset.

### Parsing Strategy:
1.  **Header Detection**: The CSV contains multiple sub-tables (Climate, Waste, Safety). The parser will scan for specific keywords (e.g., "CLIMATE ACTION", "SAFETY AT WORK") to identify data blocks.
2.  **Normalization**: 
    *   Remove commas from numeric strings (e.g., `"121,730"` -> `121730`).
    *   Handle percentage signs (e.g., `"93%"` -> `0.93`).
    *   Map Financial Years (e.g., `"FY 2024-25"`) to standardized date objects or labels.
3.  **Data Structure**:
    ```typescript
    interface ESGMetric {
      category: string;
      metric: string;
      values: { [year: string]: number | string };
      unit: string;
    }
    ```

## 3. Component Architecture

### Core Layout
- `Navbar`: Fixed top-center navigation (Macro, Audit, Localization, Conclusion).
- `HomeButton`: Fixed top-left branding.
- `SectionContainer`: Framer Motion wrapped containers for smooth scroll entry.

### Feature Components
- `InteractiveMindmap`: ReactFlow implementation of the project hierarchy.
- `AuditDashboard`: Recharts-based visualization of HUL's 5-year ESG trends.
- `LocalizationStrategy`: Interactive cards detailing Malaysia-specific ESG proposals.

## 4. Design System

- **Primary Green**: `#2D5A27` (Sustainability)
- **Primary Blue**: `#1B365D` (Corporate)
- **Typography**: Inter (Sans-serif) for readability, JetBrains Mono for data points.
- **Imagery**: Dynamic Unsplash placeholders via `https://images.unsplash.com/photo-...`.
