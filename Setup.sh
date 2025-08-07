mkdir -p server .github/workflows
git mv Code.gs server/
git mv github:workflows:... .github/workflows/deploy.yml
git mv public.index.html public/index.html