# 3D Site Formula

یک فرمول reusable و سبک برای ساخت landing page / portfolio / product site های سینمایی و 3D-style با **Vanilla HTML + CSS + JS**.

## هسته

- Scroll storytelling با sticky chapters
- Progress bar و scroll trail با SVG
- تغییر مرحله‌ای background با scroll state
- SVG path drawing / glowing nodes / orbit motion
- 3D tilt سبک با `pointermove` و `perspective`
- Glass / glow / gradient / depth system
- Reveal animation با `IntersectionObserver`
- Counter / stats blocks
- Glow input / command-bar style UI
- Search panel + keyboard shortcut
- Toast feedback
- Dark / light theme
- Performance mode
- `prefers-reduced-motion`
- Responsive + touch-friendly controls
- فونت‌های local برای فارسی و tokenهای لاتین

## فایل‌های اصلی

- `index.html` — دموی زنده فرمول
- `formula.css` — سیستم بصری، تایپوگرافی، motion و responsive
- `formula.js` — scroll engine، interaction و state
- `fonts/` — IBM Plex Sans Arabic و Geist Mono

## الگوی استفاده

```html
<link rel="stylesheet" href="./formula.css">
<script src="./formula.js"></script>
```

سپس کلاس‌ها و بخش‌های موردنیاز را از `index.html` بردار و برای پروژه‌ی خودت شخصی‌سازی کن.

## اصل طراحی

فرمول، **کپی یک سایت خاص نیست**. هدف آن reusable کردن تکنیک‌ها و الگوهای طراحی است: motion choreography، scroll narrative، depth، glow، SVG و performance.

## فونت‌ها

IBM Plex Sans Arabic و Geist Mono در این repository به‌صورت local قرار می‌گیرند و مجوز مستقل SIL Open Font License 1.1 خودشان را حفظ می‌کنند.

## Performance

هسته بدون Three.js و بدون library سنگین نوشته شده است. برای پروژه‌های واقعاً سه‌بعدی می‌توان بعداً WebGL/Three.js را فقط در یک لایه‌ی جدا اضافه کرد، نه اینکه کل site به آن وابسته شود.
