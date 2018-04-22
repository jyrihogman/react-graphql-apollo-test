docker cp collections.js moviemongo:/data
docker exec moviemongo bash -c 'mongo < /data/collections.js'