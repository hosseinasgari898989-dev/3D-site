/* THE 3D FORMULA v4 — extracted core reference */

export const FORMULA_CORE =
  "BUGFREE_3D = ( SCENE × DEPTH ) + ( SCROLL × MOTION ) + ( RULES ÷ COMPLEXITY )";

export const FORMULA_LINES = [
  { key: "SCENE", fa: "یک بوم WebGL، کم‌هندسه، با تشخیص توان دستگاه و fallback" },
  { key: "DEPTH", fa: "سه لایه‌ی عمق واقعی: پس‌زمینه / میان‌بومی / نمایان، با translateZ" },
  { key: "SCROLL", fa: "اسکرول = پیش‌بر دوربین؛ مقدار نرمال ۰ تا ۱، بدون خواندن layout در هر فریم" },
  { key: "MOTION", fa: "حرکت زمان‌محور با delta + damping، نه tween بی‌پایان" },
  { key: "RULES", fa: "cleanup، dispose، clamp dpr، توقف رندر خارج از دید، context-loss" },
  { key: "COMPLEXITY", fa: "هر فیچر اضافه هزینه و ریسک دارد؛ کم بساز، درست بساز" },
] as const;

/* Core rules */
export const RULES = {
  threeLayerArchitecture: true,
  mobileFirst: true,
  rtl: true,
  reducedMotion: true,
  deltaTimeMotion: true,
  cleanupAndDispose: true,
  visibilityBasedRendering: true,
  webGLFallback: true,
  touchTargetPx: 44,
  maxMobileDpr: 1.5,
} as const;

/* The source formula also emphasizes:
   - CSS 3D for DOM depth
   - WebGL/Three only where real 3D is useful
   - no layout reads in scroll handlers
   - no frame-rate-dependent animation
   - fallback when WebGL/context is unavailable
   - build/console/overflow/mobile checks before shipping
*/
