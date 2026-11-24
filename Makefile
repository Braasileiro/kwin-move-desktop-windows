PACKAGE := kwin-move-desktop-windows.kwinscript

.PHONY: package clean

package:
	zip -r -X $(PACKAGE) metadata.json contents/

clean:
	rm -f $(PACKAGE)
