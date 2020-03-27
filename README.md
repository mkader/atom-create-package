# mak-test-package package

A short description of your package.

![A screenshot of your package](https://f.cloud.github.com/assets/69169/2290250/c35d867a-a017-11e3-86be-cd7c5bf3ff9b.gif)




Install & Verify Atom
----------------------
	- Download Atom https://atom.io/
	- cmd "apm install", Install the Atom Package Manager
	- cmd "apm -v" , check whether the apm was installed correctly
		     apm  2.4.3
		     npm  6.2.0
		     node 10.2.1 x64
		     atom 1.41.0
		     python 2.7.10
		     git 2.19.0
Generating package
------------------
	- Launch the Atom and press cmd+shift+p to open Command Palette.
	- Search for "Generate Package", type the name of the package (ex: mak-test-package), press enter to generate the package.
	- Atom > from the package(mak-test-package), Open the Command Palette again and run the “Window: Reload” or ctrl+shift+f5 command. 
	- Go to Packages > mak-test-package > Toggle ->  you can see the msg. Press Toggle to hide
Implement your code change
--------------------------
	- lib > mak-test-package.js, replace the code
		toggle() {
		  let editor
		  if (editor = atom.workspace.getActiveTextEditor()) {
		    let selection = editor.getSelectedText()
		    editor.insertText(selection.toUpperCase())
		  }
		}
	- Reload Atom by "running Window"  or ctrl_shift_f5
	- Select/type any text from the editor, right click and select “Toggle user-package” to run the code, it will change to all caps
Push our code in git
--------------------
	- Create a repository in git and copy the repo_url
	- Package folder path (C:\mak\projects\atom-package\mak-test-package), cmd "git init" , convert the local project to git project
	- Add a new remote, cmd  "git remote add origin repo_url" => "git remote add origin git@github.com:mkader/atom-create-package.git"
	- cmd "git add .",  adds all modified/new files in the current directory to the staging area.
	- cmd "git commit -m commit_message", commit the changes
	- cmd "git push --set-upstream origin master", push the changes to git, 
Publish our package in atom
---------------------------
	- Check the package with the same name has already been published to atom.io/packages
	- Create account with https://atom.io/account using github
	- Updates the version field & git path in the package.json file and commits it.
		{
		  "name": "mak-test-package",
		  "main": "./lib/mak-test-package",
		  "version": "0.1.0",
		  "description": "A short description of your package",
		  "keywords": [],
		  "activationCommands": {
		    "atom-workspace": "mak-test-package:toggle"
		  },
		  "repository": "https://github.com/mkader/atom-create-package",
		  "license": "MIT",
		  "engines": {
		    "atom": ">=1.0.0 <2.0.0"
		  },
		  "dependencies": {}
		}

	- From package folder, cmd "apm publish minor" => apm publish version-type
		- where version-type can be major, minor and patch.
		- major - increment the 1st number of the version before publishing so the published version will be 1.0.0 and the Git tag created will be v1.0.0.
		- minor - increment the second number like 0.1.0/v0.1.0.
		- patch - increment the third number like 0.0.1/v0.0.1.
		- "apm help publish" for help

		PS C:\mak\projects\atom-package\mak-test-package> apm publish minor
			Welcome to Atom!

			Before you can publish packages, you'll need an API token.

			Visit your account page on Atom.io https://atom.io/account,
			copy the token and paste it below when prompted.

			Press [Enter] to open your account page on Atom.io. 
			Token> _bNQFNVsR1C5bsWcSuWhj0Q
			Saving token to Keychain done
			Registering mak-test-package failed
			Registering package in atom/mak-test-package repository failed: That repo does not exist, isn't an atom package, or you do not have access
		
		PS C:\mak\projects\atom-package\mak-test-package> apm publish minor
			Registering mak-test-package failed
			Registering package in atom/mak-test-package repository failed: That repo does not exist, isn't an atom package, or you do not have access
		
		PS C:\mak\projects\atom-package\mak-test-package> apm publish minor
			Registering mak-test-package done
			Preparing and tagging a new version failed
			npm ERR! Git working directory not clean.
			npm ERR! M package.json

			npm ERR! A complete log of this run can be found in:
			npm ERR!     C:\Users\Mohideen.Kader\AppData\Roaming\npm-cache\_logs\2020-03-27T17_07_13_128Z-debug.log
		
		PS C:\mak\projects\atom-package\mak-test-package> git add .
		PS C:\mak\projects\atom-package\mak-test-package> git commit -m "git path changed and version changed"
		PS C:\mak\projects\atom-package\mak-test-package> git push --set-upstream origin master
		
		PS C:\mak\projects\atom-package\mak-test-package> apm publish minor
			Preparing and tagging a new version done
			Pushing v0.1.0 tag done
			Publishing mak-test-package@v0.1.0 done
		
Install the published package
-----------------------------
	- Check whether the package is published successfully
  - Install the package from the settings page.

