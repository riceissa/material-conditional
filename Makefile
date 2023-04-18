index.html: source.html
	mjpage --output CommonHTML < "$<" > "$@"
