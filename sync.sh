ng build --prod
rsync -azP dist/assets ../mtf-cms/src/main/resources
rsync -azP dist/inline.*.bundle.js ../mtf-cms/src/main/resources/assets/inline.bundle.js
rsync -azP dist/main.*.bundle.js ../mtf-cms/src/main/resources/assets/main.bundle.js 
rsync -azP dist/polyfills.*.bundle.js ../mtf-cms/src/main/resources/assets/polyfills.bundle.js 
rsync -azP dist/styles.*.bundle.css ../mtf-cms/src/main/resources/assets/styles.bundle.css 
rsync -azP dist/vendor.*.bundle.js ../mtf-cms/src/main/resources/assets/vendor.bundle.js 
