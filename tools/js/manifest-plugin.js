/*
 * Create .manifest files for assets
 */

(function(){
    var manifests  = null,
    alert  = function(val){print(val);},
    setText    = function(path, text, list){
	    list.push({
	    	name: path,
	    	content: text
	    });
	    return text;
    },
    checkPush  = function(list, item){
	    var itIsThere = false;
	    if(list){
		    for (var index in list){
			    if(list[index] === item) itIsThere = true;
		    }
		    if(!itIsThere) list.push(item);
	    }
	    return item;
    },
    hypPath    = function(path){
	    return path.replace(workingDir, '').replace(/\.\.\//g, '').replace(/\//g, '-').replace(/images-/, '').replace(/audio-/, '').replace(/fonts-/, '');
    },
    putInFolder= function(path){
	    if(isImage(path)){
		    return 'i/' + path;
	    } else if(isAudio(path)){
		    return 'a/' + path;
	    } else if(isFont(path)){
		    return 'f/' + path;
	    }
	    return path;
    },
    addAllTypes = function(src, aspects, path, remSF){
		var i    = 0,
		newSrc   = src.split('.'),
		ext      = newSrc[newSrc.length - 1];

		if(manifests[ext]){
			for(i = 0; i < manifests[ext].length; i++){
				newSrc[newSrc.length - 1] = manifests[ext][i];
				handleAsset(newSrc.join('.'), aspects[manifests[ext][i]], path, remSF);
			}
			return;
		} else {
			return handleAsset(src, aspects['default'], path, remSF);
		}
	},
    createManifest = function(build, game){
	    var source = game.source,
	    paths      = build.paths || {},
	    path       = '',
	    buildPath  = '',
	    maniPath   = 'cache.manifest',
	    section    = source['assets'],
	    asset      = undefined,
	    assetId    = 0,
	    i          = 0,
	    remSF      = ((build.index === false)?build.id + '/':false),
	    tempMan    = '',
	    version    = game.version;

		path = paths["assets"] || paths["default"] || '';
   		if(build.index === false){
    		path += build.id + '/';
    	}
   		
	    for (assetId in section){
	    	asset = section[assetId];
		    try {
			    if(asset.src && (typeof asset.src == 'string') && (asset.cache !== false)){
				    print('...Adding "' + asset.id + '" to manifest.');
	    			if(manifests){
	    				addAllTypes(asset.src, aspects, path, remSF);
	    			} else {
			    		handleAsset(asset.src, aspects["default"], path, remSF);
	    			}
			    }
		    } catch(e) {
			    alert('Error in processing asset: "' + assetId + '": ' + e.description);
		    }
	    }

	    build.manifestTemplate = build.manifestTemplate.replace('CACHE:', 'CACHE:\n' + aspects["default"].join('\n'));
	    build.manifestTemplate = build.manifestTemplate.replace('# Version', '# Version ' + version);
	    
	    if (!fileSystem.FolderExists(buildDir)) fileSystem.CreateFolder(buildDir);
	    buildPath = buildDir + build.id + '/';
	    if (!fileSystem.FolderExists(buildPath)) fileSystem.CreateFolder(buildPath);

	    if(build.index === false){
	        buildPath += build.id + '/';
		    if (!fileSystem.FolderExists(buildPath)) fileSystem.CreateFolder(buildPath);
	    }

	    // setup manifest from template
		path = paths["default"] || '';
		if(build.index === false){
    		path += build.id + '/';
    	}

		print('...Handling multiple app cache manifests.');

	    if(build.index === false){
	    	maniPath = build.id + '/cache.manifest';
	    }
	    build.htaccessTemplate += 'AddType text\/cache-manifest .manifest\n';
	    build.htmlTemplate = build.htmlTemplate.replace('<html>', '<html manifest="' + maniPath + '">');
	    build.manifestTemplate = build.manifestTemplate.replace('CACHE:', 'CACHE:\n' + path + 'j\/game-' + version + '.js\n' + path + 's\/game-' + version + '.css\n');

	    try{
	        fileSystem.DeleteFile(buildPath + '*.manifest');
	    } catch(e) {}

	    build.files = build.files || [];
	    if(game.manifest){ // Prepare multiple manifest files
	    	var rewriteConds = [];
	    	
	    	build.htaccessTemplate += '\nRewriteEngine on\n';
	    	
	    	for (i in aspects){
	    		if(i !== 'default'){
		    		tempMan = build.manifestTemplate.replace('CACHE:', 'CACHE:\n' + aspects[i].join('\n'));
		    		build.htaccessTemplate += '\nRewriteCond %{HTTP_USER_AGENT} "';
			    	rewriteConds.length = 0;
				    for(supId in game.manifest){
				    	for(uaId in game.manifest[supId]){
			    			if(game.manifest[supId][uaId] === i){
			    				rewriteConds.push(uaId);
				    		}
				    	}
				    }
				    build.htaccessTemplate += rewriteConds.join('|');
				    build.htaccessTemplate += '" [NC]\nRewriteRule ^cache\\.manifest$ ' + i + '.manifest [L]\n';
		        	print('....Creating "' + i + '.manifest".');
				    setText(buildPath + i + '.manifest', tempMan, build.files);
	    		}
	    	}
	    } else {
		    setText(buildPath + 'cache.manifest', build.manifestTemplate, build.files);
	    }
   },
   isImage    = function(path){
	   var check = path.substring(path.length - 4).toLowerCase();
	   return (check === '.jpg') || (check === 'jpeg') || (check === '.png') || (check === '.gif') || (check === '.ico');
   },
   isAudio    = function(path){
	   var check = path.substring(path.length - 4).toLowerCase();
	   return (check === '.ogg') || (check === '.mp3') || (check === '.m4a') || (check === '.wav') || (check === '.mp4');
   },
   isFont    = function(path){
	   var check = path.substring(path.length - 4).toLowerCase();
	   return (check === '.ttf') || (check === '.otf') || (check === 'woff');
   },
   isCSS     = function(path){
	   var check = path.substring(path.length - 4).toLowerCase();
	   return (check === '.css');
   },
   isJS      = function(path){
	   var check = path.substring(path.length - 3).toLowerCase();
	   return (check === '.js');
   },
   handleAsset = function(src, assets, absolutePath, removeSubFolder){
	    var path = '';
	   
		if((src.substring(0,4).toLowerCase() !== 'http') && (isImage(src) || isAudio(src) || isFont(src))){
			path = absolutePath + putInFolder(hypPath(src));
			if(removeSubFolder){
				return checkPush(assets, path.replace(removeSubFolder, ''));
			} else {
				return checkPush(assets, path);
			}
		} else if(isImage(src) || isAudio(src) || isFont(src) || isCSS(src) || isJS(src)){
			return checkPush(assets, src);
		}
   },
   game       = config;
   workingDir = game.toolsConfig["source-folder"] || '../game/',
   buildDir   = game.toolsConfig["destination-folder"] || '../builds/',
   builds     = game.builds,
   buildIndex = 0,
   aspects    = {"default": []},
   supports   = game.manifest || false,
   supId      = '',
   uaId       = '',
   i          = 0,
   j          = 0;

    //Create builds
    print('Preparing to create manifests.');
    
    if(supports){ // Prepare multiple manifest files
	    print('.Creating arrays to store cache.manifest file versions.');
	    for(supId in supports){
	    	for(uaId in supports[supId]){
    			if(!aspects[supports[supId][uaId]]){
	    			aspects[supports[supId][uaId]] = ['\n# ' + supId.toUpperCase() + ' - ' + supports[supId][uaId] + ':\n'];
	    		}
	    	}
	    }

	    manifests = {};
 		for (i in game.manifest){
 			var listAspects = [];
 			for (j in game.manifest[i]){
 				checkPush(listAspects, game.manifest[i][j]);
 				manifests[game.manifest[i][j]] = listAspects;
 			}
 		}
    }
    
    for (buildIndex in builds){
    	if(builds[buildIndex].manifest){
        	print('..Compiling manifest for build "' + builds[buildIndex].id + '".');
        	createManifest(builds[buildIndex], game);
    	} else {
        	print('..Manifest not requested for build "' + builds[buildIndex].id + '".');
    	}
	}
    print('Completed script compilation. Hurrah!');
})();