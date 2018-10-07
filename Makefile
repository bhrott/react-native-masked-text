copy-to-test:
	rm -rf ../rn-test/react-native-masked-text
	npm run clean
	npm run build
	cp -R dist ../rn-test/react-native-masked-text