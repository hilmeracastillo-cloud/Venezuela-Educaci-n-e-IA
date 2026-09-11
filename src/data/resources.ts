export type ResourceFormat =
  | 'interactive'
  | 'infografia'
  | 'presentacion'
  | 'video'
  | 'resumen'
  | 'completo';

export interface ResourceItem {
  id: ResourceFormat;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  badgeColor: string;
  formatType: 'web' | 'pdf' | 'video' | 'presentation' | 'image';
  filePath: string;
  fallbackFileName: string;
  durationOrPages: string;
  highlights: string[];
  youtubeId?: string;
  youtubeUrl?: string;
}

export const WORK_RESOURCES: ResourceItem[] = [
  {
    id: 'interactive',
    title: 'Documento Interactivo',
    subtitle: 'Navegación Digital & Lectura Integral',
    description:
      'Lector editorial enriquecido con índice dinámico, notas al pie interactivas, referencias académicas enlazadas, búsqueda en tiempo real y tipografía adaptable.',
    badge: 'En Línea',
    badgeColor: 'bg-indigo-950 text-indigo-300 border-indigo-700/60',
    formatType: 'web',
    filePath: '',
    fallbackFileName: '',
    durationOrPages: 'Lectura completa',
    highlights: [
      '7 capítulos completos y apéndices regionales',
      'Buscador semántico instantáneo',
      'Modo lectura horizontal para teléfonos',
      'Notas al pie y referencias hipervinculadas',
    ],
  },
  {
    id: 'infografia',
    title: 'Infografía Síntesis',
    subtitle: 'Visualización Ejecutiva de 1 Página',
    description:
      'Mapa visual de alto impacto con los hallazgos críticos, el modelo NEMA-Venezuela, estadísticas clave y la hoja de ruta de implementación.',
    badge: '1 Página',
    badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-700/60',
    formatType: 'image',
    filePath: '/recursos/infografia-1-pagina.jpg',
    fallbackFileName: 'infografia-1-pagina.jpg',
    durationOrPages: '1 página (Infografía JPG)',
    highlights: [
      'Diagnóstico de la brecha y tormenta de oportunidades',
      'Esquema visual del modelo NEMA',
      'Cifras de factibilidad económica y técnica',
      'Visualización directa y descargable en alta resolución',
    ],
  },
  {
    id: 'presentacion',
    title: 'Presentación Oficial',
    subtitle: '35 Diapositivas de la Tesis (Septiembre 2026)',
    description:
      'Deck íntegro de 35 diapositivas de la investigación: diagnóstico del rezago escolar, fundamentación tecno-pedagógica (Bloom 2 Sigma, BKT, IRT), matrices de desarrollo regional y arquitectura de las 7 Oportunidades con Nodos NEMA.',
    badge: '35 Slides • Actualizado',
    badgeColor: 'bg-amber-950 text-amber-200 border-amber-600/70',
    formatType: 'presentation',
    filePath: '/recursos/presentacion-35-slides.pdf',
    fallbackFileName: 'presentacion-35-slides.pdf',
    durationOrPages: '35 diapositivas (PDF)',
    highlights: [
      '35 diapositivas completas actualizadas según anexo oficial',
      'Visor interactivo integrado para navegación diapositiva a diapositiva',
      'Descarga directa del documento en PDF horizontal de alta fidelidad',
      'Diagnóstico nacional, modelos globales y las 7 Oportunidades',
    ],
  },
  {
    id: 'video',
    title: 'Video Síntesis',
    subtitle: 'Recorrido Audiovisual de 7 Minutos',
    description:
      'Resumen audiovisual dinámico que condensa la tesis central, el contexto de emergencia educativa y la solución práctica asistida por inteligencia artificial.',
    badge: '7 Minutos • YouTube',
    badgeColor: 'bg-rose-950 text-rose-300 border-rose-700/60',
    formatType: 'video',
    filePath: '/recursos/video-resumen-7min.mp4',
    fallbackFileName: 'video-resumen-7min.mp4',
    youtubeId: 'v91urPdXtWc',
    youtubeUrl: 'https://youtu.be/v91urPdXtWc?si=eiQAG5ZQU_SNCxoo',
    durationOrPages: '7:00 min (Video)',
    highlights: [
      'Narrativa ejecutiva condensada de la investigación',
      'Reproductor embebido de alta definición en YouTube',
      'Modo pantalla completa y acceso multiplataforma',
      'Disponible directamente desde el canal oficial',
    ],
  },
  {
    id: 'resumen',
    title: 'Resumen Ejecutivo',
    subtitle: 'Documento Conciso de 4 Páginas',
    description:
      'Briefing técnico-político condensado para ministros, rectores, directores de escuela y organismos multilaterales que requieren conclusiones y propuestas inmediatas.',
    badge: '4 Páginas',
    badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-700/60',
    formatType: 'pdf',
    filePath: '/recursos/resumen-ejecutivo-4-paginas.pdf',
    fallbackFileName: 'resumen-ejecutivo-4-paginas.pdf',
    durationOrPages: '4 páginas (PDF Ejecutivo)',
    highlights: [
      'Diagnóstico situacional en 3 minutos de lectura',
      'Matriz de costos, fases y salvaguardas éticas',
      'Recomendaciones de política pública inmediata',
      'Formato editorial liviano y listo para imprimir',
    ],
  },
  {
    id: 'completo',
    title: 'Documento Completo',
    subtitle: 'Descarga Directa en PDF (~100 Páginas)',
    description:
      'Tesis exhaustiva con el aparato crítico íntegro, marco teórico, metodología comparada, apéndices regionales detallados y referencias bibliográficas académicas. La ejecución descarga directamente el archivo PDF.',
    badge: '~100 Páginas • Descarga',
    badgeColor: 'bg-purple-950 text-purple-200 border-purple-600/70',
    formatType: 'pdf',
    filePath: '/recursos/documento-completo-100-paginas.pdf',
    fallbackFileName: 'documento-completo-100-paginas.pdf',
    durationOrPages: '100 páginas (PDF Descarga)',
    highlights: [
      'Descarga inmediata del archivo PDF completo',
      'Texto íntegro de investigación con notas al pie',
      'Marco teórico y estado del arte de la IA en educación',
      'Estudios de caso en 25 países y 13 plataformas',
    ],
  },
];
