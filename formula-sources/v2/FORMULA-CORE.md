# 3D Formula v2 — Core Reference

این فایل خلاصه‌ی قابل‌استفاده از `new-chat.zip` است و اصول اصلی فرمول را برای پروژه‌های آینده نگه می‌دارد.

## 0 — قوانین آهنین
- APIها و نسخه‌های کتابخانه را حدس نزن.
- Mobile-first.
- هدف کارایی: دسکتاپ حدود 60fps و موبایل میان‌رده حدود 45fps.
- صفر خطای کنسول/WebGL.
- geometry/material/texture باید cleanup و dispose شوند.
- prefers-reduced-motion رعایت شود.
- خوانایی و کنتراست در اولویت است.
- خروجی باید واقعاً build و اجرا شود.

## 1 — Stack
React 18/19 + TypeScript strict + Vite.
برای 3D: three + @react-three/fiber + @react-three/drei.
DOM motion: framer-motion.
Smooth scroll: Lenis با lerp حدود 0.08 تا 0.12.
UI: Tailwind CSS + lucide-react.
ساختار: components / three / data / hooks / lib.

## 2 — 3D infrastructure
dpr محدود؛ روی موبایل حدود 1.5.
Canvas با antialias، alpha و high-performance.
صحنه‌ی خارج از دید باید render نشود.
برای assetهای async از Suspense استفاده شود.
webglcontextlost باید مدیریت شود.
Canvasهای همزمان محدود نگه داشته شوند.

## 3 — Light / Color / Material
پس‌زمینه‌ی عمیق، یک رنگ اصلی و یک accent سرد.
نورپردازی محدود و هدفمند.
Fog برای عمق.
Drei materials در صورت کفایت، shader فقط با دلیل.
از dependencyهای شبکه‌ای غیرضروری برای environment پرهیز شود.

## 4 — Motion
داخل useFrame setState نکن.
برای حرکت از ref و MathUtils.damp/lerp استفاده کن.
چرخش‌ها با delta-time نوشته شوند.
Float/Sparkles برای حیات صحنه، با بودجه‌ی محدود.

## 5 — Scroll
Lenis فقط یک‌بار در ریشه initialize و در cleanup نابود شود.
scroll progress برای دوربین/scale/color استفاده شود.
revealها یک‌بار انجام شوند.
از layout read در scroll loop پرهیز شود.
RTL progress bar و transform origin باید آگاهانه تنظیم شود.

## 6 — Mobile
touch-action: pan-y.
OrbitControls روی موبایل با zoom/pan محدود یا خاموش.
polygon و particle budget در موبایل کاهش یابد.
تایپوگرافی با clamp.
touch target حداقل 44px.
LCP و متن قبل از صحنه‌ی سنگین بارگذاری شوند.

## 7 — Desktop
mouse parallax از window گرفته شود.
tilt کارت‌ها محدود و نرم باشد.
keyboard navigation و focus واضح وجود داشته باشد.
محتوا متراکم و شلوغ نشود.

## 8 — UI / RTL
html دارای dir=rtl.
فونت فارسی Vazirmatn و فونت کد monospace.
gradient text فقط برای کلمات کلیدی.
glass و glow محدود و هدفمند.
emoji در UI استفاده نشود.

## 9 — Performance
حجم اولیه، texture و geometry بودجه داشته باشند.
منابع قابل‌تکرار memoize/clone شوند.
تصاویر lazy باشند مگر LCP.
بخش‌های پایین صفحه code-split شوند.
third-party فقط در صورت ضرورت.

## 10 — Bug Prevention
ErrorBoundary دور Canvas.
هر listener/observer/rAF cleanup کامل داشته باشد.
window/document در render سروری مستقیماً استفاده نشود.
درخواست شبکه AbortController داشته باشد.
TypeScript strict و بدون any.

## 11 — Final checklist
mobile واقعی، desktop، Safari، reduced-motion و شبکه کند بررسی شوند.
بدون horizontal overflow.
کنسول تمیز.
fallback بدون WebGL.
render خارج از دید متوقف.
کنتراست و keyboard focus صحیح.
LCP و FPS بررسی شود.

## 12 — AI execution order
1. Stack و اسکلت.
2. Hero سه‌بعدی و motion.
3. Mobile + RTL از ابتدا.
4. Performance + bug prevention.
5. Build و checklist نهایی.

### Fast prompt
یک سایت 3D RTL با React + TypeScript + Vite + Tailwind بساز؛ Three/R3F/Drei را فقط برای بخش‌های واقعاً سه‌بعدی استفاده کن، dpr را محدود کن، حرکت را delta-time + damping کن، اسکرول را Lenis و scroll progress مدیریت کن، render خارج از دید را متوقف کن، WebGL fallback داشته باش، تمام منابع و listenerها را cleanup/dispose کن، mobile-first و reduced-motion و touch target ≥44px را رعایت کن، و قبل از تحویل build/console/mobile/overflow را تست کن.
