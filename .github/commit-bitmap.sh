git config --global user.name '${{ github.actor }}'
git config --global user.email '${{ github.actor }}@users.noreply.github.com'
git add .bitmap
if output=$(git status .bitmap --porcelain) && [ -z "$output" ]; then
echo "No changes on components"
else 
git commit -m "chore(bitmap): update .bitmap with new component versions (automated). --skip-ci"
git push
fi