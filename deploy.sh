rm -rf dist &&
pnpm run build &&
cd dist &&
git init &&
git add . &&
git commit -m "Deploy to GitHub Pages" &&
git remote add origin git@github.com:songenen/rui-website.git &&
git push -f -u origin master &&
cd -
echo "Deploy success!"
echo https://songen.buzz/rui-website/#/