index.html: source.md
	pandoc -f markdown -t html --toc --template template.html -o "$@" "$<"
