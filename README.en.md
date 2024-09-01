npm install
npm run docs:build
cd docs/.vitepress/
rm -rf /build/vite_press/dist
mv dist /build/vite_press/
nginx -s reload
