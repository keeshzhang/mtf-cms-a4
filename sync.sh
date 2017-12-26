ng build --prod
rsync -azP dist/assets ../mtf-cms/src/main/resources
rsync -azP dist/styles*.bundle.css ../mtf-cms/src/main/resources/assets/styles.bundle.css 
rsync -azP dist/inline*.bundle.js ../mtf-cms/src/main/resources/assets/inline.bundle.js
rsync -azP dist/polyfills*.bundle.js ../mtf-cms/src/main/resources/assets/polyfills.bundle.js 
#rsync -azP dist/vendor*.bundle.js ../mtf-cms/src/main/resources/assets/vendor.bundle.js 
rsync -azP dist/scripts*.bundle.js ../mtf-cms/src/main/resources/assets/scripts.bundle.js 
rsync -azP dist/main*.bundle.js ../mtf-cms/src/main/resources/assets/main.bundle.js 

rsync -azP dist/fontawesome-webfont*.eot ../mtf-cms/src/main/resources/assets/fontawesome-webfont.eot
rsync -azP dist/fontawesome-webfont*.woff2 ../mtf-cms/src/main/resources/assets/fontawesome-webfont.woff2
rsync -azP dist/fontawesome-webfont*.woff ../mtf-cms/src/main/resources/assets/fontawesome-webfont.woff
rsync -azP dist/fontawesome-webfont*.ttf ../mtf-cms/src/main/resources/assets/fontawesome-webfont.ttf
rsync -azP dist/fontawesome-webfont*.svg ../mtf-cms/src/main/resources/assets/fontawesome-webfont.svg

sed -i -e "s/fontawesome-webfont.[0-9a-zA-Z]*.eot/fontawesome-webfont.eot/g" ../mtf-cms/src/main/resources/assets/styles.bundle.css
sed -i -e "s/fontawesome-webfont.[0-9a-zA-Z]*.woff2/fontawesome-webfont.woff2/g" ../mtf-cms/src/main/resources/assets/styles.bundle.css
sed -i -e "s/fontawesome-webfont.[0-9a-zA-Z]*.woff/fontawesome-webfont.woff/g" ../mtf-cms/src/main/resources/assets/styles.bundle.css
sed -i -e "s/fontawesome-webfont.[0-9a-zA-Z]*.ttf/fontawesome-webfont.ttf/g" ../mtf-cms/src/main/resources/assets/styles.bundle.css
sed -i -e "s/fontawesome-webfont.[0-9a-zA-Z]*.svg/fontawesome-webfont.svg/g" ../mtf-cms/src/main/resources/assets/styles.bundle.css

