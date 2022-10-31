backend_init: 
	cd backend/ &&  sudo docker-compose up -d
clean:
	find . -name "*.aux" -type f -delete
	cd doc/ && rm -f Memories.toc Memories.out Memories.lot Memories.log Memories.lof Memories.ind Memories.ilg Memories.fls Memories.fdb_latexmk Memories.brf Memories.blg Memories.bbl Memories.idx Memories.loa *.gz
run-ios: 
	cd frontend/mobile_app_react_native/ && make